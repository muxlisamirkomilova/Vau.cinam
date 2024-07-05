const display = document.querySelector('.display');
const keys = document.querySelector('.keys');

keys.addEventListener('click', e => {
  if (e.target.matches('button')) {
    const key = e.target;
    const action = key.textContent;
    if (action === 'C') {
      display.value = '';
    } else if (action === '=') {
      display.value = eval(display.value);
    } else {
      display.value += action;
    }
  }
});

