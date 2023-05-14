const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const formData = new FormData(loginForm);

  if (!formData.get('email') || !formData.get('password')) {
    alert('Please fill in all fields');
  } else {
    const formObject = Object.fromEntries(formData.entries());
    console.log(formObject);

    event.target.reset();
  }
});
