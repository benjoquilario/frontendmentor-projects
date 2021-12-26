const challengeContainer = document.querySelector('.challenges__container');
const filterBtn = document.querySelector('.filter__open');
const filter = document.querySelector('.filter');

filterBtn.addEventListener('click', function () {
  filter.classList.toggle('filter--active');
  filter.classList.contains('filter--active')
    ? filterBtn.setAttribute('aria-expanded', true)
    : filterBtn.setAttribute('aria-expanded', false);
});

const filterList = document.querySelectorAll('.filter__list');

filter.addEventListener('click', function (e) {
  const clicked = e.target.closest('.filter__btn');
  if (!clicked) return;

  const filterClicked = clicked.dataset.filter;

  filterList.forEach((list) => {
    const category = list.dataset.category;
    if (filterClicked === 'all')
      return list.classList.remove('challenge--filter');

    if (filterClicked !== category) {
      list.classList.add('challenge--filter');
    } else {
      list.classList.remove('challenge--filter');
    }
  });
});
