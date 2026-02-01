// BACKGROUND
const canvas=document.getElementById('background');
const ctx=canvas.getContext('2d');
function resize(){canvas.width=innerWidth;canvas.height=innerHeight;}
resize();window.onresize=resize;

let particles=[];
for(let i=0;i<140;i++){
 particles.push({
  x:Math.random()*canvas.width,
  y:Math.random()*canvas.height,
  r:Math.random()*2+0.5,
  s:Math.random()*0.3+0.1,
  c:Math.random()>0.7?'rgba(255,200,210,.6)':'rgba(255,255,255,.8)'
 });
}

function animate(){
 ctx.clearRect(0,0,canvas.width,canvas.height);
 particles.forEach(p=>{
  ctx.beginPath();
  ctx.fillStyle=p.c;
  ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
  ctx.fill();
  p.y+=p.s;
  if(p.y>canvas.height)p.y=0;
 });
 requestAnimationFrame(animate);
}
animate();

// SCENES
const scenes=[...document.querySelectorAll('.scene')];
let index=0;

function show(i){
 scenes.forEach(s=>s.classList.remove('active'));
 scenes[i].classList.add('active');
}

setTimeout(()=>show(1),3000);
setTimeout(()=>show(2),6500);

document.getElementById('yes').addEventListener('click',()=>{
 show(3);
 document.getElementById('song').play();
});