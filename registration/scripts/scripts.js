const regButton = document.querySelector("#sendbut"),
checkPassword = document.querySelector("#checkpass"),
checkLogin = document.querySelector("#checklog"),
checkAll = document.querySelector("#checkall"),
password1 = document.querySelector(".same1"),
password2 = document.querySelector(".same2"),
login = document.querySelector(".login");


function saveUserData(){
    const currentLogin = login.value;
    const currentPassword = password1.value;
    const currentConfPassword = password2.value;
    const currentAvatarUrl = document.querySelector('#avatar').value;

    if (!currentLogin || !currentPassword || !currentConfPassword || !currentAvatarUrl) {
        checkAll.innerHTML = "Пожалуйста, заполните все поля.";
        return;
    }
    else{
        checkAll.innerHTML = "";
    }

    // Сохраняем данные о никнейме и URL аватара в локальном хранилище
    localStorage.setItem('userNickname', nickname);
    localStorage.setItem('userAvatarUrl', avatarUrl);

    // Сохраняем остальные данные в одной переменной
    const otherUserDataString = `${firstName}|${lastName}|${email}`;

    console.log('Данные успешно сохранены в локальном хранилище.');

    document.getElementById('firstName').value = '';
    document.getElementById('lastName').value = '';
    document.getElementById('email').value = '';
    document.getElementById('nickname').value = '';
    document.getElementById('avatar').value = '';

    console.log(`Регистрация успешно завершена, добро пожаловать, ${nickname}`);

    window.location.href = '../html/checkprofil.html';

}

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