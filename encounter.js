// The independent scene owns only #universo-cellmart. The hero is untouched.
(()=>{
  const scene=document.querySelector('#universo-cellmart');
  if(!scene)return;
  const reduced=matchMedia('(prefers-reduced-motion: reduce)');
  scene.dataset.ready='true';
  if(!('IntersectionObserver'in window)||reduced.matches){scene.classList.add('has-arrived');return}
  const observer=new IntersectionObserver(entries=>{
    const visible=entries[0].isIntersecting;
    if(visible)scene.classList.add('has-arrived');
    scene.classList.toggle('is-suspended',!visible);
  },{threshold:.12});
  observer.observe(scene);
  document.addEventListener('visibilitychange',()=>{
    if(document.hidden)scene.classList.add('is-suspended');
    else{const bounds=scene.getBoundingClientRect();scene.classList.toggle('is-suspended',bounds.bottom<0||bounds.top>innerHeight)}
  });
  reduced.addEventListener('change',()=>{if(reduced.matches)scene.classList.add('has-arrived')});
})();
