const fnameInput = document.getElementById('fname');
const lnameInput = document.getElementById('lname');
const emailInput = document.getElementById('email');
const passInput = document.getElementById('pass');

const fnameError = document.getElementById('error1');
const lnameError = document.getElementById('error2');
const emailError = document.getElementById('error3');
const passError = document.getElementById('error4');

const fnameErrorIcon = document.getElementById('fnameErrorIcon');
const lnameErrorIcon = document.getElementById('lnameErrorIcon');
const emailErrorIcon = document.getElementById('emailErrorIcon');
const passErrorIcon = document.getElementById('passErrorIcon');

// FNAME
document.getElementById('submit').addEventListener('click', function(event) {
  if (fnameInput.value.trim() === '') {
    fnameError.style.display = 'block';
    fnameInput.style.border = "2px solid red";
    fnameInput.placeholder = "";
    fnameErrorIcon.style.display = 'block';
    event.preventDefault();
  } else {
    fnameError.style.display = 'none';
    fnameInput.style.border = '';
    fnameErrorIcon.style.display = 'none';
  }
});

// LNAME
document.getElementById('submit').addEventListener('click', function(event) {
  if (lnameInput.value.trim() === '') {
    lnameError.style.display = 'block';
    lnameInput.style.border = "2px solid red";
    lnameInput.placeholder = "";
    lnameErrorIcon.style.display = 'block';
    event.preventDefault();
  } else {
    lnameError.style.display = 'none';
    lnameInput.style.border = '';
    lnameErrorIcon.style.display = 'none';
  }
});

// EMAIL
document.getElementById('submit').addEventListener('click', function(event) {
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (emailInput.value === "" || !emailPattern.test(emailInput.value)) {
    emailError.style.display = 'block';
    emailInput.style.border = "2px solid red";
    emailInput.value = "email@example/com";
    emailErrorIcon.style.display = 'block';
    event.preventDefault();
  } else {
    emailError.style.display = 'none';
    emailInput.style.border = '';
    emailErrorIcon.style.display = 'none';
  }
});

// PASS
document.getElementById('submit').addEventListener('click', function(event) {
  if (passInput.value.trim() === '') {
    passError.style.display = 'block';
    passInput.style.border = "2px solid red";
    passInput.placeholder = "";
    passErrorIcon.style.display = 'block';
    event.preventDefault();
  } else {
    passError.style.display = 'none';
    passInput.style.border = '';
    passErrorIcon.style.display = 'none';
  }
});
