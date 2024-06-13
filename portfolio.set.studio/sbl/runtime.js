(() => {
  const burgerMenuTriggers = document.querySelectorAll('.burger-menu__trigger');

  burgerMenuTriggers.forEach(burgerMenuTrigger => {
    burgerMenuTrigger.addEventListener('click', evt => {

      const state = burgerMenuTrigger.getAttribute('aria-expanded');
      const burgerMenuPanel = burgerMenuTrigger.nextSibling; 
      
      if(state === 'false') {
        burgerMenuTrigger.setAttribute('aria-expanded', 'true');
        burgerMenuPanel.setAttribute('data-state', 'open');
        burgerMenuPanel.removeAttribute('inert');
      }  
      else {
        burgerMenuTrigger.setAttribute('aria-expanded', 'false');
        burgerMenuPanel.setAttribute('data-state', 'closed');
        burgerMenuPanel.setAttribute('inert', '');
      }
    });
  });
})();