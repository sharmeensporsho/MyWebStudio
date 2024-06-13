(function () {
  const items = document.querySelectorAll('[data-switch-text]');

  items.forEach(item => {
    const contentElement = item.querySelector('[data-switch-content]');
    const triggerElement = item.querySelector('[data-switch-trigger]');

    triggerElement.addEventListener('click', () => {
      const oldText = contentElement.innerHTML;
      const oldLang = contentElement.getAttribute('lang');

      contentElement.innerText = contentElement.getAttribute('data-switch-content');
      contentElement.setAttribute(
        'lang',
        contentElement.getAttribute('data-switch-lang')
      );

      contentElement.setAttribute('data-switch-content', oldText);
      contentElement.setAttribute('data-switch-lang', oldLang);
    });
  });
})();
