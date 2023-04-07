const main = document.querySelector('main');
const signUpForm = document.querySelector('form');

const firstName = document.getElementById('first-name');
const firstNameError = document.getElementById('first-name-error');

const lastName = document.getElementById('last-name');
const lastNameError = document.getElementById('last-name-error');

const email = document.getElementById('email-address');
const emailError = document.getElementById('email-address-error');

const password = document.getElementById('password');
const passwordError = document.getElementById('password-error');

const errorInputStyles = [
  'border-desaturated-red', 'border-2', 'placeholder:text-desaturated-red'
];
const defaultInputStyles = [
  'border-grayish-blue/60', 'placeholder:text-dark-blue'
];

const mainStyles = {
  _default: ['xl:pt-[7.3rem]', 'xl:pb-[7.325rem]'],
  _error: ['xl:pt-[4.875rem]', 'xl:pb-[4.73125]'] 
};

signUpForm.addEventListener('submit', function(event) {
  main.classList.remove(...mainStyles['_error']);
  main.classList.add(...mainStyles['_default']);

  if (isEmpty(firstName)) {
    showInvalid({ input: firstName, error: firstNameError,
      message: 'First name cannot be empty'
    }, '');
    event.preventDefault();
  }

  if (isEmpty(lastName)) {
    showInvalid({ input: lastName, error: lastNameError,
      message: 'Last name cannot be empty'
    }, '');
    event.preventDefault();
  }

  if (!isEmailValid()) {
    showInvalid({ input: email, error: emailError,
      message: 'Looks like this is not an email'
    }, 'email@example/com');
    event.preventDefault();
  }

  if (isEmpty(password)) {
    showInvalid({ input: password, error: passwordError,
      message: 'Password cannot be empty'
    }, '');
    event.preventDefault();
  }
});

function isEmpty(input) {
  return input.value.length === 0;
}

function showInvalid({ input, error, message }, placeholder) {
  error.classList.remove('hidden');
  error.textContent = message;

  input.classList.remove(...defaultInputStyles);
  input.classList.add(...errorInputStyles);
  input.style.background = "url('./images/icon-error.svg') no-repeat right 1.5rem top 50%";
  input.value = '';
  input.placeholder = placeholder;

  main.classList.remove(...mainStyles['_default']);
  main.classList.add(...mainStyles['_error']);
}

function isEmailValid() {
  const emailFormat = /[\w!#\$%&'\*\+\-\/=\?\^`\{\|\}~]+(\.[\w!#\$%&'\*\+\-\/=\?\^`\{\|\}~]+)*@\d*[a-z]+\d*(\-[a-z0-9]+)*(\.\d*[a-z]+\d*(\-[a-z0-9]+)*)*(\.[a-z]+)?/mi;
  return email.value.match(emailFormat) && areAllEmailDomainLabelsValid();
}

function areAllEmailDomainLabelsValid() {
  const labels = email.value
    .slice(email.value.indexOf('@'), email.value.lastIndexOf('.'))
    .split('.');
  
  for (const label of labels) {
    if (label.length > 63) {
      return false;
    }
  }
  
  return true;
}

function hideInvalid({ input, error }, placeholder) {
  return function(event) {
    if (error.textContent !== '') {
      error.classList.add('hidden');
      error.textContent = '';

      input.classList.remove(...errorInputStyles);
      input.classList.add(...defaultInputStyles);
      input.style.background = 'none';
      input.placeholder = placeholder;
    }
    event.preventDefault();
  }
}

firstName.addEventListener('focus', hideInvalid({
  input: firstName,
  error: firstNameError
}, 'First Name'));

lastName.addEventListener('focus', hideInvalid({
  input: lastName,
  error: lastNameError,
}, 'Last Name'));

email.addEventListener('focus', hideInvalid({
  input: email,
  error: emailError
}, 'Email Address'));

password.addEventListener('focus', hideInvalid({
  input: password,
  error: passwordError
}, 'Password'));
