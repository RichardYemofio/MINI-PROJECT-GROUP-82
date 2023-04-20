const loginForm = document.querySelector('#login-form');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const errorDisplay = document.querySelector('#login-error');

loginForm.addEventListener('submit', e => {
  e.preventDefault();

  // Check if email and password fields are not empty
  if (emailInput.value.trim() === '' || passwordInput.value.trim() === '') {
    errorDisplay.textContent = 'Please enter your email and password';
    return;
  }

  // Check if email is valid
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(emailInput.value)) {
    errorDisplay.textContent = 'Please enter a valid email';
    return;
  }

  // Check if password is at least 6 characters long
  if (passwordInput.value.length < 6) {
    errorDisplay.textContent = 'Password must be at least 6 characters long';
    return;
  }

  // Login user
  // Here you can add your code to send a login request to the server and handle the response
});
