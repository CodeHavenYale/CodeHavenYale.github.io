'use strict';
const $ = id => document.getElementById(id);
const PROJECT_KEY = 'codehaven.ide.v1';
let project = {version:1, active:'main.py', files:[{name:'main.py',content:''}]};
function validName(name) { return typeof name === 'string' && /^[\w.-]+$/.test(name) && name !== '.' && name !== '..'; }
function validateProject(value) {
    if (!value || value.version !== 1 || !Array.isArray(value.files) || !value.files.length) throw Error('Saved project is invalid.');
    const names = new Set();
    for (const file of value.files) {
        if (!validName(file.name) || names.has(file.name) || typeof file.content !== 'string' || (file.binary !== undefined && typeof file.binary !== 'boolean')) throw Error('Invalid project file.');
        if (file.binary) atob(file.content);
        names.add(file.name);
    }
    if (!names.has(value.active)) value.active = value.files[0].name;
    return value;
}
let saveBlocked = false;
try { const saved = localStorage.getItem(PROJECT_KEY); if (saved) project = validateProject(JSON.parse(saved)); }
catch { saveBlocked = true; $('saveStatus').textContent = 'Saved project unavailable'; }
function selectedFile() { if (typeof course !== 'undefined' && course.mode === 'levels') return courseFile(); return project.files.find(f => f.name === project.active); }
function save() {
    if (typeof course !== 'undefined' && course.mode === 'levels') { saveCourse(); return; }
    if (saveBlocked) return;
    try { localStorage.setItem(PROJECT_KEY,JSON.stringify(project)); $('saveStatus').textContent = 'Saved on this device'; }
    catch { $('saveStatus').textContent = 'Could not save on this device'; }
}
function cursor() {
    const before = $('codeInput').value.slice(0,$('codeInput').selectionStart).split('\n');
    $('cursorStatus').textContent = `Ln ${before.length}, Col ${before.at(-1).length+1}`;
}
function lines() { $('lineNumbers').textContent = Array.from({length:$('codeInput').value.split('\n').length},(_,i)=>i+1).join('\n'); cursor(); if (typeof highlight === 'function') highlight(); }
function render() {
    if (typeof course !== 'undefined' && course.mode === 'levels') { renderLesson(); return; }
    $('fileList').replaceChildren();
    for (const file of project.files) {
        const button = document.createElement('button'); button.textContent = file.name;
        button.className = file.name === project.active ? 'active' : '';
        button.setAttribute('aria-current',String(file.name === project.active));
        button.onclick = () => { project.active = file.name; render(); save(); };
        $('fileList').append(button);
    }
    const file = selectedFile(); $('currentFile').textContent = file.name;
    $('codeInput').value = file.binary ? 'Binary asset — available to your Python files by filename.' : file.content;
    $('codeInput').readOnly = !!file.binary; lines();
    if (typeof updateRunButtons === 'function') updateRunButtons();
}
function syncEditor() {
    if (!selectedFile().binary) selectedFile().content = $('codeInput').value;
    save();
}
$('codeInput').addEventListener('input',()=>{
    syncEditor(); lines();
    if (typeof noteCodeEdit === 'function') noteCodeEdit();
});
// SDL must never consume text entry, navigation, clipboard or IME keys.
// Stop bubbling, not the browser's default editing behavior.
for (const field of document.querySelectorAll('input, textarea, select')) {
    for (const type of ['keydown','keypress','keyup']) {
        field.addEventListener(type,event=>event.stopPropagation());
    }
}
$('codeInput').addEventListener('click',cursor); $('codeInput').addEventListener('keyup',cursor);
$('codeInput').addEventListener('scroll',()=>{$('lineNumbers').scrollTop = $('codeInput').scrollTop; if (typeof syncHighlight === 'function') syncHighlight();});
$('codeInput').addEventListener('keydown',event=>{
    if (event.key === 'Tab' && !$('codeInput').readOnly) {
        event.preventDefault(); const input = $('codeInput'); input.setRangeText('    ',input.selectionStart,input.selectionEnd,'end'); input.dispatchEvent(new Event('input'));
    }
});
document.addEventListener('keydown',event=>{
    if ($('ideWorkspace').hidden || event.isComposing) return;
    if (event.target !== $('codeInput') && event.target?.matches?.('input, textarea, select')) return;
    if ((event.ctrlKey || event.metaKey) && event.key === 'Enter') { event.preventDefault(); runCode(); }
    if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 's') { event.preventDefault(); save(); }
}, true);
let namingMode = 'new';
function nameDialog(mode) { namingMode = mode; $('nameTitle').textContent = mode === 'new' ? 'New file' : 'Rename file'; $('fileName').value = mode === 'new' ? '' : project.active; $('nameError').textContent = ''; $('nameDialog').showModal(); $('fileName').focus(); }
$('newFile').onclick = ()=>nameDialog('new'); $('renameFile').onclick = ()=>nameDialog('rename');
$('cancelName').onclick = ()=>$('nameDialog').close();
$('nameForm').onsubmit = event=>{
    event.preventDefault(); const name = $('fileName').value.trim();
    if (!validName(name)) { $('nameError').textContent = 'Use letters, numbers, underscores, dots or hyphens.'; return; }
    if (project.files.some(f=>f.name===name && (namingMode==='new' || f.name!==project.active))) { $('nameError').textContent = 'That file already exists.'; return; }
    if (namingMode === 'new') project.files.push({name,content:''}); else selectedFile().name = name;
    project.active = name; save(); render(); $('nameDialog').close(); $('codeInput').focus();
};
$('deleteFile').onclick = ()=>{
    if (!confirm(`Delete ${project.active}?`)) return;
    project.files = project.files.filter(f=>f.name!==project.active);
    if (!project.files.length) project.files.push({name:'main.py',content:''});
    project.active = project.files[0].name; save(); render();
};
function theme(dark) { document.documentElement.dataset.theme=dark?'dark':'light'; $('themeBtn').textContent=dark?'Light mode':'Dark mode'; }
try { theme(localStorage.getItem('codehaven.ide.theme')==='dark'); } catch {}
$('themeBtn').onclick=()=>{ const dark=document.documentElement.dataset.theme!=='dark'; theme(dark); try {localStorage.setItem('codehaven.ide.theme',dark?'dark':'light');} catch {} };
function showOutput(graphics) { if (typeof course !== 'undefined' && course.mode==='levels') graphics=true; $('graphics').hidden=!graphics; $('consoleOutput').hidden=graphics; $('consoleTab').setAttribute('aria-pressed',String(!graphics)); $('graphicsTab').setAttribute('aria-pressed',String(graphics)); }
$('consoleTab').onclick=()=>showOutput(false); $('graphicsTab').onclick=()=>showOutput(true);
function log(text, kind='output') {
    // Tracebacks belong in details, not in the child's main feedback message.
    const targets=kind==='error' ? ['runOutput'] : ['consoleOutput','runOutput'];
    for (const id of targets) {
        const out=$(id); out.textContent=(out.textContent+String(text)+'\n').slice(-100000); out.scrollTop=out.scrollHeight;
    }
    $('runDetails').hidden=false;
}
function showError(error, title='Check your code.') {
    $('winScreen').hidden=true;
    const raw=typeof error==='string' ? error : error?.message || 'Something went wrong while running your code.';
    const candidates=String(raw).split('\n').map(s=>s.trim()).filter(Boolean);
    const pythonLine=[...candidates].reverse().find(s=>/^[A-Za-z_][\w.]*(?:Error|Exception):/.test(s));
    let message=pythonLine || candidates[0] || 'The program stopped without a message.';
    if (/^(Traceback|PythonError|at |File |WebAssembly)/.test(message)) message='The program could not finish. Open the error details for more information.';
    if(message.length>320) message=message.slice(0,317)+'...';
    const line=Number.isInteger(error?.line) && error.line>0 ? error.line : null;
    const file=typeof error?.file==='string' && error.file!=='hero.py' ? error.file+' · ' : '';
    const hints={SyntaxError:'Check the punctuation on this line.',IndentationError:'Check the spaces at the start of this line.',TabError:'Use spaces for indentation. Avoid mixing tabs and spaces.',NameError:'Check the spelling and make sure this name has a value.',TypeError:'Check the values you passed to this command.',AttributeError:'Check the command name in the guide.',ZeroDivisionError:'You cannot divide by zero.',IndexError:'That position is outside the list.',KeyError:'That key is not in the dictionary.',ModuleNotFoundError:'Check the module name. It may not be available in this browser.',ClassroomLoopError:'Check the loop condition. It needs a way to stop.'};
    const type=error?.type || message.split(':')[0];
    $('levelResult').hidden=false;
    $('resultTitle').textContent=title;
    $('resultText').textContent=hints[type] || 'Read the message below, fix your code, and try again.';
    $('resultError').textContent=(line ? `${file}Line ${line}: ` : '')+message;
    $('resultError').hidden=false;
    $('nextLevel').hidden=true;
    if(typeof course!=='undefined' && course.mode==='free') {
        $('consoleOutput').textContent+= $('resultError').textContent+'\n';
    }
}
function clearConsole() {
    $('consoleOutput').textContent='';$('runOutput').textContent='';
    $('resultError').textContent='';$('resultError').hidden=true;
    $('runDetails').hidden=true;$('runDetails').open=false;
}
$('clearConsole').onclick=clearConsole;
render();

$('loginForm').onsubmit = async event => {
    event.preventDefault();
    const enteredCode = $('classCode').value;
    const digest = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(enteredCode));
    const codeHash = Array.from(new Uint8Array(digest), byte => byte.toString(16).padStart(2, '0')).join('');
    if (codeHash !== 'bbd9f948c7b47bb0a0ef5b29fb3436c51bb591ccb50439f4d2bb937bd43eb4cd') {
        $('loginError').textContent = 'Invalid class code. Please try again.';
        $('classCode').focus();
        return;
    }
    $('loginError').textContent = '';
    $('classCode').value = '';
    setPasswordVisible(false);
    $('loginPage').hidden = true;
    $('ideWorkspace').hidden = false;
    $('codeInput').focus();
    initPyodide();
};

function setPasswordVisible(visible) {
    $('classCode').type = visible ? 'text' : 'password';
    $('togglePassword').textContent = visible ? 'Hide' : 'Show';
    $('togglePassword').setAttribute('aria-label', visible ? 'Hide password' : 'Show password');
    $('togglePassword').setAttribute('aria-pressed', String(visible));
}
$('togglePassword').onclick = () => setPasswordVisible($('classCode').type === 'password');

$('signOut').onclick = () => {
    save();
    if (isRunning) stopCode();
    $('nameDialog').close();
    $('winScreen').hidden=true;
    lockTeacher();
    $('teacherDialog').close();
    $('ideWorkspace').hidden = true;
    $('loginPage').hidden = false;
    $('classCode').value = '';
    setPasswordVisible(false);
    $('loginError').textContent = '';
    $('classCode').focus();
};

$('canvas').addEventListener('pointerdown',()=>{
    if (typeof course!=='undefined' && course.mode==='free' && isRunning) $('canvas').focus();
});
$('canvas').addEventListener('keydown',event=>{
    // Let Tab leave a focused game even when SDL handles the other game keys.
    if(event.key==='Tab') event.stopImmediatePropagation();
});

// Keep unexpected browser/runtime failures in the same readable feedback area.
if (typeof globalThis.addEventListener === 'function') {
    globalThis.addEventListener('error',event=>{
        const error=event.error || {message:event.message};
        log(error.stack || error.message || 'Unexpected browser error','error');
        showError(error,'Something went wrong.');
    });
    globalThis.addEventListener('unhandledrejection',event=>{
        const error=event.reason || {message:'An operation could not finish.'};
        log(error.stack || String(error),'error');
        showError(error,'Something went wrong.');
    });
}
