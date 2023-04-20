// Navigation active link
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
  if (link.href === window.location.href) {
    link.classList.add('active');
  }
});
non
// Mobile navigation toggle
const menuToggle = document.querySelector('#menu-toggle');
const navList = document.querySelector('nav ul');

menuToggle.addEventListener('click', () => {
  navList.classList.toggle('active');
});

// Order now button animation
const orderNowBtn = document.querySelector('.button');

orderNowBtn.addEventListener('mouseover', () => {
  orderNowBtn.style.transform = 'scale(1.1)';
});

orderNowBtn.addEventListener('mouseout', () => {
  orderNowBtn.style.transform = 'scale(1)';
});

// Form validation
const form = document.querySelector('#contact-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const messageInput = document.querySelector('#message');
const submitBtn = document.querySelector('#submit-btn');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  if (nameInput.value === '') {
    showError(nameInput, 'Name is required');
  } else {
    showSuccess(nameInput);
  }

  if (emailInput.value === '') {
    showError(emailInput, 'Email is required');
  } else if (!isValidEmail(emailInput.value)) {
    showError(emailInput, 'Invalid email format');
  } else {
    showSuccess(emailInput);
  }

  if (messageInput.value === '') {
    showError(messageInput, 'Message is required');
  } else {
    showSuccess(messageInput);
  }

  if (nameInput.value !== '' && emailInput.value !== '' && isValidEmail(emailInput.value) && messageInput.value !== '') {
    form.reset();
    showSuccess(submitBtn, 'Message sent successfully');
  }
});

function showError(input, message) {
  const formControl = input.parentElement;
  const errorIcon = formControl.querySelector('.error-icon');
  const errorMsg = formControl.querySelector('.error-msg');

  formControl.classList.add('error');
  errorIcon.style.display = 'block';
  errorMsg.textContent = message;
}

function showSuccess(input, message) {
  const formControl = input.parentElement;
  const errorIcon = formControl.querySelector('.error-icon');
  const errorMsg = formControl.querySelector('.error-msg');

  formControl.classList.remove('error');
  errorIcon.style.display = 'none';
  errorMsg.textContent = '';

  if (message) {
    alert(message);
  }
}

function isValidEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}
