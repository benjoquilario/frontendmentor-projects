const challengeContainer = document.querySelector('.challenges__container');
const filterBtn = document.querySelector('.filter__open');
const filter = document.querySelector('.filter');

filterBtn.addEventListener('click', function () {
  filter.classList.toggle('filter--active');
  filter.classList.contains('filter--active')
    ? filterBtn.setAttribute('aria-expanded', true)
    : filterBtn.setAttribute('aria-expanded', false);
});

const challenge = document.querySelectorAll('.challenge');

filter.addEventListener('click', function (e) {
  const clicked = e.target.closest('.filter__btn');
  if (!clicked) return;

  const filterClicked = clicked.dataset.filter;

  challenge.forEach((ch) => {
    const category = ch.dataset.category;

    if (filterClicked === 'all')
      return ch.classList.remove('challenge--filter');

    if (filterClicked !== category) {
      ch.classList.add('challenge--filter');
    } else {
      ch.classList.remove('challenge--filter');
    }
  });
});
