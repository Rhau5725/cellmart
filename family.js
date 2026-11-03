(()=>{
  const slots=[...document.querySelectorAll('[data-family]')];
  if(!slots.length)return;
  const reduced=matchMedia('(prefers-reduced-motion: reduce)');
  const visible=new Map();let raf=0;
  function choose(){
    raf=0;
    const mainExperience=['.hero-photo','.encounter'].some(selector=>{
      const r=document.querySelector(selector)?.getBoundingClientRect();
      return r&&Math.min(r.bottom,innerHeight)-Math.max(r.top,0)>Math.min(r.height*.35,190)&&Math.abs(r.top+r.height/2-innerHeight/2)<innerHeight*.28;
    });
    let winner=null,distance=Infinity;
    if(!document.hidden&&!reduced.matches&&!mainExperience){
      for(const [slot,ratio]of visible){
        if(ratio<.35)continue;
        const r=slot.getBoundingClientRect(),gap=Math.abs(r.top+r.height/2-innerHeight/2);
        if(gap<distance){winner=slot;distance=gap}
      }
    }
    slots.forEach(slot=>slot.classList.toggle('is-active',slot===winner));
  }
  const request=()=>{if(!raf)raf=requestAnimationFrame(choose)};
  if('IntersectionObserver'in window){
    const observer=new IntersectionObserver(entries=>{
      entries.forEach(e=>{visible.set(e.target,e.intersectionRatio);if(e.isIntersecting)e.target.classList.remove('family-pending')});request();
    },{threshold:[0,.35,.7,1]});
    slots.forEach(slot=>{slot.classList.add('family-pending');observer.observe(slot)});
  }else slots.forEach(slot=>visible.set(slot,1));
  addEventListener('scroll',request,{passive:true});addEventListener('resize',request,{passive:true});
  document.addEventListener('visibilitychange',request);reduced.addEventListener('change',request);
  const curious=document.querySelector('[data-family="faq"]');
  document.querySelector('#questions').addEventListener('toggle',()=>{
    curious.classList.toggle('has-open-question',!!document.querySelector('#questions details[open]'));
  },true);
  const proof=document.querySelector('[data-family="proofs"]');let settle,reaction;
  document.querySelector('#carousel').addEventListener('scroll',()=>{
    clearTimeout(settle);settle=setTimeout(()=>{
      if(!proof.classList.contains('is-active')||reduced.matches)return;
      clearTimeout(reaction);proof.classList.add('is-reacting');
      reaction=setTimeout(()=>proof.classList.remove('is-reacting'),1100);
    },180);
  },{passive:true});
  request();
})();
