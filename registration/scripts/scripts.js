const regButton = document.querySelector("#sendbut"),
checkPassword = document.querySelector("#checkpass"),
checkLogin = document.querySelector("#checklog"),
checkAll = document.querySelector("#checkall"),
password1 = document.querySelector(".same1"),
password2 = document.querySelector(".same2"),
login = document.querySelector(".login"),
email = document.querySelector("#email"),
profpic = document.querySelector(".profpic");


function saveUserData(){
    const currentLogin = login.value;
    const currentPassword = password1.value;
    const currentConfPassword = password2.value;
    const currentEmail = email.value;
    const currentAvatarUrl = document.querySelector('#avatar').value;

    if (!currentLogin || !currentPassword || !currentConfPassword || !currentEmail || !currentAvatarUrl) {
        checkAll.innerHTML = "Пожалуйста, заполните все поля.";
        return;
    } else{
        checkAll.innerHTML = "";
    }

    if (currentPassword != currentConfPassword){
        checkPassword.innerHTML = "Пароли не совпадают.";
        return;
    } else {
        checkPassword.innerHTML = "";
    }

    localStorage.setItem('userLogin', currentLogin);
    localStorage.setItem('userAvatarUrl', currentAvatarUrl);

    const otherUserDataString = `${currentPassword}|${currentEmail}`;

    console.log('Данные успешно сохранены в локальном хранилище.');

    login.value = '';
    password1.value = '';
    password2.value = '';
    email.value = '';
    document.querySelector('#avatar').value = '';

    console.log(`Регистрация успешно завершена, добро пожаловать, ${currentLogin}`);

    window.location.href = '../urprofile.html';

}

function ProfilCheckFromOtherHTML(){
    if (localStorage.getItem('userLogin')) {
      window.location.href = '../urprofile.html';
      console.log('da');
    } else {
      window.location.href = '../regform.html';
      console.log('net');
  }
}

function ProfilePicture(){
    if (localStorage.getItem('userAvatarUrl')) {
        profpic.src = localStorage.getItem('userAvatarUrl');
    }
}
ProfilePicture();
/*function sendForm(){
    let error = {};
    let errors = 0;

    let loginTemplate = /^[a-zA-Z][a-zA-Z0-9-_\.]{1,20}$/g;

    if(password1.value!=password2.value){
        password1.value = "";
        password2.value = "";
        error.checkPassword = "Пароли не совпадают";
        checkPassword.innerHTML = error.checkPassword;
    }
    else{
        checkPassword.innerHTML = "";
    }



    else if(!loginTemplate.test(login.value)){
        checkLogin.innerHTML = "Неверный логин";
    }

    if(key in error){
        errors++;
    }
    if(errors){
        return false;
    }
    else{
        const currentLogin = login.value;
        const currentPassword = password1.value;
        const currentConfPassword = password2.value;

        const user = {
        login: currentLogin,
        password: currentPassword,
        confPassword: currentConfPassword
        }

        checkPassword.innerHTML = "";
        checkLogin.innerHTML = "";

        login.value = "";
        password1.value = "";
        password2.value = "";

        localStorage.setItem('user', JSON.stringify(user));
    }
}*/