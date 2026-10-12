if('scrollRestoration' in history)history.scrollRestoration='manual';scrollTo(0,0);
function $(i){return document.getElementById(i)}
var body=document.body,rm=matchMedia('(prefers-reduced-motion: reduce)').matches,motion=!rm,snd=true,GH='https://github.com/SyedWaqarAliZaidi/';
var CVU="https://drive.google.com/file/d/1aAVLvOWTw_9qMyVWGYWyoQFxrnafVgaV/view";
var P=[['Chronicles of Eldervale','Flagship','Multi-agent fantasy RPG: a Game Master coordinates five character agents with memory, dice and retrieval.','Python · Flask · Groq Llama 3.3 · Azure AI Search',GH+'chronicles-eldervale-','Outcome: a playable multi-agent RPG built for the Microsoft Agents League hackathon.'],
["The Warden's Labyrinth",'Flagship','Adaptive cyberpunk game with Strategy, Narrative and Referee roles that adjust difficulty and story.','React · TypeScript · TanStack Start · Cloudflare Workers',GH+'AI-Warden-Run-Google-AI-Hackathon','Outcome: a working adaptive game delivered by a team of three (Google AISeekho).'],
['ScholarFind','Flagship','Matches a student profile to scholarships and explains each match in plain English. Suggestions are not guarantees.','Next.js · TypeScript · Gemini',GH+'buildbyte-byteforge','Outcome: a solo-built scholarship matcher shipped at a hackathon (BuildByte / IEEE SB NED).'],
['B2B Lead Generation Automation','Professional work','Finds and scores prospects, drafts personalised outreach, then syncs and deduplicates them in the CRM.','n8n · LLM tools · MCP · Google Sheets','','Outcome: one pipeline covering discovery, AI scoring, outreach drafts and CRM sync.']];
var CL=[['Podcast Editing & Automation MVP','AI full-stack development · Josh','Full MVP delivered. Project details are kept private.','“I enjoyed working with you Waqar and I appreciate your flexibility around the project scope and budget.”'],
['AI Lead Generation Automation','AI automation · Timara, Netherlands','Lead-generation automation delivered end to end.','“I am very happy with the automation and described choosing waqar as one of my best decisions. keen to work together again.”'],
['Dental Clinic Automation System','AI automation · John Kincaid, dentist','Appointment booking, scheduling and management, inbound/outbound calls, blog posting and calendar reminders.','“I\'m satisfied with the delivered system, which matched the outcome I had envisioned for my clinic.”']];
// ---- click sounds only (generated in code) ----
var AC,MG;
function aInit(){if(AC)return;var X=window.AudioContext||window.webkitAudioContext;if(!X)return;AC=new X();MG=AC.createGain();MG.gain.value=.6;MG.connect(AC.destination)}
function tone(f,d,v){if(!AC||!snd)return;if(AC.resume)AC.resume();var t=AC.currentTime,o=AC.createOscillator(),g=AC.createGain();o.frequency.value=f;g.gain.setValueAtTime(0,t);g.gain.linearRampToValueAtTime(v,t+.02);g.gain.exponentialRampToValueAtTime(.0001,t+d);o.connect(g);g.connect(MG);o.start(t);o.stop(t+d+.05)}
function chime(f){tone(f,1.4,.2);tone(f*2,1,.08);tone(f*1.5,1.2,.06)}
function whoosh(up){if(!AC||!snd)return;if(AC.resume)AC.resume();var t=AC.currentTime,n=AC.sampleRate,b=AC.createBuffer(1,n,n),d=b.getChannelData(0);for(var i=0;i<n;i++)d[i]=Math.random()*2-1;var s=AC.createBufferSource();s.buffer=b;var f=AC.createBiquadFilter();f.type='bandpass';f.Q.value=1.2;f.frequency.setValueAtTime(up?250:2200,t);f.frequency.exponentialRampToValueAtTime(up?2200:250,t+1);var g=AC.createGain();g.gain.setValueAtTime(0,t);g.gain.linearRampToValueAtTime(.5,t+.4);g.gain.linearRampToValueAtTime(0,t+1.1);s.connect(f);f.connect(g);g.connect(MG);s.start(t);s.stop(t+1.1);tone(up?90:140,1,.12)}
addEventListener('pointerdown',aInit);addEventListener('keydown',aInit);
$('sd').onclick=function(){snd=!snd;this.textContent='Sound: '+(snd?'on':'off');this.setAttribute('aria-pressed',snd)};
var btn=$('mt');function setBtn(){btn.textContent='Motion: '+(motion?'on':'off');btn.setAttribute('aria-pressed',motion)}
if(rm)body.classList.add('reduce');setBtn();
btn.onclick=function(){motion=!motion;body.classList.toggle('reduce',!motion);setBtn();if(motion){clk.getDelta();loop()}else{sp=tp;frame()}};
// ---- panels ----
var last=null,kind=null;
function fill(k,tgt){var g=tgt||$('cg');g.innerHTML='';if(!tgt){$('mh').textContent=k=='a'?'About':k=='p'?'Projects':'Client work';$('mq').textContent=k=='a'?'Where I build from.':k=='p'?'Systems I have built.':'Systems delivered to clients.'}
 function card(i){var d=document.createElement('div');d.className='cd';d.style.animationDelay=(i*70)+'ms';g.appendChild(d);return d}
 function add(d,tag,txt,cls){var e=document.createElement(tag);e.textContent=txt;if(cls)e.className=cls;d.appendChild(e);return e}
 if(k=='a'){var a=card(0);a.style.gridColumn='1/-1';add(a,'h3','Background');
  add(a,'p',"I'm Syed Waqar Ali Zaidi, an AI automation engineer and full-stack developer from Karachi, Pakistan. I'm studying BS Artificial Intelligence at the University of Karachi (since January 2025) and build practical AI systems alongside my degree.");
  add(a,'p','From October 2025 to March 2026 I worked as an AI Automation Engineer & Business Executive at Radiant Solutions RS (Pvt) Ltd in Karachi. Since then I have been working as a freelancer, delivering AI automation and full-stack projects for clients.');
  add(a,'p','My work covers n8n and Zapier automation, API and webhook integration, multi-agent systems, a B2B lead-generation pipeline, deployment on Oracle Cloud VPS with Docker and Linux, Cloudflare tunnels, and running local LLMs with Ollama. I also take part in hackathons, where I ship AI products quickly.');
  add(a,'p','Certifications: Google introductory Generative AI, LLMs and AI Agents course, and a NED University data-science course (both May 2026).');
  var sk=add(a,'h3','Skills');sk.style.marginTop='16px';
  ['Python','JavaScript','TypeScript','React','Next.js','Flask','n8n','Zapier','API & webhook integration','Multi-agent orchestration','LLM integration','MCP','Pandas','scikit-learn','XGBoost','Docker','Git','Cloud deployment','Linux','Ollama'].forEach(function(t){add(a,'span',t,'tag')})}
 else (k=='p'?P:CL).forEach(function(c,i){var d=card(i);add(d,'span',c[1],'tag');add(d,'h3',c[0]);add(d,'p',c[2]);
  if(k=='p'){add(d,'p',c[3]).style.color='#b4b8b3';add(d,'p',c[5],'oc');if(c[4]){var l=add(d,'a','View repository →');l.href=c[4];l.target='_blank';l.rel='noopener'}}
  else{var f=add(d,'div',c[3],'fd');var s=document.createElement('small');s.textContent='Client review';f.appendChild(s)}})}
function showP(k){last=document.activeElement;fill(k);$('md').hidden=false;$('md').scrollTop=0;$('cl').focus();chime(k=='a'?523:k=='p'?587:659)}
function closeM(){if($('md').hidden)return;$('md').hidden=true;chime(392);if(Z){Z.dir=-1;Z.skip=!motion;whoosh(false)}if(last&&last.focus)last.focus()}
$('cl').onclick=closeM;addEventListener('keydown',function(e){if(e.key=='Escape'){closeM();$('ml').hidden=true}});
$('mx').onclick=function(){$('ml').hidden=true};
$('cp').onclick=function(){var t='zaidialiwaqarsyed2006@gmail.com';if(navigator.clipboard)navigator.clipboard.writeText(t).then(function(){$('cp').textContent='Copied ✓'},function(){});chime(880)};
function mail(){$('ml').hidden=false;chime(784);$('cp').focus()}
function ext(u){chime(740);window.open(u,'_blank','noopener')}
var Z=null,tp=0,sp=0;
[].forEach.call(document.querySelectorAll('[data-open]'),function(b){b.onclick=function(){if(Z)zoomIn(null,b.dataset.open);else showP(b.dataset.open)}});
