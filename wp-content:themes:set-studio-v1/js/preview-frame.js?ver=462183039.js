(() => {
  const frames = [...document.querySelectorAll('[data-frame]')];
  const inputs = document.querySelectorAll('input[type="range"]');
  const scrollActions = document.querySelectorAll('[data-control-target]');

  const hideMask = (frame) => {
    if (frame) {
      const mask = frame.querySelector('.preview-frame__mask');
      const button = frame.querySelector('[data-control-target]');

      if (button) {
        button.remove();
      }

      if (mask) {
        mask.remove();
      }
    }
  };

  inputs.forEach((input) => {
    const frame = frames.find((x) => x.getAttribute('data-frame') === input.id);

    input.addEventListener('input', (evt) => {
      frame.style.setProperty('--iframe-width', parseInt(input.value));
      hideMask(frame);
    });
  });

  scrollActions.forEach((button) => {
    button.addEventListener('click', (evt) => {
      evt.preventDefault();

      const frame = frames.find(
        (x) => x.getAttribute('data-frame') === button.getAttribute('data-control-target')
      );

      hideMask(frame);
    });
  });
})();
