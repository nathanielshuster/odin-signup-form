// remove default validations
document.addEventListener('invalid', (function(){
  return function(e) {
    //prevent the browser from showing default error bubble / hint
    e.preventDefault();
    // optionally fire off some custom validation handler
    // myValidation();
  };
})(), true);

const firstname = document.querySelector('#first-name');
const lastname = document.querySelector('#last-name');
const email = document.querySelector('#email');
const tel = document.querySelector('#phone-number');
const pw = document.querySelector('#password');
const pwC = document.querySelector('#confirm-password');

const firstnameError = document.querySelector('#first-name-error');
const lastnameError = document.querySelector('#last-name-error');
const emailError = document.querySelector('#email-error');
const telError = document.querySelector('#phone-error');
const pwError = document.querySelector('#password-error');
const pwCError = document.querySelector('#password-confirm-error');

firstname.addEventListener("input", function (event) {
  if (firstname && firstname.value === '') {
    firstnameError.textContent = 'Please enter your first name.';
  } else {
    firstnameError.textContent = '';
  }
}); 

lastname.addEventListener("input", function (event) {
  if (lastname && lastname.value === '') {
    lastnameError.textContent = 'Please enter your last name';
  } else {
    lastnameError.textContent = '';
  }
}); 

email.addEventListener("input", function (event) {
  if (email.validity.typeMismatch) {
    emailError.textContent = 'Please enter a valid Email. ex(johnSmith@email.com)';
  } else {
    emailError.textContent = '';
  }
}); 

tel.addEventListener("input", function (event) {
  if (tel.validity.patternMismatch) {
    telError.textContent = 'Please enter a 10 digit phone number';
  } else {
    telError.textContent = '';
  }     
}); 

pw.addEventListener("input", function (event) {
  if (pw.validity.patternMismatch){
    const currentValue = pw.value;
    const regExpCap = /[A-Z]/g;
    const regExpDig = /[0-9]/g;
    let result = '';
    if (regExpCap.test(currentValue)){
      result += '';
    } else {
      result += `Missing at least 1 capital letter. `;
      result += '\n';
    }
    
    
    if (regExpDig.test(currentValue)){
      result += '';
    } else {
      result += 'Missing at least 1 number. ';
      result += '\n';
    }
    
    if (currentValue.length < 9){
      result += 'Password must be at least 8 characters. '
      result += '\n';
    } else {
      result += '';
    }

    console.log(result);
    pwError.textContent = result;

  } else {
    pwError.textContent = '';
  }
});

pwC.addEventListener("input", function (event) {
  if (pwC.value !== pw.value) {
    pwCError.textContent = 'Passwords do not match';
  } else {
    pwCError.textContent = '';
  }
}); 