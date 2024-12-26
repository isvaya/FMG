///change language

document.addEventListener('DOMContentLoaded', function() {
  const select = document.getElementById("header__language--switcher");
////текущий язык
  const currentPath = window.location.pathname.split('/')[1];
  select.value = currentPath || 'ru';
///обновляет язык при изменении
  select.addEventListener('change', function() {
    const selectedLanguage = this.value;
    window.window.location.href = `/${selectedLanguage}/index.html`;
  });
});


///SLIDER SERVICES 

const container = document.querySelector('.services__container--hidden');
const boxContainer = document.querySelector('.services__box-container');
const leftButton = document.querySelector('.left-btn');
const rightButton = document.querySelector('.right-btn');
const cards = document.querySelectorAll('.box-container--box');

let offset = 0;
const step = 433;

const totalWidth = cards.length * step;
const visibleWidth = container.offsetWidth;
const maxOffset = Math.max(0, totalWidth - visibleWidth);

function updateButtons() {
  leftButton.disabled = offset === 0;
  rightButton.disabled = Math.abs(offset) >= maxOffset;
}

rightButton.addEventListener('click', () => {
  if (Math.abs(offset) < maxOffset) {
    offset -= step;
    offset = Math.max(-maxOffset, offset);
    boxContainer.style.transform = `translateX(${offset}px)`;
    updateButtons();
  }
});

leftButton.addEventListener('click', () => {
  if (offset < 0) {
    offset += step;
    offset = Math.min(0, offset);
    boxContainer.style.transform = `translateX(${offset}px)`;
    updateButtons();
  }
});

updateButtons();