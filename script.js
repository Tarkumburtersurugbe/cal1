const d=document.getElementById('display');
document.querySelectorAll('button').forEach(btn=>btn.addEventListener('click',()=>{
  const v=btn.dataset.value,a=btn.dataset.action;
  if(a==='clear'||btn.id==='clearButton') return d.textContent='';
  if(a==='delete') return d.textContent=d.textContent.slice(0,-1);
  if(a==='calculate') return d.textContent=Function(`"use strict"; return (${d.textContent.replace(/×/g,'*').replace(/÷/g,'/')});`)();
  if(a==='percent') return d.textContent=Function(`"use strict"; return (${d.textContent})/100;`)();
  d.textContent += v||btn.textContent.trim();
}));
document.addEventListener('keydown',e=>{
  if(/[0-9+\-*/.]/.test(e.key)){e.preventDefault(); d.textContent += e.key;}
  if(e.key==='Enter'){e.preventDefault(); d.textContent=Function(`"use strict"; return (${d.textContent.replace(/×/g,'*').replace(/÷/g,'/')});`)();}
  if(e.key==='Backspace'){e.preventDefault(); d.textContent=d.textContent.slice(0,-1);}
  if(e.key==='Escape'){e.preventDefault(); d.textContent='';}
});