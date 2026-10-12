(function(){
var TX={earth:'https://raw.githubusercontent.com/mrdoob/three.js/r128/examples/textures/planets/earth_atmos_2048.jpg',espec:'https://raw.githubusercontent.com/mrdoob/three.js/r128/examples/textures/planets/earth_specular_2048.jpg',enorm:'https://raw.githubusercontent.com/mrdoob/three.js/r128/examples/textures/planets/earth_normal_2048.jpg',cloud:'https://raw.githubusercontent.com/mrdoob/three.js/r128/examples/textures/planets/earth_clouds_1024.png',moon:'https://raw.githubusercontent.com/mrdoob/three.js/r128/examples/textures/planets/moon_1024.jpg',mars:'https://raw.githubusercontent.com/jeromeetienne/threex.planets/master/images/marsmap1k.jpg',marsb:'https://raw.githubusercontent.com/jeromeetienne/threex.planets/master/images/marsbump1k.jpg',sat:'https://raw.githubusercontent.com/jeromeetienne/threex.planets/master/images/saturnmap.jpg',ringc:'https://raw.githubusercontent.com/jeromeetienne/threex.planets/master/images/saturnringcolor.jpg',ringa:'https://raw.githubusercontent.com/jeromeetienne/threex.planets/master/images/saturnringpattern.gif'};
// ---- 3D ----
var cv=$('gl'),R;
if(!window.THREE){body.classList.add('nogl');return}
try{R=new THREE.WebGLRenderer({canvas:cv,antialias:true,powerPreference:'high-performance'})}catch(e){cv.style.display='none';body.classList.add('nogl');return}
var T=THREE,V3=T.Vector3,UP=new V3(0,1,0),S=new T.Scene();S.background=new T.Color(0x03050a);R.outputEncoding=T.sRGBEncoding;R.toneMapping=T.ACESFilmicToneMapping;R.toneMappingExposure=1.05;
var C=new T.PerspectiveCamera(50,1,.1,600);
var mob=innerWidth<760,dpr=Math.min(devicePixelRatio||1,mob?1.25:1.75);
var U={uT:{value:0}},SUN=new V3(.6,.5,.7).normalize();
function size(){mob=innerWidth<760;R.setPixelRatio(dpr);R.setSize(innerWidth,innerHeight,false);C.aspect=innerWidth/innerHeight;C.updateProjectionMatrix()}
addEventListener('resize',function(){size();if(!motion)frame()});size();
var path=new T.CatmullRomCurve3([[0,0,14],[0,0,0],[14,6,-30],[-12,10,-62],[-16,-6,-95],[8,-12,-128],[18,4,-160],[-6,12,-195],[-14,-4,-228],[6,-8,-258],[0,0,-285],[0,0,-300],[0,0,-310]].map(function(a){return new V3(a[0],a[1],a[2])}));
S.add(new T.AmbientLight(0x303a50,.55));
var DL=new T.DirectionalLight(0xffffff,1.7);DL.position.copy(SUN).multiplyScalar(50);S.add(DL);
var L3=new T.PointLight(0xff8a3c,0,70);S.add(L3);
function mkHalo(c,o){return new T.ShaderMaterial({uniforms:{uC:{value:new T.Color(c)},uO:{value:o}},side:T.BackSide,transparent:true,blending:T.AdditiveBlending,depthWrite:false,vertexShader:'varying vec3 vN;void main(){vN=normalize(normalMatrix*normal);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}',fragmentShader:'uniform vec3 uC;uniform float uO;varying vec3 vN;void main(){float i=pow(max(.68-dot(vN,vec3(0.,0.,1.)),0.),3.);gl_FragColor=vec4(uC*i*2.2*uO,i*uO);}'})}
var pg=new T.SphereGeometry(1,96,96);
var TL=new T.TextureLoader();TL.setCrossOrigin('anonymous');var AN=Math.min(8,R.capabilities.getMaxAnisotropy());
function tx(k,srgb){var t=TL.load(TX[k]);t.anisotropy=AN;if(srgb)t.encoding=T.sRGBEncoding;return t}
var earthMat=new T.MeshPhongMaterial({map:tx('earth',true),specularMap:tx('espec'),normalMap:tx('enorm'),normalScale:new T.Vector2(.8,.8),specular:new T.Color(0x333333),shininess:18});
var marsMat=new T.MeshStandardMaterial({map:tx('mars',true),bumpMap:tx('marsb'),bumpScale:.05,roughness:1});
var satMat=new T.MeshStandardMaterial({map:tx('sat',true),roughness:.9});
var moonMat=new T.MeshStandardMaterial({map:tx('moon',true),bumpMap:tx('moon'),bumpScale:.05,roughness:1});
function mkPlanet(r,mat,rim,rimO,pos,ring,clouds){var m=new T.Mesh(pg,mat);m.scale.setScalar(r);m.position.copy(pos);var hh=new T.Mesh(pg,mkHalo(rim,rimO));hh.scale.setScalar(1.1);m.add(hh);m.userData.halo=hh;
 if(clouds){var cl=new T.Mesh(pg,new T.MeshStandardMaterial({color:0xffffff,alphaMap:tx('cloud'),transparent:true,depthWrite:false,roughness:1,opacity:.95}));cl.scale.setScalar(1.012);m.add(cl);m.userData.cl=cl}
 if(ring){var rg=new T.Mesh(new T.RingGeometry(1.4,2.4,128),new T.ShaderMaterial({side:T.DoubleSide,transparent:true,depthWrite:false,uniforms:{tC:{value:tx('ringc',true)},tA:{value:tx('ringa')}},vertexShader:'varying float vR;void main(){vR=length(position.xy);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}',fragmentShader:'uniform sampler2D tC,tA;varying float vR;void main(){float u=clamp((vR-1.4)/1.,0.,1.);vec3 c=texture2D(tC,vec2(u,.5)).rgb;float a=texture2D(tA,vec2(u,.5)).r;gl_FragColor=vec4(c*.9,a*.95);}'}));rg.rotation.x=1.25;m.add(rg)}
 S.add(m);return m}
function rng(s){return function(){s=(s*16807)%2147483647;return (s-1)/2147483646}}
function nz(x,y,z){function hs(a,b,c){var s=Math.sin(a*127.1+b*311.7+c*74.7)*43758.5453;return s-Math.floor(s)}function L(a,b,t){return a+(b-a)*t}var X=Math.floor(x),Y=Math.floor(y),Z2=Math.floor(z),fx=x-X,fy=y-Y,fz=z-Z2;fx=fx*fx*(3-2*fx);fy=fy*fy*(3-2*fy);fz=fz*fz*(3-2*fz);return L(L(L(hs(X,Y,Z2),hs(X+1,Y,Z2),fx),L(hs(X,Y+1,Z2),hs(X+1,Y+1,Z2),fx),fy),L(L(hs(X,Y,Z2+1),hs(X+1,Y,Z2+1),fx),L(hs(X,Y+1,Z2+1),hs(X+1,Y+1,Z2+1),fx),fy),fz)}
function mkRockGeo(seed,detail){var g=new T.IcosahedronGeometry(1,detail),p=g.attributes.position,r=rng(seed*977+13),cr=[],i;
 for(i=0;i<46;i++){var bg=i<6;cr.push({d:new V3(r()-.5,r()-.5,r()-.5).normalize(),r:bg?.3+r()*.3:.05+r()*.16,k:bg?.07+r()*.08:.015+r()*.04})}
 function disp(v,o){var d=1+.34*(nz(v.x*1.5+seed,v.y*1.5,v.z*1.5)-.5)+.14*(nz(v.x*3.7+seed,v.y*3.7,v.z*3.7)-.5)+.06*(nz(v.x*9+seed,v.y*9,v.z*9)-.5)+.02*(nz(v.x*23,v.y*23+seed,v.z*23)-.5),rim=0;
  for(var j=0;j<cr.length;j++){var c=cr[j],a=Math.acos(Math.max(-1,Math.min(1,v.x*c.d.x+v.y*c.d.y+v.z*c.d.z)));if(a<c.r){var t=a/c.r;d-=c.k*(1-t*t)*(1-.15*t)}else if(a<c.r*1.3){var u=(a-c.r)/(c.r*.3);d+=c.k*.3*(1-u)*(1-u);rim=Math.max(rim,1-u)}}
  o.set(v.x*d*1.25,v.y*d*.85,v.z*d);return rim}
 var n=new Float32Array(p.count*3),col=new Float32Array(p.count*3),v=new V3(),p0=new V3(),p1=new V3(),p2=new V3(),t1=new V3(),t2=new V3(),e=.012;
 for(i=0;i<p.count;i++){v.set(p.getX(i),p.getY(i),p.getZ(i)).normalize();var rim=disp(v,p0);
  t1.crossVectors(v,Math.abs(v.y)>.9?new V3(1,0,0):UP).normalize();t2.crossVectors(v,t1);
  disp(new V3().copy(v).addScaledVector(t1,e).normalize(),p1);disp(new V3().copy(v).addScaledVector(t2,e).normalize(),p2);
  p1.sub(p0);p2.sub(p0);var nn=new V3().crossVectors(p1,p2).normalize();if(nn.dot(v)<0)nn.negate();
  n[i*3]=nn.x;n[i*3+1]=nn.y;n[i*3+2]=nn.z;
  var sh=.62+.3*nz(v.x*5+seed,v.y*5,v.z*5)+rim*.1;col[i*3]=sh*1.04;col[i*3+1]=sh*.98;col[i*3+2]=sh*.92;
  p.setXYZ(i,p0.x,p0.y,p0.z)}
 var uv=new Float32Array(p.count*2),q;for(i=0;i<p.count;i+=3){var ax=0,ay=0,az=0;for(q=0;q<3;q++){ax+=Math.abs(n[(i+q)*3]);ay+=Math.abs(n[(i+q)*3+1]);az+=Math.abs(n[(i+q)*3+2])}
 for(q=0;q<3;q++){var X=p.getX(i+q),Y=p.getY(i+q),Z=p.getZ(i+q),ua,ub;if(ax>=ay&&ax>=az){ua=Y;ub=Z}else if(ay>=az){ua=X;ub=Z}else{ua=X;ub=Y}uv[(i+q)*2]=ua*.5+.5;uv[(i+q)*2+1]=ub*.5+.5}}
 g.setAttribute('uv',new T.BufferAttribute(uv,2));
 g.setAttribute('normal',new T.BufferAttribute(n,3));g.setAttribute('color',new T.BufferAttribute(col,3));return g}
var MT=tx('moon',true);MT.wrapS=MT.wrapT=T.RepeatWrapping;MT.repeat.set(2,1);
var HD=mob?10:14,LD=mob?5:6,RG=[mkRockGeo(1,HD),mkRockGeo(7,HD),mkRockGeo(13,HD)],RGL=[mkRockGeo(1,LD),mkRockGeo(7,LD),mkRockGeo(13,LD)],RM=new T.MeshStandardMaterial({vertexColors:true,map:MT,bumpMap:MT,bumpScale:.1,roughness:1,metalness:0});
function rock(g,sc,pos,em){var m=new T.Mesh(g,em?new T.MeshStandardMaterial({vertexColors:true,map:MT,roughness:1,emissive:em,emissiveIntensity:.5}):RM);m.scale.setScalar(sc);m.position.copy(pos);S.add(m);return m}
function pl(s,side,up){var p=path.getPointAt(s),t=path.getTangentAt(s),lat=new V3().crossVectors(t,UP).normalize();return p.addScaledVector(lat,side).addScaledVector(UP,up)}
function plr(sa,D,L,Up){var p=path.getPointAt(sa),f=path.getTangentAt(sa),r=new V3().crossVectors(f,UP).normalize(),u=new V3().crossVectors(r,f);return p.addScaledVector(f,D).addScaledVector(r,L).addScaledVector(u,Up)}
var P1=mkPlanet(3.4,moonMat,0x8899aa,.1,new V3(2.6,.2,0));
var P2=mkPlanet(3.4,moonMat,0x8899aa,.15,new V3(2.6,.2,-324));
var PA=mkPlanet(3.2,earthMat,0x4f8fff,.4,plr(.25,14,4,1.5),false,true);
var PP=mkPlanet(3.4,marsMat,0xe0905a,.3,plr(.45,14,-4,-1));
var PC=mkPlanet(3.6,satMat,0xe8c898,.25,plr(.67,14,4,1.5),true);
var big=rock(RG[0],1.0,new V3(40,22,-14),0xa34a10);
// ambient asteroid field (3 instanced variants)
var dm=new T.Object3D(),fields=[],NF=mob?90:150,NB=mob?40:80;
RGL.forEach(function(g,vi){var im=new T.InstancedMesh(g,RM,NF+NB),arr=[];
 for(var i=0;i<NF+NB;i++){var belt=i>=NF,s=belt?.72+Math.random()*.14:.04+Math.random()*.8;if(!belt&&s>.7&&s<.9)s-=.2;
  var pp=path.getPointAt(s).add(new V3(Math.random()-.5,Math.random()-.5,Math.random()-.5).normalize().multiplyScalar(belt?3+Math.random()*13:7+Math.random()*34));
  var ss=(belt?.12:.2)+Math.pow(Math.random(),2.2)*(belt?.9:2.8);if([PA,PP,PC].some(function(q){return q.position.distanceTo(pp)<12}))ss=.001;arr.push({p:pp,s:ss,r:Math.random()*6,w:.03+Math.random()*.12})}
 S.add(im);fields.push({m:im,a:arr})});
var A1=rock(RG[0],.42,path.getPointAt(.76).add(new V3(3.4,1.4,0))),A2=rock(RG[1],.4,path.getPointAt(.785).add(new V3(-3.2,-1,0))),A3=rock(RG[2],.4,path.getPointAt(.81).add(new V3(2.8,.2,0)));
// stars
var SN=3000,sa=new Float32Array(SN*3);for(var i=0;i<SN;i++){var q=path.getPointAt(Math.random()).add(new V3(Math.random()-.5,Math.random()-.5,Math.random()-.5).multiplyScalar(150));sa[i*3]=q.x;sa[i*3+1]=q.y;sa[i*3+2]=q.z}
var sg=new T.BufferGeometry();sg.setAttribute('position',new T.BufferAttribute(sa,3));S.add(new T.Points(sg,new T.PointsMaterial({size:.12,color:0xdfe8ff,transparent:true,opacity:.8})));
// fracture: real rock chunks + embers + shockwave
var CN=mob?30:55,chunks=[];RG.forEach(function(g){var im=new T.InstancedMesh(g,RM,CN),a=[];for(var i=0;i<CN;i++)a.push({v:new V3(Math.random()-.5,Math.random()-.5,Math.random()-.5).normalize().multiplyScalar(2.5+Math.random()*13),s:.3+Math.pow(Math.random(),1.8)*1.5,r:Math.random()*6,w:Math.random()*.8});im.frustumCulled=false;S.add(im);chunks.push({m:im,a:a})});
var KC=1600,ka=new Float32Array(KC*3);for(i=0;i<KC;i++){var kv=new V3(Math.random()-.5,Math.random()-.5,Math.random()-.5).normalize().multiplyScalar(3+Math.random()*22);ka[i*3]=kv.x;ka[i*3+1]=kv.y;ka[i*3+2]=kv.z}
var kg=new T.BufferGeometry();kg.setAttribute('position',new T.BufferAttribute(ka,3));var KU={uB:{value:-1},uC:{value:P1.position.clone()},uPR:{value:dpr}};
var sparks=new T.Points(kg,new T.ShaderMaterial({uniforms:KU,transparent:true,blending:T.AdditiveBlending,depthWrite:false,vertexShader:'uniform float uB,uPR;uniform vec3 uC;varying float vA,vT;void main(){float t=max(uB,0.);vec3 p=uC+position*(1.-exp(-1.1*t))/1.1;vec4 m=modelViewMatrix*vec4(p,1.);vA=uB<0.?0.:exp(-t*.5);vT=t;gl_PointSize=uPR*(1.2+length(position)*.06)*(26./-m.z);gl_Position=projectionMatrix*m;}',fragmentShader:'varying float vA,vT;void main(){float d=length(gl_PointCoord-.5);float a=smoothstep(.5,0.,d)*vA;gl_FragColor=vec4(mix(vec3(1.,.62,.22),vec3(.55,.4,.3),clamp(vT*.3,0.,1.)),a);}'}));sparks.frustumCulled=false;S.add(sparks);
var shock=new T.Mesh(new T.SphereGeometry(1,40,40),mkHalo(0xffb870,0));shock.position.copy(P1.position);S.add(shock);
// labels + picking
var labels=[];
function mkLabel(txt,obj,dy,fn,far,sm,ar){var b=document.createElement('button');b.className='lb'+(sm?' sm':'');b.textContent=txt;b.setAttribute('aria-label',ar||txt);b.onclick=fn;document.body.appendChild(b);labels.push({el:b,o:obj,dy:dy,far:far})}
PA.userData.act=function(){zoomIn(PA,'a')};PP.userData.act=function(){zoomIn(PP,'p')};PC.userData.act=function(){zoomIn(PC,'c')};
A1.userData.act=function(){ext('https://www.linkedin.com/in/syed-waqar-ali-zaidi-295b7339a/')};A2.userData.act=function(){ext(GH.slice(0,-1))};A3.userData.act=mail;
mkLabel('About',PA,-4.8,PA.userData.act,70,false,'Open About');mkLabel('Projects',PP,-5,PP.userData.act,70,false,'Open projects');mkLabel('Client work',PC,-5.4,PC.userData.act,70,false,'Open client work');
mkLabel('LinkedIn ↗',A1,-1,A1.userData.act,22,true,'Open LinkedIn');mkLabel('GitHub ↗',A2,-1,A2.userData.act,22,true,'Open GitHub');mkLabel('Email',A3,-1,A3.userData.act,22,true,'Show email');
var RCs=new T.Raycaster(),pick=[PA,PP,PC,A1,A2,A3],mv=new T.Vector2();
function hit(e){mv.set(e.clientX/innerWidth*2-1,-(e.clientY/innerHeight)*2+1);RCs.setFromCamera(mv,C);var r=RCs.intersectObjects(pick,false);return r.length&&r[0].distance<(r[0].object.scale.x>2?70:22)?r[0].object:null}
cv.addEventListener('click',function(e){if(Z&&Z.dir||!$('md').hidden)return;var o=hit(e);if(o)o.userData.act()});
var mx=0,my=0,tx=0,ty=0;
addEventListener('pointermove',function(e){tx=e.clientX/innerWidth-.5;ty=e.clientY/innerHeight-.5;if(e.target===cv)cv.style.cursor=hit(e)?'pointer':'default'},{passive:true});
addEventListener('scroll',function(){var h=document.body.scrollHeight-innerHeight;tp=h>0?Math.min(1,scrollY/h):0;if(!motion){sp=tp;frame()}},{passive:true});
Z={k:0,dir:0,obj:null,kind:null,skip:false};
function zoomIn(o,k){if(Z.dir||Z.k>0)return;if(!o)return showP(k);Z.obj=o;Z.kind=k;Z.dir=1;Z.skip=!motion;whoosh(true);chime(440);document.documentElement.style.overflow='hidden'}
// ---- frame ----
var t0=0,iS=.8,clk=new T.Clock(),run=false,ft=0,fn=0,cpos=new V3(),lk=new V3(),tg=new V3(),pj=new V3(),fw=new V3(),aim=new V3(),IMP=2.4;
function ease(x){return x*x*(3-2*x)}
function frame(){
 var dt=Math.min(clk.getDelta(),.05);if(motion)t0+=dt;if(!motion&&t0<40)t0=40;
 var ie=Math.min(1,t0/3);ie=1-Math.pow(1-ie,3);var pm=motion&&Z.k==0?1:0;
 if(Z.dir){Z.k+=Z.dir*(Z.skip?1:dt/1.15);if(Z.k>=1){Z.k=1;Z.dir=0;showP(Z.kind)}else if(Z.k<=0){Z.k=0;Z.dir=0;document.documentElement.style.overflow=''}}
 if(Z.k==0&&!Z.dir)sp+=(tp-sp)*(motion?Math.min(1,dt*2.2):1);mx+=(tx-mx)*.05;my+=(ty-my)*.05;
 if(motion&&Z.k==0&&tp>.999&&sp>.996){scrollTo(0,0);tp=0;sp=0;iS=t0+.5}
 var s=Math.min(1,Math.max(0,sp)),fade=Math.max(0,Math.min(1,(sp-.04)/.05)),vel=Math.min(1,Math.abs(tp-sp)*12);U.uT.value=t0;PA.visible=PP.visible=PC.visible=A1.visible=A2.visible=A3.visible=fade>0;P2.visible=sp>.5;
 var imp=t0-iS,ib=imp-IMP,hit0=ib>=0;
 big.visible=imp>0&&!hit0;if(big.visible){var u=Math.max(0,imp/IMP),e2=u*u;big.position.set(40+(P1.position.x-40)*e2,22+(P1.position.y-22)*e2,-14+14*e2);big.rotation.x=t0*2;big.rotation.y=t0;L3.position.copy(big.position);L3.intensity=6}
 P1.visible=!hit0;
 if(hit0){L3.position.copy(P1.position);L3.intensity=90*Math.exp(-ib*2.6)}else if(!big.visible)L3.intensity=0;
 KU.uB.value=hit0?ib:-1;KU.uPR.value=dpr;
 shock.visible=hit0&&ib<2.6;if(shock.visible){shock.scale.setScalar(3.6+ib*13);shock.material.uniforms.uO.value=Math.max(0,1-ib*.42)}
 chunks.forEach(function(ch,vi){for(var q=0;q<CN;q++){var a=ch.a[q];if(!hit0)dm.scale.setScalar(0);else{var k=(1-Math.exp(-.7*ib))/.7+ib*.12*a.w;dm.position.set(P1.position.x+a.v.x*k,P1.position.y+a.v.y*k,P1.position.z+a.v.z*k);dm.rotation.set(a.r+ib*a.w,a.r*.5+ib*a.w*.6,a.r);dm.scale.setScalar(a.s)}dm.updateMatrix();ch.m.setMatrixAt(q,dm.matrix)}ch.m.instanceMatrix.needsUpdate=true});
 fields.forEach(function(f){for(var q=0;q<NF+NB;q++){var b=f.a[q];dm.position.copy(b.p);dm.rotation.set(t0*b.w+b.r,t0*b.w*.7,b.r);dm.scale.setScalar(b.s*fade);dm.updateMatrix();f.m.setMatrixAt(q,dm.matrix)}f.m.instanceMatrix.needsUpdate=true});
 [P1,P2,PA,PP,PC].forEach(function(p,i){p.rotation.y=t0*(.02+i*.004)});PA.userData.cl.rotation.y=t0*.012;A1.rotation.y=t0*.3;A2.rotation.y=-t0*.25;A3.rotation.y=t0*.2;
 cpos.copy(path.getPointAt(s));tg.copy(path.getTangentAt(Math.min(.9999,Math.max(.0001,s))));lk.copy(cpos).addScaledVector(tg,10);
 var e=ease(Math.min(1,Z.k));
 if(e>0){var tp3=Z.obj.position;cpos.lerp(tp3,e);aim.set(tp3.x+Math.cos(t0*.1)*5,tp3.y+1,tp3.z+Math.sin(t0*.1)*5);lk.lerp(aim,e)}
 C.position.copy(cpos);C.lookAt(lk);
 C.translateX(mx*1.1*pm);C.translateY(-my*.8*pm);C.translateZ((1-ie)*10);C.translateY((1-ie)*2);C.rotateZ(Math.sin(s*12.56)*.03*pm);
 var fv=50+vel*14+(1-ie)*22+Math.sin(Math.PI*e)*45;if(Math.abs(C.fov-fv)>.02){C.fov=fv;C.updateProjectionMatrix()}
 $('fl').style.opacity=Z.k>0&&Z.k<1?Math.pow(Math.sin(Math.PI*Z.k),2)*.92:0;
 [PA,PP,PC].forEach(function(p){p.userData.halo.visible=Z.k<.4});
 R.render(S,C);C.getWorldDirection(fw);
 labels.forEach(function(l){l.o.getWorldPosition(pj);var dx=pj.x-C.position.x,dy2=pj.y-C.position.y,dz=pj.z-C.position.z,dist=Math.sqrt(dx*dx+dy2*dy2+dz*dz),fr=dx*fw.x+dy2*fw.y+dz*fw.z;pj.y+=l.dy;pj.project(C);
  var ok=l.o.visible&&Z.k==0&&!Z.dir&&fr>0&&dist<l.far&&Math.abs(pj.x)<1.1&&Math.abs(pj.y)<1.1,op=ok?Math.max(0,Math.min(1,(l.far-dist)/(l.far*.3))):0;
  l.el.style.opacity=op;l.el.style.pointerEvents=op>.3?'auto':'none';l.el.tabIndex=op>.3?0:-1;l.el.style.transform='translate('+((pj.x*.5+.5)*innerWidth)+'px,'+((-pj.y*.5+.5)*innerHeight)+'px) translate(-50%,-50%)'});
 if(motion){ft+=dt;fn++;if(fn==90){if(ft/fn>.03&&dpr>1){dpr=1;size()}ft=0;fn=-1e9}}
}
function loop(){if(run)return;run=true;(function tick(){if(!motion||document.hidden){run=false;return}frame();requestAnimationFrame(tick)})()}
document.addEventListener('visibilitychange',function(){if(!document.hidden&&motion){clk.getDelta();loop()}});
frame();if(motion)loop();
function top0(){scrollTo(0,0);tp=0;sp=0;iS=t0+.8}
addEventListener('load',function(){if(scrollY>2)top0()});addEventListener('pageshow',function(e){if(e.persisted||scrollY>2)top0()});
window.loop=loop;window.frame=frame;window.clk=clk;window.zoomIn=zoomIn;
})();
