const input = document.querySelector('#validation-input');

input.addEventListener('blur', () => {
  const inputLength = Number(input.getAttribute('data-length'));
  const inputValue = input.value.length;

  if (inputValue >= inputLength) {
    input.classList.add('valid');
    input.classList.remove('invalid');
  } else {
    input.classList.add('invalid');
    input.classList.remove('valid');
  }
});