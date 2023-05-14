const input = document.querySelector('#validation-input');

const inputBlur = event => {
  input.classList.remove('valid');
  input.classList.remove('invalid');
  input.classList.add(
    event.currentTarget.value.length === Number(input.dataset.length) ? "valid" : "invalid"
    );
}

input.addEventListener('blur', inputBlur);