// Show password
const passwordField = document?.getElementById("passwordField");
const togglePasswordButton = document?.getElementById("togglePasswordButton");

togglePasswordButton?.addEventListener('click', () => {

    if (passwordField.type === "password") {
      passwordField.type = "text";
    } else {
      passwordField.type = "password";
    }

});

const funcButtonGetInfoUser = (e) => {
    e.preventDefault();
    let getUserName = document.getElementById('get_email').value;
    let getPassword = document.getElementById('passwordField').value;

    let usernameStoragr =  localStorage.getItem('username');
    let passwordField = localStorage.getItem('password');

    if (getUserName === usernameStoragr && getPassword === passwordField) {
        let newIndex = document.createElement("a");
        newIndex.setAttribute('href','../home page/index.html');
        document.body.appendChild(newIndex);
        window.location.href = newIndex.href;
    } else {
        alert('شما با این حساب کاربری ثبت نامی نداشته اید!');
    };
};

const buttonGetInfoUser = document.getElementById('button_get_info_user');
buttonGetInfoUser?.addEventListener('click', funcButtonGetInfoUser);

// Sin Up
const signUp = document.getElementById('sign-up');
const logIn = document.getElementById('log-in');
let getFullName, getEmail, getPassword, getPhone, signUpButton, openAccountText;

function funcSignUp() {
    for (const child of logIn.children) {
        child.style.display = 'none';
    }
    signGetFullName();
    signGetEmail();
    signGetPassword();
    signGetPhone();
    signUpAccount();
    openAccount();

    const funcGetUserInfo = () => {
        let valueGetFullName = getFullName.value;
        let valueGetEmail = getEmail.value;
        let valueGetPassword = getPassword.value;
        let valueGetPhone = getPhone.value;

        localStorage.setItem('username', valueGetFullName);
        localStorage.setItem('email', valueGetEmail);
        localStorage.setItem('password', valueGetPassword);
        localStorage.setItem('phone number', valueGetPhone);
    }
    signUpButton.addEventListener('click', funcGetUserInfo);
}

signUp?.addEventListener('click', funcSignUp);

const signGetFullName = () => {
    getFullName = document.createElement('input');
    getFullName.type = 'text';
    getFullName.setAttribute('placeholder', 'Fullname');
    getFullName.classList.add('sign-Get-full-name');
    logIn.appendChild(getFullName);
}

const signGetEmail = () => {
    getEmail = document.createElement('input');
    getEmail.type = 'email';
    getEmail.setAttribute('placeholder', 'Email');
    getEmail.classList.add('sign-Get-email');
    logIn.appendChild(getEmail);
}

const signGetPassword = () => {
    getPassword = document.createElement('input');
    getPassword.type = 'password';
    getPassword.setAttribute('placeholder', 'Password');
    getPassword.classList.add('sign-Get-password');
    logIn.appendChild(getPassword);
}

const signGetPhone = () => {
    getPhone = document.createElement('input');
    getPhone.type = 'number';
    getPhone.setAttribute('placeholder', 'Phone number');
    getPhone.classList.add('sign-Get-phone');
    logIn.appendChild(getPhone);
}

const signUpAccount = () => {
    signUpButton = document.createElement('button');
    signUpButton.innerText = 'ثبت نام';
    signUpButton.classList.add('sign-Up-button');
    logIn.appendChild(signUpButton);
}

const openAccount = () => {
    openAccountText = document.createElement('div');
    openAccountText.innerHTML = 'آیا قبلا ثبت نام کرده اید؟ ورود';
    openAccountText.classList.add('open-Account-text')
    logIn.appendChild(openAccountText);

    const funcBackToSignIn = () => {

        logIn.removeChild(getFullName);
        logIn.removeChild(getEmail);
        logIn.removeChild(getPassword);
        logIn.removeChild(getPhone);
        logIn.removeChild(signUpButton);
        logIn.removeChild(openAccountText);

        for (const child of logIn.children) {
            child.style.display = 'flex';
        }
    }
    openAccountText.addEventListener('click', funcBackToSignIn);
};

// home page
let svgResize = document.getElementById('svg-search');

const funcSearch = () => {
    const visibleInput = document.querySelector('.input-resize');
    visibleInput.classList.add('show-tooltip');
};

svgResize?.addEventListener('click', funcSearch);
