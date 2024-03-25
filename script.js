const confirm = document.querySelector('.myButton');

confirm.addEventListener('click', (e) => {
    e.preventDefault();
    if(validation()){
        console.log('valid');
    }
});

const validateNames = () => {
    let valid = true;
    const firstName = document.getElementById('first-name');
    const lastName = document.getElementById('last-name');

    const firstNameError = document.querySelector('.first-name');
    const lastNameError = document.querySelector('.last-name');

    if(firstName.validity.valueMissing){
        firstNameError.textContent = "*required";
        valid = false;
    }else {
        firstNameError.textContent = "";
    }

    if(lastName.validity.valueMissing){
        lastNameError.textContent = "*required";
        valid = false;
    }else {
        lastNameError.textContent = "";
    }

    return valid;

};

const validateEmail = () => {
    let valid = true;
    const email = document.getElementById('Email');

    const emailError = document.querySelector('.email');
    if (email.validity.valueMissing){
        emailError.textContent = "*required";
        valid = false;
    }else if(email.validity.typeMismatch){
        emailError.textContent = "*ex: hi@me.com";
        valid = false;
    }else {
        emailError.textContent = "";
    }

    return valid;
};

const validateNumber = () => {
    let valid = true;

    const number = document.getElementById('phone-number');
    const numberError = document.querySelector('.phone');

    if(number.validity.valueMissing){
        numberError.textContent = "*required";
        valid = false;

    }else if (number.validity.patternMismatch){
        numberError.textContent = "*ex: 962 xxx xxx xxx";
        valid = false;
    }else {
        numberError.textContent = "";
    }

    return valid;
};

const validatePassword = () => {
    let valid = true;
    const password = document.querySelector('#Password');
    const passwordConfirmation = document.querySelector('#Confirmed-password');

    const passwordError = document.querySelector('.password');

    if(password.validity.valueMissing 
    || passwordConfirmation.validity.valueMissing) {
        passwordError.textContent = "*required";
        valid = false;
    }else if(password.value !== passwordConfirmation.value){
        passwordError.textContent = "*passwords are NOT matching";
        valid = false;
    }else if(password.validity.tooShort) {
        passwordError.textContent = "*minimum 12 characters";
        valid = false;
    }
    else {
        passwordError.textContent = '';
    }

    return valid;
};
const validation = () => {
    const validName = validateNames();
    const validEmail= validateEmail();
    const validNumber = validateNumber();
    const validPassword = validatePassword();
    let valid = validName && validEmail && validNumber && validPassword;
    

    return valid;
};