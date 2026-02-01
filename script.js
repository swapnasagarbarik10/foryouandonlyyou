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
const s1=document.getElementById('scene1');
const s2=document.getElementById('scene2');
const s3=document.getElementById('scene3');
const s4=document.getElementById('scene4');

setTimeout(()=>{s1.classList.remove('active');s2.classList.add('active');},3000);
setTimeout(()=>{s2.classList.remove('active');s3.classList.add('active');},6500);

// YES ACTION
document.getElementById('yes').onclick=()=>{
 s3.classList.remove('active');
 s4.classList.add('active');
 document.getElementById('song').play();
};

// NO BUTTON DODGE 😄
const noBtn = document.getElementById('no');
noBtn.addEventListener('mouseenter', () => {
  const x = Math.random() * 200 - 100;
  const y = Math.random() * 120 - 60;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});
