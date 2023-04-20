const paymentMethod = document.querySelector('#payment-method');
const cardDetails = document.querySelector('#card-details');
const mobileMoneyDetails = document.querySelector('#mobile-money-details');

// Show/hide card details form when credit card is selected
paymentMethod.addEventListener('change', (event) => {
  if (event.target.value === 'credit-card') {
    cardDetails.style.display = 'block';
    mobileMoneyDetails.style.display = 'none';
  } else if (event.target.value === 'mobile-money') {
    cardDetails.style.display = 'none';
    mobileMoneyDetails.style.display = 'block';
  }
});

// Handle credit card form submission
const cardForm = document.querySelector('#card-form');
cardForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const cardNumber = document.querySelector('#card-number').value;
  const expMonth = document.querySelector('#exp-month').value;
  const expYear = document.querySelector('#exp-year').value;
  const cvv = document.querySelector('#cvv').value;
  
  // Code here to process the credit card payment and display the result to the user
});

// Handle mobile money form submission
const mobileMoneyForm = document.querySelector('#mobile-money-form');
mobileMoneyForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const phoneNumber = document.querySelector('#phone-number').value;
  const amount = document.querySelector('#amount').value;
  
  // Code here to initiate the mobile money payment and display instructions to the user on how to complete the transaction
});
