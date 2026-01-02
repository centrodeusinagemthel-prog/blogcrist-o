(function(){
  const input = document.querySelector('[data-search]');
  if(!input) return;
  const cards = Array.from(document.querySelectorAll('[data-card]'));
  const norm = (s)=> (s||'').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'');
  input.addEventListener('input', ()=>{
    const q = norm(input.value.trim());
    cards.forEach(card=>{
      const hay = norm(card.getAttribute('data-hay') || card.textContent);
      card.style.display = hay.includes(q) ? '' : 'none';
    });
  });
})();
