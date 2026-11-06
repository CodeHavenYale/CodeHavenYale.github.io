const {test}=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const vm=require('node:vm');
const path=require('node:path');
const {webcrypto}=require('node:crypto');
const root=path.join(__dirname,'..');
function workspace(options={}){
    const html=fs.readFileSync(path.join(root,'index.html'),'utf8');
    const elements=new Map(),documentListeners=[];
    function element(){return {value:'',textContent:'',hidden:false,disabled:false,type:'password',selectionStart:0,selectionEnd:0,children:[],dataset:{},listeners:[],focusCount:0,classList:{toggle(){}},setAttribute(k,v){this[k]=v;},getAttribute(k){return this[k];},append(...items){this.children.push(...items);},replaceChildren(){this.children=[];},addEventListener(type,handler){this.listeners.push({type,handler});},focus(){this.focusCount++;},close(){this.open=false;},showModal(){this.open=true;}};}
    for(const match of html.matchAll(/id="([^"]+)"/g)) elements.set(match[1],element());
    for(const match of html.matchAll(/<(input|textarea|select)\b[^>]*id="([^"]+)"/g)) elements.get(match[2]).tagName=match[1];
    elements.get('ideWorkspace').hidden=true;
    elements.get('runBtn').disabled=true;
    const storage=new Map();if(options.savedCourse) storage.set('codehaven.course.v2',JSON.stringify(options.savedCourse));
    const context=vm.createContext({console,TextEncoder,TextDecoder,Uint8Array,crypto:webcrypto,atob,confirm:()=>true,setTimeout,clearTimeout,
        fetch:async name=>({ok:true,json:async()=>JSON.parse(fs.readFileSync(path.join(root,name.split('?')[0]),'utf8'))}),
        localStorage:{getItem:k=>storage.get(k)||null,setItem:(k,v)=>storage.set(k,v)},
        document:{getElementById:id=>{assert.ok(elements.has(id),`Missing element ${id}`);return elements.get(id);},createElement:element,createTextNode:text=>({textContent:text}),querySelectorAll:selector=>selector==='input, textarea, select'?[...elements.values()].filter(e=>e.tagName):[],addEventListener(type,handler,capture=false){documentListeners.push({type,handler,capture});},documentElement:element()}});
    for(const file of ['course-settings.js','curriculum.js','app.js','runtime.js','lessons.js']) {let source=fs.readFileSync(path.join(root,file),'utf8');if(file==='course-settings.js' && options.unlockedThrough) source=source.replace(/= \d+/, '= '+options.unlockedThrough);vm.runInContext(source,context,{filename:file});}
    return {context,elements,storage,documentListeners,run:code=>vm.runInContext(code,context)};
}
test('startup, login, lesson drafts, free coding and sign out',async()=>{
    const w=workspace(),get=id=>w.elements.get(id);
    assert.equal(get('weekTabs').children.length,8);
    assert.equal(get('levelList').children.length,6);
    assert.equal(get('ideWorkspace').hidden,true);
    get('classCode').value='wrong';await get('loginForm').onsubmit({preventDefault(){}});
    assert.equal(get('ideWorkspace').hidden,true);
    w.run('initPyodide = () => {};');
    get('classCode').value='CodeH@ven123';await get('loginForm').onsubmit({preventDefault(){}});
    assert.equal(get('ideWorkspace').hidden,false);
    w.run('courseFile().content = "print(42)"; chooseLevel("2-vars-1"); chooseLevel("1-1");');
    assert.equal(get('codeInput').value,'print(42)');
    w.run('setMode("free")');assert.equal(get('codeInput').value,'');
    w.run('setMode("levels")');assert.equal(get('codeInput').value,'print(42)');
    get('signOut').onclick();assert.equal(get('ideWorkspace').hidden,true);
    assert.equal(get('classCode').type,'password');
    assert.ok(w.storage.has('codehaven.course.v2'));
});
test('teacher solutions reject wrong code, unlock and lock on sign out',async()=>{
    const w=workspace(),get=id=>w.elements.get(id);
    get('teacherPassword').value='wrong';await get('teacherForm').onsubmit({preventDefault(){}});
    assert.match(get('teacherError').textContent,/Could not unlock/);
    get('teacherPassword').value='T3acher123';await get('teacherForm').onsubmit({preventDefault(){}});
    assert.match(get('teacherCode').textContent,/hero.move/);
    assert.equal(get('teacherContent').hidden,false);
    get('signOut').onclick();assert.equal(get('teacherContent').hidden,true);assert.equal(get('teacherCode').textContent,'');
});

test('all encrypted teacher solutions finish the expanded maps through the Python runner',()=>{
    const crypto=require('node:crypto');
    const {spawnSync}=require('node:child_process');
    const pack=JSON.parse(fs.readFileSync(path.join(root,'teacher-solutions.json'),'utf8'));
    const key=crypto.pbkdf2Sync('T3acher123',Buffer.from(pack.salt,'base64'),150000,32,'sha256');
    const data=Buffer.from(pack.data,'base64');
    const decipher=crypto.createDecipheriv('aes-256-gcm',key,Buffer.from(pack.iv,'base64'));
    decipher.setAuthTag(data.subarray(-16));
    const solutions=Buffer.concat([decipher.update(data.subarray(0,-16)),decipher.final()]).toString();
    const result=spawnSync('python3',['tests/check_solutions.py'],{cwd:root,input:solutions,encoding:'utf8',timeout:30000});
    assert.equal(result.status,0,result.stdout+result.stderr);
    assert.match(result.stdout,/49 solutions passed/);
});

test('lesson errors stay below the visible map and output clears between levels',()=>{
    const w=workspace(),get=id=>w.elements.get(id);
    w.run(`showOutput(true); log('Traceback: line 4', 'error'); log('ValueError: There is a wall that way.', 'error'); reportLevel({passed:false,checks:[true,false,true,false,true]}, 'error', {line:4,message:'ValueError: There is a wall that way.'}); showOutput(false);`);
    assert.equal(get('graphics').hidden,false);
    assert.equal(get('consoleOutput').hidden,true);
    assert.equal(get('resultError').hidden,false);
    assert.equal(get('resultError').textContent,'Line 4: ValueError: There is a wall that way.');
    assert.match(get('runOutput').textContent,/Traceback/);
    assert.equal(get('runDetails').hidden,false);
    assert.equal(get('runDetails').open,true);
    w.run('chooseLevel("1-4")');
    assert.equal(get('resultError').hidden,true);
    assert.equal(get('runOutput').textContent,'');
    assert.equal(get('runDetails').hidden,false);
    assert.equal(get('runDetails').open,true);
    w.run(`$('runDetails').open=false; log('Door code: 7');`);
    assert.match(get('runOutput').textContent,/Door code: 7/);
    assert.equal(get('runDetails').open,true);
    w.run('setMode("free"); showOutput(false);');
    assert.equal(get('graphics').hidden,true);
    assert.equal(get('consoleOutput').hidden,false);
});
test('progress and next challenge respect a one-week release',()=>{
    const w=workspace({unlockedThrough:1}),get=id=>w.elements.get(id);
    w.run('chooseLevel("1-3"); reportLevel({passed:true,checks:[true,true,true,true,true]},"finished")');
    assert.equal(get('courseProgress').textContent,'1 / 6 complete');
    get('nextLevel').onclick();assert.equal(w.run('course.id'),'1-4');
    w.run('chooseLevel("1-6"); reportLevel({passed:true,checks:[true,true,true,true,true]},"finished")');
    get('nextLevel').onclick();assert.equal(w.run('course.id'),'1-6');assert.equal(get('winNext').hidden,true);
});

function typeCode(w,source) {
    const editor=w.elements.get('codeInput'); editor.value=source;
    for(const listener of editor.listeners.filter(l=>l.type==='input')) listener.handler({target:editor});
}
function fakeRuntime(w,overrides={}) {
    const calls=[],files=[];
    w.context.document.activeElement=w.elements.get('runBtn');
    w.context.testPyodide={runPythonAsync:async()=>{},FS:{writeFile:(name,code)=>files.push({name,code})}};
    w.context.testRunner={start:async source=>{calls.push(source);return source.includes('missing')?'error':'finished';},stop(){},error_details:()=>JSON.stringify({line:1,message:'NameError: missing'}),...overrides.runner};
    w.context.testHero={preview(){},reset_after_run(){},play:async()=>{},outcome:()=>JSON.stringify({passed:false,checks:[true,false,true,false,true]}),stop(){},...overrides.hero};
    w.run("pyodide=testPyodide;runtimeApi=testRunner;heroApi=testHero;runtimeReady=true;$('ideWorkspace').hidden=false;updateRunButtons();");
    return {calls,files};
}
test('run, edit, run again uses exactly the visible code after success and errors',async()=>{
    const w=workspace(),runtime=fakeRuntime(w),editor=w.elements.get('codeInput');
    for (const source of ['print(1)','print(missing)','print(3)']) {
        typeCode(w,source);await w.run('runCode()');
        assert.equal(editor.value,source);
        assert.equal(w.elements.get('runBtn').disabled,false);
    }
    assert.deepEqual(runtime.calls,['print(1)','print(missing)','print(3)']);
    assert.equal(w.elements.get('resultError').hidden,true);
    assert.equal(JSON.parse(w.storage.get('codehaven.course.v2')).drafts['1-1'].content,'print(3)');
    assert.ok(editor.focusCount>=3);
    // Read the textarea at Run time even if an input event has not fired yet.
    editor.value='print(4)';await w.run('runCode()');
    assert.equal(runtime.calls.at(-1),'print(4)');
    assert.equal(runtime.files.at(-1).code,'print(4)');
});
test('game feedback keeps printed values through errors and clears on the next run',async()=>{
    const w=workspace(),get=id=>w.elements.get(id);
    fakeRuntime(w,{runner:{start:async()=>{
        w.run(`log('A: 7', 'print'); log('B: 4', 'print'); log('Traceback: internal frames', 'error');`);
        return 'error';
    }}});
    typeCode(w,'print(missing)');await w.run('runCode()');
    assert.equal(get('graphics').hidden,false);
    assert.equal(get('gameError').hidden,false);
    assert.equal(get('gameErrorText').textContent,'Line 1: NameError: missing');
    assert.equal(get('gamePrint').hidden,false);
    assert.equal(get('gamePrintOutput').textContent,'A: 7\nB: 4\n');
    get('dismissGameError').onclick();
    assert.equal(get('gameError').hidden,true);
    assert.equal(get('gamePrint').hidden,false);
    fakeRuntime(w);typeCode(w,'pass');await w.run('runCode()');
    assert.equal(get('gameError').hidden,true);
    assert.equal(get('gamePrint').hidden,true);
    assert.equal(get('gamePrintOutput').textContent,'');
});

test('editing during playback preserves text and Restart waits before the new run',async()=>{
    const w=workspace();let release,startedResolve,plays=0;
    const started=new Promise(resolve=>startedResolve=resolve);
    const runtime=fakeRuntime(w,{hero:{play:async()=>{plays++;if(plays===1){startedResolve();await new Promise(resolve=>release=resolve);}},stop(){release?.();}}});
    typeCode(w,'print("first")');const first=w.run('runCode()');await started;
    assert.equal(w.elements.get('runBtn').disabled,false);
    assert.match(w.elements.get('runBtn').textContent,/Restart/);
    typeCode(w,'print("second")');
    await w.run('runCode()');await first;
    assert.deepEqual(runtime.calls,['print("first")','print("second")']);
    assert.equal(w.elements.get('codeInput').value,'print("second")');
    assert.equal(w.run('isRunning'),false);
    assert.equal(w.elements.get('stopBtn').disabled,true);
});
test('text fields keep default keyboard editing even with a global SDL listener',()=>{
    const w=workspace();
    for(const id of ['codeInput','classCode','teacherPassword','fileName']) {
        for(const type of ['keydown','keypress','keyup']) {
            for(const key of ['a','Backspace','ArrowLeft','Enter']) {
                const target=w.elements.get(id);
                const event={key,type,target,defaultPrevented:false,cancelBubble:false,stopPropagation(){this.cancelBubble=true;},preventDefault(){this.defaultPrevented=true;}};
                for(const listener of w.documentListeners.filter(l=>l.type===type && l.capture)) listener.handler(event);
                for(const listener of target.listeners.filter(l=>l.type===type)) listener.handler(event);
                // Model SDL's old page-wide listener. It must never receive text entry.
                if(!event.cancelBubble) event.preventDefault();
                assert.equal(event.defaultPrevented,false,`${id}: ${type} ${key}`);
            }
        }
    }
    w.run("$('ideWorkspace').hidden=false;var shortcutRuns=0;runCode=()=>{shortcutRuns++;};");
    const event={key:'Enter',ctrlKey:true,target:w.elements.get('codeInput'),preventDefault(){}};
    for(const listener of w.documentListeners.filter(l=>l.type==='keydown' && l.capture)) listener.handler(event);
    assert.equal(w.run('shortcutRuns'),1);
});

test('error summaries are short, safe and consistent across Python and runtime failures',()=>{
    const w=workspace(),get=id=>w.elements.get(id);
    for(const type of ['SyntaxError','IndentationError','NameError','TypeError','AttributeError','ValueError','ZeroDivisionError','IndexError','KeyError','ModuleNotFoundError','CustomError']) {
        w.context.sampleError={type,message:type+': test message',line:7,file:'hero.py'};
        w.run('clearConsole(); log("Traceback: internal runner frames", "error"); showError(sampleError)');
        assert.equal(get('resultError').textContent,`Line 7: ${type}: test message`);
        assert.doesNotMatch(get('resultError').textContent,/Traceback/);
        assert.match(get('runOutput').textContent,/Traceback/);
    }
    w.context.sampleError={message:'Traceback (most recent call last):\n  File "internal", line 1\nValueError: <script>test</script>'};
    w.run('showError(sampleError)');
    assert.equal(get('resultError').textContent,'ValueError: <script>test</script>');
    assert.equal(get('resultError').children.length,0);
    w.context.sampleError={message:'x'.repeat(10000)};
    w.run('showError(sampleError)');assert.ok(get('resultError').textContent.length<=320);
    w.run('setMode("free"); showError({message:"ModuleNotFoundError: no package",line:2,file:"main.py"})');
    assert.equal(get('levelResult').hidden,false);
    assert.match(get('consoleOutput').textContent,/main.py · Line 2/);
});

test('failed runs reset the map but keep the failed goals in feedback',async()=>{
    const w=workspace();let resets=0;
    fakeRuntime(w,{hero:{reset_after_run(){resets++;},outcome:()=>JSON.stringify({passed:false,checks:[true,false,true,false,true]})}});
    typeCode(w,'print("try")');await w.run('runCode()');
    assert.equal(resets,1);
    assert.equal(w.elements.get('winScreen').hidden,true);
    assert.match(w.elements.get('resultText').textContent,/Collect every coin/);
    assert.match(w.elements.get('resultText').textContent,/back at the start/);
    assert.equal(w.elements.get('codeInput').value,'print("try")');
});
test('winning shows a win screen and advancing hides it',async()=>{
    const w=workspace();let resets=0;
    fakeRuntime(w,{hero:{reset_after_run(){resets++;},outcome:()=>JSON.stringify({passed:true,checks:[true,true,true,true,true]})}});
    typeCode(w,'print("win")');await w.run('runCode()');
    assert.equal(resets,0);
    assert.equal(w.elements.get('winScreen').hidden,false);
    assert.equal(w.elements.get('winNext').hidden,false);
    w.elements.get('winNext').onclick();
    assert.equal(w.run('course.id'),'1-2');
    assert.equal(w.elements.get('winScreen').hidden,true);
});
test('an error resets even if the hero reached every goal',async()=>{
    const w=workspace();let resets=0;
    fakeRuntime(w,{hero:{reset_after_run(){resets++;},outcome:()=>JSON.stringify({passed:true,checks:[true,true,true,true,true]})}});
    typeCode(w,'print(missing)');await w.run('runCode()');
    assert.equal(resets,1);
    assert.equal(w.elements.get('winScreen').hidden,true);
    assert.match(w.elements.get('resultError').textContent,/NameError/);
    assert.equal(w.run('course.completed.length'),0);
});

test('an older game module without reset_after_run falls back without hiding the real failure',async()=>{
    const w=workspace();const previews=[];
    fakeRuntime(w,{hero:{reset_after_run:undefined,preview:config=>previews.push(JSON.parse(config)),outcome:()=>JSON.stringify({passed:false,checks:[true,false,true,false,true]})}});
    typeCode(w,'print("unfinished")');await w.run('runCode()');
    assert.equal(previews.length,2);
    assert.deepEqual(previews[0],previews[1]);
    assert.match(w.elements.get('resultText').textContent,/Collect every coin/);
    assert.doesNotMatch(w.elements.get('resultError').textContent,/not a function/);
    assert.equal(w.elements.get('runBtn').disabled,false);
    typeCode(w,'print(missing)');await w.run('runCode()');
    assert.equal(previews.length,4);
    assert.match(w.elements.get('resultError').textContent,/NameError/);
    assert.doesNotMatch(w.elements.get('runOutput').textContent,/reset_after_run is not a function/);
});

test('runtime refresh downloads versioned Python and invalidates cached modules before import',async()=>{
    const w=workspace(),events=[];
    w.context.fetch=async(url,options)=>{
        events.push({kind:'fetch',url,cache:options?.cache});
        const name=url.split('?')[0];
        return {ok:true,text:async()=>fs.readFileSync(path.join(root,name),'utf8')};
    };
    w.context.loadPyodide=async options=>(events.push({kind:'config',options}),{canvas:{setCanvas2D(){}},FS:{writeFile:(name)=>events.push({kind:'write',name})},
        loadPackage:async()=>{},runPythonAsync:async source=>events.push({kind:'python',source}),
        pyimport:name=>{events.push({kind:'import',name});return name==='hero_game'?{preview(){},reset_after_run(){}}:{start(){}};}});
    await w.run('initPyodide()');
    const downloads=events.filter(e=>e.kind==='fetch');
    assert.equal(downloads.length,2);
    for(const download of downloads){assert.match(download.url,/\?v=/);assert.equal(download.cache,'no-store');}
    const invalidate=events.findIndex(e=>e.kind==='python' && e.source.includes('sys.modules.pop'));
    const firstImport=events.findIndex(e=>e.kind==='import');
    assert.ok(invalidate>=0 && invalidate<firstImport);
    assert.equal(w.run('runtimeReady'),true);
    const {stdout,stderr}=events.find(e=>e.kind==='config').options;
    stdout('Door code: 7');stderr('Traceback details');
    assert.equal(w.elements.get('gamePrintOutput').textContent,'Door code: 7\n');
    assert.equal(w.elements.get('gamePrint').hidden,false);
    assert.match(w.elements.get('runOutput').textContent,/Traceback details/);
});

test('week locks apply to restored saves, direct selection, and next buttons',()=>{
    const w=workspace({unlockedThrough:1,savedCourse:{mode:'levels',id:'8-1',drafts:{'8-1':{name:'hero.py',content:'keep me'}},completed:['8-1'],weekOneRevision:2}});
    assert.equal(w.run('course.id'),'1-1');
    assert.equal(w.run('course.drafts["8-1"].content'),'keep me');
    w.run('chooseLevel("2-vars-1")');assert.equal(w.run('course.id'),'1-1');
    for(const button of w.elements.get('weekTabs').children.slice(1)) assert.equal(button.disabled,true);
    w.run('chooseLevel("1-6"); reportLevel({passed:true,checks:[true,true,true,true,true,true]},"finished")');
    assert.equal(w.elements.get('nextLevel').hidden,true);
    assert.equal(w.elements.get('winNext').hidden,true);
    w.elements.get('nextLevel').onclick();assert.equal(w.run('course.id'),'1-6');
    const released=workspace({unlockedThrough:2});
    released.run('chooseLevel("1-6")');released.elements.get('nextLevel').onclick();
    assert.equal(released.run('course.id'),'2-vars-1');
    assert.equal(released.elements.get('courseProgress').textContent,'0 / 13 complete');
});

test('seven Variables and Numbers challenges lead to Conditionals while later weeks stay locked',async()=>{
    const w=workspace({unlockedThrough:3});
    w.elements.get('weekTabs').children[1].onclick();
    assert.equal(w.run('course.id'),'2-vars-1');
    assert.equal(w.elements.get('levelList').children.length,7);
    assert.equal(w.elements.get('weekTabs').children[1].children[0].textContent,'Variables & Numbers');
    w.elements.get('teacherPassword').value='T3acher123';
    await w.elements.get('teacherForm').onsubmit({preventDefault(){}});
    for(let stage=1;stage<=7;stage++) {
        assert.equal(w.run('course.id'),`2-vars-${stage}`);
        assert.equal(w.elements.get('lessonKicker').textContent,`WEEK 2 / CHALLENGE ${stage}`);
        assert.equal(w.elements.get('teacherLevel').textContent,`Week 2: Variables & Numbers, challenge ${stage}`);
        assert.ok(w.elements.get('teacherCode').textContent.includes('hero.move('));
        assert.ok(w.elements.get('teacherCode').textContent.includes('hero.read()'));
        assert.ok(w.elements.get('teacherCode').textContent.includes('hero.enter_code('));
        assert.ok(w.elements.get('lessonHint').textContent.includes('hero.read()'));
        assert.ok(w.elements.get('lessonHint').textContent.includes('hero.enter_code("right", code)'));
        assert.ok(w.elements.get('mapDescription').textContent.includes('Code door I'));
        w.run('reportLevel({passed:true,checks:[true,true,true,true,true,true]},"finished")');
        assert.equal(w.elements.get('nextLevel').hidden,false);
        assert.equal(w.elements.get('winNext').hidden,false);
        w.elements.get('nextLevel').onclick();
    }
    assert.equal(w.run('course.id'),'4-1');
    assert.equal(w.elements.get('lessonKicker').textContent,'WEEK 3 / CHALLENGE 1');
    assert.equal(w.elements.get('weekTabs').children[2].children[0].textContent,'Conditionals');
    assert.equal(w.elements.get('courseProgress').textContent,'7 / 19 complete');
    w.run('chooseLevel("4-loops-1")');assert.equal(w.run('course.id'),'4-1');
    for(const button of w.elements.get('weekTabs').children.slice(3)) assert.equal(button.disabled,true);
});

test('Week 5 releases every Lists challenge after Loops and keeps Functions locked',async()=>{
    const w=workspace(),get=id=>w.elements.get(id);
    assert.equal(get('weekTabs').children[4].children[0].textContent,'Lists');
    assert.equal(get('weekTabs').children[4].disabled,false);
    assert.equal(get('weekTabs').children[5].children[0].textContent,'Functions');
    for(const button of get('weekTabs').children.slice(5)) assert.equal(button.disabled,true);
    w.run('chooseLevel("4-loops-6")');get('nextLevel').onclick();
    assert.equal(w.run('course.id'),'5-inventory-1');
    assert.equal(get('weekTitle').textContent,'Pick up. Index. Carry. Drop.');
    assert.equal(get('courseProgress').textContent,'0 / 31 complete');
    get('teacherPassword').value='T3acher123';
    await get('teacherForm').onsubmit({preventDefault(){}});
    for(let stage=1;stage<=6;stage++) {
        assert.equal(w.run('course.id'),`5-inventory-${stage}`);
        assert.equal(get('lessonKicker').textContent,`WEEK 5 / CHALLENGE ${stage}`);
        assert.equal(get('teacherLevel').textContent,`Week 5: Lists, challenge ${stage}`);
        assert.ok(get('teacherCode').textContent.length>0);
        assert.doesNotMatch(get('lessonTeach').textContent,/function/i);
        assert.equal(get('codeInput').value,'');
        assert.equal(get('lessonExample').textContent,'');
        assert.equal(get('lessonExample').hidden,true);
        assert.equal(get('inventoryGuide').hidden,false);
        assert.doesNotMatch(w.run('currentLevel().teach'),/supplied|set_hotbar/);
        w.run('reportLevel({passed:true,checks:[true,true,true,true,true,true]},"finished")');
        assert.equal(get('nextLevel').hidden,stage===6);
        assert.equal(get('winNext').hidden,stage===6);
        get('nextLevel').onclick();
    }
    assert.equal(w.run('course.id'),'5-inventory-6');
    assert.equal(get('courseProgress').textContent,'6 / 31 complete');
    w.run('chooseLevel("6-1")');
    assert.equal(w.run('course.id'),'5-inventory-6');
});

test('current Lists drafts and locked Functions drafts keep their saved code and completion',()=>{
    const savedCourse={mode:'levels',id:'5-inventory-2',drafts:{'5-inventory-2':{name:'hero.py',content:'hotbar = ["sword"]'},'6-2':{name:'hero.py',content:'def travel(): pass'}},completed:['5-inventory-2','6-2'],weekOneRevision:2};
    const w=workspace({savedCourse});
    assert.equal(w.run('course.id'),'5-inventory-2');
    assert.equal(w.elements.get('codeInput').value,'hotbar = ["sword"]');
    assert.equal(w.elements.get('lessonKicker').textContent,'WEEK 5 / CHALLENGE 2');
    assert.equal(w.elements.get('courseProgress').textContent,'1 / 31 complete');
    const locked=workspace({savedCourse:{...savedCourse,id:'6-2'}});
    assert.equal(locked.run('course.id'),'1-1');
    assert.equal(locked.run('course.drafts["6-2"].content'),'def travel(): pass');
    assert.equal(locked.run('course.completed.includes("6-2")'),true);
    const released=workspace({savedCourse:{...savedCourse,id:'6-2'},unlockedThrough:6});
    assert.equal(released.run('course.id'),'6-2');
    assert.equal(released.elements.get('codeInput').value,'def travel(): pass');
    assert.equal(released.elements.get('lessonKicker').textContent,'WEEK 6 / CHALLENGE 2');
    released.run('chooseLevel("5-inventory-6")');released.elements.get('nextLevel').onclick();
    assert.equal(released.run('course.id'),'6-1');
});

test('inventory lessons preserve retired hotbar and route drafts and start with fresh completion',()=>{
    const retired=[...Array.from({length:6},(_,i)=>`7-${i+1}`),...Array.from({length:6},(_,i)=>`5-hotbar-${i+1}`)];
    const drafts=Object.fromEntries(retired.map(id=>[id,{name:'hero.py',content:'route = ["right"]'}]));
    const w=workspace({savedCourse:{mode:'levels',id:'7-2',drafts,completed:[...retired,'4-loops-6'],weekOneRevision:2}});
    assert.equal(w.run('courseStorageBlocked'),false);
    assert.equal(w.run('course.id'),'1-1');
    w.elements.get('weekTabs').children[4].onclick();
    assert.equal(w.run('course.id'),'5-inventory-1');
    assert.equal(w.elements.get('codeInput').value,'');
    assert.equal(w.elements.get('courseProgress').textContent,'1 / 31 complete');
    assert.match(w.elements.get('mapDescription').textContent,/Inventory starts empty and holds 5 collected items/);
    typeCode(w,'hotbar = ["sword", "key", "potion"]');
    const saved=JSON.parse(w.storage.get('codehaven.course.v2'));
    assert.equal(saved.drafts['5-inventory-1'].content,'hotbar = ["sword", "key", "potion"]');
    for(const id of retired) {
        assert.equal(saved.drafts[id].content,'route = ["right"]');
        assert.equal(saved.completed.includes(id),false);
    }
});

test('returning hotbar students land on a blank replacement lesson without losing their old draft',()=>{
    for(let stage=1;stage<=6;stage++) {
        const id=`5-hotbar-${stage}`,content='old movement plan';
        const w=workspace({savedCourse:{mode:'levels',id,drafts:{[id]:{name:'hero.py',content}},completed:[id],weekOneRevision:2}});
        assert.equal(w.run('course.id'),`5-inventory-${stage}`);
        assert.equal(w.elements.get('codeInput').value,'');
        assert.equal(w.run(`course.drafts['${id}'].content`),content);
        assert.equal(w.elements.get('courseProgress').textContent,'0 / 31 complete');
        typeCode(w,'hero.collect()');
        w.elements.get('resetLevel').onclick();
        assert.equal(w.elements.get('codeInput').value,'');
        w.run('chooseLevel("1-1")');
        assert.equal(w.elements.get('inventoryGuide').hidden,true);
    }
});

test('renumbered week tabs keep saved work and teacher solutions',async()=>{
    const savedCourse={mode:'levels',id:'2-vars-4',drafts:{'2-vars-4':{name:'hero.py',content:'code = hero.read()'}},completed:['2-vars-4','4-1'],weekOneRevision:2};
    const w=workspace({unlockedThrough:8,savedCourse});
    assert.equal(w.elements.get('codeInput').value,'code = hero.read()');
    assert.equal(w.elements.get('lessonKicker').textContent,'WEEK 2 / CHALLENGE 4');
    assert.equal(w.elements.get('courseProgress').textContent,'2 / 49 complete');
    w.elements.get('teacherPassword').value='T3acher123';
    await w.elements.get('teacherForm').onsubmit({preventDefault(){}});
    assert.match(w.elements.get('teacherCode').textContent,/hero.enter_code/);
    for(let number=3;number<=8;number++) {
        w.elements.get('weekTabs').children[number-1].onclick();
        assert.equal(w.run('course.id'),({3:'4-1',4:'4-loops-1',5:'5-inventory-1',6:'6-1',7:'8-1',8:'9-1'})[number]);
        assert.equal(w.elements.get('lessonKicker').textContent,`WEEK ${number} / CHALLENGE 1`);
        assert.equal(w.elements.get('teacherLevel').textContent,`Week ${number}: ${w.run('currentLevel().topic')}, challenge 1`);
        assert.ok(w.elements.get('teacherCode').textContent.length>0);
    }
    w.run('chooseLevel("2-vars-7")');w.elements.get('nextLevel').onclick();
    assert.equal(w.run('course.id'),'4-1');
    assert.equal(w.elements.get('lessonKicker').textContent,'WEEK 3 / CHALLENGE 1');
});

test('retired Variables and Numbers saves retain drafts without blocking new progress',()=>{
    for(const id of ['2-1','2-6','3-1','3-6',...Array.from({length:7},(_,i)=>`2-vn-${i+1}`)]) {
        const w=workspace({savedCourse:{mode:'levels',id,drafts:{[id]:{name:'hero.py',content:'old work'}},completed:[id,'1-1'],weekOneRevision:2}});
        assert.equal(w.run('course.id'),'1-1');
        assert.equal(w.run('courseStorageBlocked'),false);
        assert.equal(w.run(`course.drafts["${id}"].content`),'old work');
        assert.equal(w.elements.get('courseProgress').textContent,'1 / 31 complete');
        w.elements.get('weekTabs').children[1].onclick();
        assert.equal(w.run('course.id'),'2-vars-1');
        assert.equal(w.run('course.completed.includes("2-vars-1")'),false);
        typeCode(w,'code = hero.read()');
        assert.equal(JSON.parse(w.storage.get('codehaven.course.v2')).drafts['2-vars-1'].content,'code = hero.read()');
        assert.equal(JSON.parse(w.storage.get('codehaven.course.v2')).drafts[id].content,'old work');
    }
});

test('loop lessons alternate for and while and retire the old loop completions',async()=>{
    const oldId='5-2';
    const w=workspace({savedCourse:{mode:'levels',id:oldId,drafts:{[oldId]:{name:'hero.py',content:'old loop work'}},completed:[oldId,'4-1'],weekOneRevision:2}});
    assert.equal(w.run('courseStorageBlocked'),false);
    assert.equal(w.run('course.drafts["5-2"].content'),'old loop work');
    assert.equal(w.run('course.completed.includes("5-2")'),false);
    w.elements.get('weekTabs').children[3].onclick();
    assert.equal(w.run('course.id'),'4-loops-1');
    assert.equal(w.elements.get('courseProgress').textContent,'1 / 31 complete');
    w.elements.get('teacherPassword').value='T3acher123';
    await w.elements.get('teacherForm').onsubmit({preventDefault(){}});
    for(let stage=1;stage<=6;stage++) {
        w.run(`chooseLevel("4-loops-${stage}")`);
        const keyword=stage%2?'for':'while';
        assert.match(w.elements.get('lessonExample').textContent,new RegExp('^'+keyword+' '));
        assert.match(w.elements.get('teacherCode').textContent,new RegExp('\\n'+keyword+' '));
        assert.equal(w.run('Boolean(currentLevel().world.variants)'),stage%2===0);
    }
});

test('each run describes the chosen loop layout without changing student code',async()=>{
    const w=workspace();
    let config;
    fakeRuntime(w,{hero:{
        preview:source=>{const world=JSON.parse(source); config=world.variants?.at(-1) || world;},
        world_config:()=>JSON.stringify(config)
    }});
    w.run('chooseLevel("4-loops-2")');
    typeCode(w,'# Keep my loop draft\nprint("test")');
    assert.match(w.elements.get('mapDescription').textContent,/Exit: 8,1/);
    await w.run('runCode()');
    assert.match(w.elements.get('canvas').getAttribute('aria-label'),/Exit: 8,1/);
    assert.match(w.elements.get('mapDescription').textContent,/Walkable tiles: .*8,1/);
    assert.equal(w.elements.get('codeInput').value,'# Keep my loop draft\nprint("test")');
    assert.equal(w.run('currentLevel().world.exit.join(",")'),'6,1');
});
