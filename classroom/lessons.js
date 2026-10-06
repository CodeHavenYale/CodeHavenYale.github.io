function isWeekUnlocked(week) {return Number.isInteger(week) && week>=1 && week<=UNLOCKED_THROUGH_WEEK;}
function availableLevels() {return LEVELS.filter(l=>isWeekUnlocked(l.week));}
function nextAvailableLevel() {const next=LEVELS[LEVELS.findIndex(l=>l.id===course.id)+1];return next && isWeekUnlocked(next.week) ? next : null;}
function progressText() {return `${course.completed.filter(id=>availableLevels().some(l=>l.id===id)).length} / ${availableLevels().length} complete`;}
var course = {mode:'levels',id:'1-1',drafts:{},completed:[]};
let courseStorageBlocked = false;
try {
    const value=JSON.parse(localStorage.getItem('codehaven.course.v2') || 'null');
    if (value) {
        if (!value.drafts || typeof value.drafts!=='object' || !Array.isArray(value.completed)) throw Error('Invalid course save');
        course={mode:value.mode==='free'?'free':'levels',id:LEVELS.some(l=>l.id===value.id)?value.id:'1-1',drafts:value.drafts,completed:value.completed.filter(id=>LEVELS.some(l=>l.id===id)),weekOneRevision:value.weekOneRevision};
    }
} catch {courseStorageBlocked=true;$('saveStatus').textContent='Could not load saved levels';}
if(course.weekOneRevision!==2) {course.completed=course.completed.filter(id=>!id.startsWith('1-'));course.weekOneRevision=2;}
if(!isWeekUnlocked(LEVELS.find(l=>l.id===course.id)?.week)) course.id='1-1';
function currentLevel() {return LEVELS.find(l=>l.id===course.id);}
function courseFile() {
    const level=currentLevel();
    if (!course.drafts[level.id] || typeof course.drafts[level.id].content!=='string') course.drafts[level.id]={name:'hero.py',content:level.starter};
    return course.drafts[level.id];
}
function saveCourse() {
    if (courseStorageBlocked) return;
    try {localStorage.setItem('codehaven.course.v2',JSON.stringify(course));$('saveStatus').textContent='Saved on this device';}
    catch {$('saveStatus').textContent='Could not save on this device';}
}
function setMode(mode) {
    if(isRunning) return;
    save(); course.mode=mode;saveCourse(); $('winScreen').hidden=true;
    for(const id of ['weekTabs','lessonSidebar','lessonBrief','levelResult','resetLevel']) $(id).hidden=mode!=='levels';
    for(const id of ['freeSidebar','renameFile','deleteFile']) $(id).hidden=mode==='levels';
    $('levelsMode').setAttribute('aria-pressed',String(mode==='levels'));$('freeMode').setAttribute('aria-pressed',String(mode==='free'));
    $('outputTabs').hidden=mode==='levels';
    $('ideWorkspace').dataset.mode=mode;
    clearConsole(); render();
    if(mode==='levels') previewLevel(); else showOutput(false);
}
function chooseLevel(id) {if(isRunning || !isWeekUnlocked(LEVELS.find(l=>l.id===id)?.week)) return;save();course.id=id;saveCourse();renderLesson();previewLevel();}
function renderLesson() {
    clearConsole(); $('winScreen').hidden=true;
    const level=currentLevel(), week=WEEKS[level.week-1];
    $('weekTabs').replaceChildren();
    for(const w of WEEKS) {
        const button=document.createElement('button');button.dataset.week=String(w.number);button.textContent=`Week ${w.number}${isWeekUnlocked(w.number)?'':' · Locked'}`;
        const small=document.createElement('span');small.textContent=w.topic;button.append(small);
        button.classList.toggle('active',w.number===level.week);button.setAttribute('aria-current',String(w.number===level.week));button.disabled=isRunning || !isWeekUnlocked(w.number);button.title=isWeekUnlocked(w.number)?w.topic:'Your teacher will open this week later.';
        button.onclick=()=>chooseLevel(LEVELS.find(l=>l.week===w.number).id);$('weekTabs').append(button);
    }
    $('weekTitle').textContent=week.title;$('levelList').replaceChildren();
    for(const l of LEVELS.filter(l=>l.week===level.week)) {
        const b=document.createElement('button');b.textContent=`${course.completed.includes(l.id)?'✓':l.stage}  ${l.title}`;b.classList.toggle('active',l.id===level.id);b.disabled=isRunning;b.onclick=()=>chooseLevel(l.id);$('levelList').append(b);
    }
    $('lessonKicker').textContent=`WEEK ${level.week} / CHALLENGE ${level.stage}`;
    $('lessonGoals').replaceChildren();for(const goal of level.goals || []) {const item=document.createElement('li');item.textContent=goal;$('lessonGoals').append(item);}
    $('lessonTitle').textContent=level.title;$('lessonObjective').textContent=level.objective;$('mapNote').textContent=level.mapNote;$('lessonTeach').textContent=level.teach;
    $('lessonExample').textContent=level.example;$('lessonExample').hidden=!level.example;$('lessonHint').textContent=level.hint;
    $('canvas').setAttribute('aria-label', `Hero map. Coordinates are column, row. Start: ${level.world.start.join(',')}. Exit: ${level.world.exit.join(',')}. Coins: ${level.world.coins.map(p=>p.join(',')).join('; ')}. Keys: ${level.world.keys.map(p=>p.join(',')).join('; ') || 'none'}. Doors: ${level.world.doors.map(p=>p.join(',')).join('; ') || 'none'}. Potions: ${level.world.potions.map(p=>p.join(',')).join('; ') || 'none'}. Enemies: ${level.world.enemies.map(e=>`${e.x},${e.y}, health ${e.health}`).join('; ') || 'none'}.`);
    const coloredItems=[...(level.world.key_colors || []).map(k=>`${k.color} key at ${k.x},${k.y}`),...(level.world.door_colors || []).map(d=>`${d.color} door at ${d.x},${d.y}`),...(level.world.switches || []).map(s=>`${s.color} switch at ${s.x},${s.y}`),...(level.world.gates || []).map(g=>`${g.color} gate at ${g.x},${g.y}`)].join('; ');
    $('canvas').setAttribute('aria-label',$('canvas').getAttribute('aria-label')+' '+coloredItems+'.');
    const numberItems=[...(level.world.number_clues || []).map(c=>`Number sign ${c.label} at ${c.x},${c.y}; stand here and save hero.read()`),...(level.world.code_doors || []).map(d=>`Code door ${d.label} at ${d.x},${d.y}; code is ${d.formula}`)].join('; ');
    if(numberItems) $('canvas').setAttribute('aria-label',$('canvas').getAttribute('aria-label')+' '+numberItems+'.');
    $('mapDescription').textContent = $('canvas').getAttribute('aria-label') + ' Walkable tiles: ' + level.world.path.map(p=>p.join(',')).join('; ') + '.';
    $('currentFile').textContent='hero.py';$('codeInput').value=courseFile().content;$('codeInput').readOnly=false;lines();
    $('courseProgress').textContent=progressText();
    $('resultTitle').textContent=course.completed.includes(level.id)?'You have finished this one.':'Give it a try.';
    $('resultText').textContent='Write your moves, then press Run.';$('nextLevel').hidden=true;
    updateRunButtons();updateTeacher();
}
function reportLevel(result,status,error=null) {
    const passed=result.passed && status==='finished';
    $('resultTitle').textContent=passed?'You did it!':status==='stopped'?'Stopped.':status==='error'?'Check your code.':'Not quite there yet.';
    const labels=['Keep your hero alive.','Collect every coin.','Defeat the enemies.','Reach the green exit.','Open every locked door.','Turn on every switch.'];
    $('resultText').textContent=passed?'All done. Try the next challenge when you are ready.':status==='error'?'Fix the error below, then try again.':status==='stopped'?'Change your plan or run it again.':(result.remaining || labels.filter((_,i)=>result.checks[i]===false)).join(' ');
    if(!passed) $('resultText').textContent+=' Your hero is back at the start.';
    if(status==='error') showError(error || {message:'The program stopped. Open the error details below.'});
    if(passed && !course.completed.includes(course.id)) {course.completed.push(course.id);saveCourse();}
    $('courseProgress').textContent=progressText();
    $('nextLevel').hidden=!passed || !nextAvailableLevel();
    $('winScreen').hidden=!passed;
    $('winNext').hidden=$('nextLevel').hidden;
    $('winMessage').textContent=!nextAvailableLevel() ? 'You finished all the open challenges. Your teacher will open the next week later.' : 'You finished every goal. Ready for the next challenge?';
}
$('levelsMode').onclick=()=>setMode('levels');$('freeMode').onclick=()=>setMode('free');
$('resetLevel').onclick=()=>{if(!isRunning && confirm('Start this challenge again? Your code for this challenge will be replaced.')) {delete course.drafts[course.id];saveCourse();renderLesson();previewLevel();}};
$('nextLevel').onclick=()=>{const next=nextAvailableLevel();if(next) chooseLevel(next.id);};
$('winNext').onclick=()=>{if(!isRunning && !runTransition && !$('winNext').hidden) $('nextLevel').onclick();};
let unlockedSolutions=null, teacherAttempt=0;
function lockTeacher() {teacherAttempt++;unlockedSolutions=null;$('teacherContent').hidden=true;$('teacherForm').hidden=false;$('teacherPassword').value='';$('teacherCode').textContent='';$('teacherError').textContent='';}
function updateTeacher() {
    if(!unlockedSolutions) return;
    const l=currentLevel(), solution=unlockedSolutions[l.id];
    $('teacherLevel').textContent=`Week ${l.week}: ${l.topic}, challenge ${l.stage}`;$('teacherCode').textContent=solution.code;$('teacherExplanation').textContent=solution.explanation;
}
$('teacherBtn').onclick=()=>{updateTeacher();$('teacherDialog').showModal();};$('lockTeacher').onclick=lockTeacher;
$('teacherForm').onsubmit=async event=>{
    event.preventDefault();const attempt=++teacherAttempt, password=$('teacherPassword').value;$('teacherPassword').value='';
    try {
        const response=await fetch(`teacher-solutions.json?v=${RUNTIME_REVISION}`, {cache:'no-store'});if(!response.ok) throw Error('load');const pack=await response.json();
        const bytes=s=>Uint8Array.from(atob(s),c=>c.charCodeAt(0));
        const material=await crypto.subtle.importKey('raw',new TextEncoder().encode(password),'PBKDF2',false,['deriveKey']);
        const key=await crypto.subtle.deriveKey({name:'PBKDF2',salt:bytes(pack.salt),iterations:150000,hash:'SHA-256'},material,{name:'AES-GCM',length:256},false,['decrypt']);
        const result=await crypto.subtle.decrypt({name:'AES-GCM',iv:bytes(pack.iv)},key,bytes(pack.data));
        if(attempt!==teacherAttempt) return;
        unlockedSolutions=JSON.parse(new TextDecoder().decode(result));$('teacherError').textContent='';$('teacherForm').hidden=true;$('teacherContent').hidden=false;updateTeacher();
    } catch {if(attempt===teacherAttempt) $('teacherError').textContent='Could not unlock solutions. Check your code and try again.';}
};
function highlight() {
    const source=$('codeInput').value, out=$('highlightedCode');out.replaceChildren();
    const pattern=/(#[^\n]*|"""[\s\S]*?(?:"""|$)|'''[\s\S]*?(?:'''|$)|"(?:\\.|[^"\\\n])*"?|'(?:\\.|[^'\\\n])*'?|\b(?:False|True|None|and|as|assert|async|await|break|class|continue|def|del|elif|else|except|finally|for|from|global|if|import|in|is|lambda|nonlocal|not|or|pass|raise|return|try|while|with|yield)\b|\b\d+(?:\.\d+)?\b|\b(?:print|range|len|str|int|float|list|input)\b)/g;
    let last=0;
    for(const match of source.matchAll(pattern)) {
        out.append(document.createTextNode(source.slice(last,match.index)));const token=document.createElement('span'), text=match[0];
        token.className=text.startsWith('#')?'syntax-comment':/^["']/.test(text)?'syntax-string':/^\d/.test(text)?'syntax-number':/^(print|range|len|str|int|float|list|input)$/.test(text)?'syntax-builtin':'syntax-keyword';token.textContent=text;out.append(token);last=match.index+text.length;
    }
    out.append(document.createTextNode(source.slice(last)+'\n'));syncHighlight();
}
function syncHighlight() {$('highlightedCode').scrollTop=$('codeInput').scrollTop;$('highlightedCode').scrollLeft=$('codeInput').scrollLeft;}
setMode(course.mode);
