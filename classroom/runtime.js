const RUNTIME_REVISION = '20261007-game-feedback-1';
let heroApi = null, stopRequested = false;
let executionPromise = null, runTransition = false, lastRunSource = null;
let pyodide = null, runtimeApi = null, runtimeReady = false, runtimeLoading = false, isRunning = false;
function updateRunButtons() {
    $('runBtn').textContent=isRunning ? '↻ Restart' : '▶ Run';
    $('runBtn').disabled=!runtimeReady || runTransition || !selectedFile().name.endsWith('.py') || !!selectedFile().binary;
    $('stopBtn').disabled=!isRunning || stopRequested;
    for (const id of ['levelsMode','freeMode','resetLevel','nextLevel']) $(id).disabled=isRunning || runTransition;
    document.querySelectorAll('#weekTabs button, #levelList button').forEach(b=>b.disabled=isRunning || runTransition || (b.dataset.week && !isWeekUnlocked(Number(b.dataset.week))));
}
function noteCodeEdit() {
    if (!runtimeReady || lastRunSource===null) return;
    const edited=$('codeInput').value!==lastRunSource;
    $('runtimeStatus').textContent=isRunning
        ? (edited ? 'Code changed. Press Restart to run your edits.' : 'Running…')
        : (edited ? 'Changes saved. Press Run to test them.' : 'Python ready');
}
async function stopCode() {
    const pending=executionPromise;
    if (!pending) return;
    stopRequested=true;
    $('runtimeStatus').textContent='Stopping…';
    runtimeApi.stop();
    if (heroApi) heroApi.stop();
    updateRunButtons();
    await pending;
}

function loadExternalScript(url) {
    return new Promise((resolve,reject)=>{const script=document.createElement('script'); script.src=url; const timer=setTimeout(()=>{script.remove();reject(Error('Python download timed out.'));},30000); script.onload=()=>{clearTimeout(timer);resolve();};script.onerror=()=>{clearTimeout(timer);script.remove();reject(Error('Python download unavailable.'));};document.head.append(script);});
}
async function initPyodide() {
    if (runtimeLoading || runtimeReady) return;
    runtimeLoading=true; $('retryRuntime').hidden=true; $('runtimeStatus').textContent='Loading Python…';
    try {
        if (typeof loadPyodide!=='function') await loadExternalScript('https://cdn.jsdelivr.net/pyodide/v0.27.0/full/pyodide.js');
        if (!pyodide) pyodide=await loadPyodide({indexURL:'https://cdn.jsdelivr.net/pyodide/v0.27.0/full/',stdout:text=>log(text,'print'),stderr:text=>log(text,'error')});
        pyodide.canvas.setCanvas2D($('canvas'));
        await pyodide.runPythonAsync("import os\nos.environ['SDL_EMSCRIPTEN_KEYBOARD_ELEMENT'] = '#canvas'");
        await pyodide.loadPackage('pygame-ce');
        const response=await fetch(`runner.py?v=${RUNTIME_REVISION}`, {cache:'no-store'}); if(!response.ok) throw Error('Could not load the Python runner.');
        pyodide.FS.writeFile('/home/pyodide/_codehaven_runner.py',await response.text());

        const heroResponse=await fetch(`hero_game.py?v=${RUNTIME_REVISION}`, {cache:'no-store'});if(!heroResponse.ok) throw Error('Could not load the hero game.');
        pyodide.FS.writeFile('/home/pyodide/hero_game.py',await heroResponse.text());
        // A retry must import the downloaded modules, not reuse Python's module cache.
        await pyodide.runPythonAsync(`import sys, importlib, pathlib
for module_name in ('hero_game', '_codehaven_runner'):
    sys.modules.pop(module_name, None)
    for cached in pathlib.Path('/home/pyodide/__pycache__').glob(module_name + '.*.pyc'):
        cached.unlink()
importlib.invalidate_caches()`);
        runtimeApi?.destroy?.(); heroApi?.destroy?.();
        runtimeApi=pyodide.pyimport('_codehaven_runner');
        heroApi=pyodide.pyimport('hero_game');
        await pyodide.runPythonAsync("import sys, os\nos.makedirs('/project', exist_ok=True)\nif '/project' not in sys.path: sys.path.insert(0, '/project')");
        runtimeReady=true; $('runtimeStatus').textContent='Python ready'; clearConsole(); log('Ready. Write Python and press Run.'); previewLevel();
    } catch(error) { $('runtimeStatus').textContent='Python unavailable'; log(error.stack || String(error),'error'); showError({message:'Check your internet connection, then press Retry Python.'},'Python could not load.'); $('retryRuntime').hidden=false; }
    finally {runtimeLoading=false; updateRunButtons();}
}
async function runCode() {
    if (course.mode==='levels' && !isWeekUnlocked(currentLevel().week)) return;
    if (!runtimeReady || runTransition || selectedFile().binary || !selectedFile().name.endsWith('.py')) return;
    runTransition=true; updateRunButtons();
    try {
        if (executionPromise) await stopCode();
        if ($('ideWorkspace').hidden) return;
        syncEditor();
        const selected={...selectedFile()};
        const lessonRun=course.mode==='levels';
        const files=lessonRun ? [selected] : project.files.map(f=>({...f}));
        const level=lessonRun ? currentLevel() : null;
        lastRunSource=selected.content;
        executionPromise=executeCode({selected,files,lessonRun,level});
    } catch(error) { log(error.stack || String(error),'error'); showError(error,'Could not start this run.'); }
    finally { runTransition=false; updateRunButtons(); }
    await executionPromise;
}
async function executeCode({selected,files,lessonRun,level}) {
    stopRequested=false; $('winScreen').hidden=true;
    isRunning=true; updateRunButtons(); save(); clearConsole(); $('levelResult').hidden=!lessonRun; $('runtimeStatus').textContent='Running…';
    if(lessonRun) { $('resultTitle').textContent='Running your plan…'; $('resultText').textContent='Watch your hero follow the steps.'; $('nextLevel').hidden=true; }
    showOutput(lessonRun || files.some(f=>!f.binary && /\bpygame\b/.test(f.content)));
    try {
        await pyodide.runPythonAsync(`import sys, os, shutil, importlib
os.environ['SDL_EMSCRIPTEN_KEYBOARD_ELEMENT'] = '#canvas'
for name, module in list(sys.modules.items()):
    if str(getattr(module, '__file__', '')).startswith('/project/'):
        del sys.modules[name]
os.chdir('/home/pyodide')
shutil.rmtree('/project', ignore_errors=True)
os.mkdir('/project')
os.chdir('/project')
importlib.invalidate_caches()`);
        for (const f of files) pyodide.FS.writeFile('/project/'+f.name,f.binary ? Uint8Array.from(atob(f.content),c=>c.charCodeAt(0)) : f.content);
        if(lessonRun) heroApi.preview(JSON.stringify(level.world));
        if(stopRequested) {if(lessonRun) {const outcome=JSON.parse(heroApi.outcome());resetHeroAfterRun(level);reportLevel(outcome,'stopped');} return;}
        const result=await runtimeApi.start(selected.content,'/project/'+selected.name);
        const error=result==='error' ? JSON.parse(runtimeApi.error_details()) : null;
        if(result==='error') showError(error);
        if(lessonRun) {
            if(!stopRequested && result!=='stopped') await heroApi.play(Number($('playbackSpeed').value) || .12);
            const outcome=JSON.parse(heroApi.outcome());
            const status=stopRequested?'stopped':result;
            if(!outcome.passed || status!=='finished') resetHeroAfterRun(level);
            reportLevel(outcome,status,error);
        }
        log(result==='error'?'Run failed.':stopRequested || result==='stopped'?'Stopped.':'Finished.');
    } catch(error) {log(error.stack || String(error),'error');showOutput(lessonRun);showError(error,'Could not finish this run.');if(lessonRun) resetHeroAfterRun(level);}
    finally {
        isRunning=false;executionPromise=null;updateRunButtons();noteCodeEdit();
        if (!$('ideWorkspace').hidden && (document.activeElement===$('runBtn') || document.activeElement===$('stopBtn') || document.activeElement===$('canvas'))) {
            $('codeInput').focus({preventScroll:true});
        }
    }
}
$('runBtn').onclick=runCode;
$('stopBtn').onclick=stopCode;
$('retryRuntime').onclick=initPyodide;

function resetHeroAfterRun(level) {
    try {
        // Older cached game modules already expose preview. Keep failed-run feedback
        // usable even when a deployment briefly serves files from different versions.
        if (typeof heroApi?.reset_after_run === 'function') heroApi.reset_after_run();
        else if (typeof heroApi?.preview === 'function') heroApi.preview(JSON.stringify(level.world));
        else throw new Error('The game is not ready. Press Retry Python.');
        return true;
    } catch(error) {
        log('The map could not reset: '+(error.message || String(error)), 'error');
        return false;
    }
}

function previewLevel() {
    if(!runtimeReady || isRunning || course.mode!=='levels') return;
    try { heroApi.preview(JSON.stringify(currentLevel().world)); showOutput(true); }
    catch(error) {log(error.stack || String(error),'error');showError(error,'Could not draw the map.');}
}
