const fnameInput = document.getElementById('fname');
const lnameInput = document.getElementById('lname');
const emailInput = document.getElementById('email');
const passInput = document.getElementById('pass');

const fnameError = fnameInput.nextElementSibling;
const lnameError = lnameInput.nextElementSibling;
const emailError = emailInput.nextElementSibling;
const passError = passInput.nextElementSibling;

// FNAME
document.getElementById('submit').addEventListener('click', function(event) {
  const inputField = document.getElementById('fname');
  const errorSpan = document.getElementById('error1');

  if (fnameInput.value.trim() === '') {
    fnameError.style.display = 'block';
    fnameInput.style.border = "2px solid red";
    fnameInput.placeholder = "";
    event.preventDefault();
  }else {
    fnameError.style.display = 'none';
    fnameInput.style.border = '';
  }
});

// LNAME
document.getElementById('submit').addEventListener('click', function(event) {
  const inputField = document.getElementById('lname');
  const errorSpan = document.getElementById('error2');
  
  if (lnameInput.value.trim() === '') {
    lnameError.style.display = 'block';
    lnameInput.style.border = "2px solid red";
    lnameInput.placeholder = "";
    event.preventDefault();
  }else {
    lnameError.style.display = 'none';
    lnameInput.style.border = '';
  }
});

//EMAIL
document.getElementById('submit').addEventListener('click', function(event) {
  const inputField = document.getElementById('email');
  const errorSpan = document.getElementById('error3');
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  
  if (emailInput.value === "" || !emailPattern.test(emailInput.value)) {
    emailError.style.display = 'block';
    emailInput.style.border = "2px solid red";
    emailInput.placeholder = "email@example/com";
    event.preventDefault();
  }else {
    emailError.style.display = 'none';
    emailInput.style.border = '';
  }
});

//PASS
document.getElementById('submit').addEventListener('click', function(event) {
  const inputField = document.getElementById('pass');
  const errorSpan = document.getElementById('error4');
  
  if (inputField.value.trim() === '') {
    passError.style.display = 'block';
    passInput.style.border = "2px solid red";
    passInput.placeholder = "";
    event.preventDefault();
  }else {
    passError.style.display = 'none';
    passInput.style.border = '';
  }
});












// document.getElementById('submit').addEventListener('click', function(event) {
//     const inputField = document.getElementById('fname');
//     const errorSpan = document.getElementById('error');
    
//     if (inputField.value.trim() === '') {
//       errorSpan.style.display = 'inline';
//       event.preventDefault();
//     }
//   });

  // function validateFname() {
  //   const fnameInput = document.getElementById("fname");
  //   const errorSpan = document.getElementById("error");

  //   if (fnameInput.value == "" || x == null){
  //     fnameInput.style.borderColor = "red";
  //     fnameInput.style.color = "red";
  //     errorSpan.style.display = "block";
  //   }


  // }


  // function validateEmail() {
  //   const emailInput = document.getElementById("email");
  //   const errorSpan = document.getElementById("error");
  //   const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  
  //   if (emailInput.value === "" || !emailPattern.test(emailInput.value)) {
  //     emailInput.style.borderColor = "red";
  //     emailInput.placeholder = "example@email.com";
  //     emailInput.style.color = "red";
  //     errorSpan.style.display = "block";
  //   }
  

//   // Select form elements
// const fnameInput = document.getElementById('fname');
// const lnameInput = document.getElementById('lname');
// const emailInput = document.getElementById('email');
// const passInput = document.getElementById('pass');

// // Select error messages
// const fnameError = fnameInput.nextElementSibling;
// const lnameError = lnameInput.nextElementSibling;
// const emailError = emailInput.nextElementSibling;
// const passError = passInput.nextElementSibling;

// // Add event listener to validate form on blur or submit
// fnameInput.addEventListener('blur', () => {
//   if (fnameInput.value.trim() === '') {
//     fnameError.style.display = 'inline';
//     fnameInput.style.border = '2px solid red';
//   } else {
//     fnameError.style.display = 'none';
//     fnameInput.style.border = '';
//   }
// });

// lnameInput.addEventListener('blur', () => {
//   if (lnameInput.value.trim() === '') {
//     lnameError.style.display = 'inline';
//     lnameInput.style.border = '2px solid red';
//   } else {
//     lnameError.style.display = 'none';
//     lnameInput.style.border = '';
//   }
// });

// emailInput.addEventListener('blur', () => {
//   const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   if (!emailPattern.test(emailInput.value.trim())) {
//     emailError.style.display = 'inline';
//     emailInput.style.border = '2px solid red';
//   } else {
//     emailError.style.display = 'none';
//     emailInput.style.border = '';
//   }
// });

// passInput.addEventListener('blur', () => {
//   if (passInput.value.trim() === '') {
//     passError.style.display = 'inline';
//     passInput.style.border = '2px solid red';
//   } else {
//     passError.style.display = 'none';
//     passInput.style.border = '';
//   }
// });

// // Optional: Validate all fields on form submission
// const form = document.querySelector('.input');
// form.addEventListener('submit', (event) => {
//   let isValid = true;

//   if (fnameInput.value.trim() === '') {
//     fnameError.style.display = 'inline';
//     fnameInput.style.border = '2px solid red';
//     isValid = false;
//   }

//   if (lnameInput.value.trim() === '') {
//     lnameError.style.display = 'inline';
//     lnameInput.style.border = '2px solid red';
//     isValid = false;
//   }

//   const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   if (!emailPattern.test(emailInput.value.trim())) {
//     emailError.style.display = 'inline';
//     emailInput.style.border = '2px solid red';
//     isValid = false;
//   }

//   if (passInput.value.trim() === '') {
//     passError.style.display = 'inline';
//     passInput.style.border = '2px solid red';
//     isValid = false;
//   }

//   if (!isValid) {
//     event.preventDefault();
//   }
// });


// // Select form elements
// const fnameInput = document.getElementById('fname');
// const lnameInput = document.getElementById('lname');
// const emailInput = document.getElementById('email');
// const passInput = document.getElementById('pass');

// // Select error messages
// const fnameError = fnameInput.nextElementSibling;
// const lnameError = lnameInput.nextElementSibling;
// const emailError = emailInput.nextElementSibling;
// const passError = passInput.nextElementSibling;

// // Style error messages
// [fnameError, lnameError, emailError, passError].forEach(error => {
//   error.style.fontSize = '10px';
//   error.style.display = 'none';
// });

// // Add event listener to validate form on blur or submit
// fnameInput.addEventListener('blur', () => {
//   if (fnameInput.value.trim() === '') {
//     fnameError.style.display = 'block';
//     fnameInput.style.border = '2px solid red';
//   } else {
//     fnameError.style.display = 'none';
//     fnameInput.style.border = '';
//   }
// });

// lnameInput.addEventListener('blur', () => {
//   if (lnameInput.value.trim() === '') {
//     lnameError.style.display = 'block';
//     lnameInput.style.border = '2px solid red';
//   } else {
//     lnameError.style.display = 'none';
//     lnameInput.style.border = '';
//   }
// });

// emailInput.addEventListener('blur', () => {
//   const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   if (!emailPattern.test(emailInput.value.trim())) {
//     emailError.style.display = 'block';
//     emailInput.style.border = '2px solid red';
//     emailInput.placeholder = "email@example/com";
//   } else {
//     emailError.style.display = 'none';
//     emailInput.style.border = '';
//   }
// });

// passInput.addEventListener('blur', () => {
//   if (passInput.value.trim() === '') {
//     passError.style.display = 'block';
//     passInput.style.border = '2px solid red';
//   } else {
//     passError.style.display = 'none';
//     passInput.style.border = '';
//   }
// });

// // Optional: Validate all fields on form submission
// const form = document.querySelector('.input');
// form.addEventListener('submit', (event) => {
//   let isValid = true;

//   if (fnameInput.value.trim() === '') {
//     fnameError.style.display = 'inline';
//     fnameInput.style.border = '2px solid red';
//     isValid = false;
//   }

//   if (lnameInput.value.trim() === '') {
//     lnameError.style.display = 'inline';
//     lnameInput.style.border = '2px solid red';
//     isValid = false;
//   }

//   const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   if (!emailPattern.test(emailInput.value.trim())) {
//     emailError.style.display = 'inline';
//     emailInput.style.border = '2px solid red';
//     isValid = false;
//   }

//   if (passInput.value.trim() === '') {
//     passError.style.display = 'inline';
//     passInput.style.border = '2px solid red';
//     isValid = false;
//   }

//   if (!isValid) {
//     event.preventDefault(); // Prevent form submission if validation fails
//   }
// });







