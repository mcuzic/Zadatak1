const cardBtn = document.querySelector('.card__button');
const cardContainer = document.querySelector('.card__container');
const cardContent = document.querySelector('.card__content');

// Toggle function
cardBtn.addEventListener('click', () => {
  if (cardBtn.classList.contains('card__button--active')) {
    const newElement = document.createElement('p');
    cardContent.appendChild(newElement);
    newElement.classList.add('new__container');
    newElement.textContent =
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem natus saepe ea qui soluta temporibus quis earum deserunt a provident?';

    setTimeout(() => {
      newElement.classList.add('active');
    }, 50);
    cardBtn.classList.remove('card__button--active');
    cardBtn.textContent = 'Show less';
  } else {
    const newElement = document.querySelector('.new__container');
    cardContent.removeChild(newElement);
    cardBtn.classList.add('card__button--active');
    cardBtn.textContent = 'Learn more';
  }
});

// Observer
const section = document.querySelector('.section');
console.log(section);

const observerCallback = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      section.classList.add('section--show');
    } else {
      section.classList.remove('section--show');
    }
  });
};

const observer = new IntersectionObserver(observerCallback);
observer.observe(section);
