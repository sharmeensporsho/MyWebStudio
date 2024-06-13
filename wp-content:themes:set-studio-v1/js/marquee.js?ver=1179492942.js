const marquee = document.querySelector('.marquee');

const isVisible = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      marquee.classList.add('is-visible');
    }
    else {
      marquee.classList.remove('is-visible');
    }
  });
};

const observer = new IntersectionObserver(isVisible);
observer.observe(marquee);

