let counterValue = 0;
const counterBtn = document.querySelector('#value');
const minusBtn = document.querySelector('[data-action="decrement"]');
const plumBtn = document.querySelector('[data-action="increment"]');

minusBtn.addEventListener('click', () => {
  counterBtn.textContent = counterValue -= 1;
});

plumBtn.addEventListener('click', () => {
  counterBtn.textContent = counterValue += 1;
});