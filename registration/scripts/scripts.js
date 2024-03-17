const regButton = document.querySelector("#sendbut"),
checkPassword = document.querySelector("#checkpass"),
checkLogin = document.querySelector("#checklog"),
password1 = document.querySelector(".same1"),
password2 = document.querySelector(".same2"),
login = document.querySelector(".login");



function sendForm(){
    let loginTemplate = /^[a-zA-Z][a-zA-Z0-9-_\.]{1,20}$/g;

    if(password1.value!=password2.value){
        password1.value = "";
        password2.value = "";
        checkPassword.innerHTML = "Пароли не совпадают";
    } else if(!loginTemplate.test(login.value)){
        checkLogin.innerHTML = "Неверный логин";
    }
    else{
        const currentLogin = login.value;
        const currentPassword = password1.value;
        const currentConfPassword = password2.value;
        const user = {
        login: currentLogin,
        password: currentPassword,
        confPassword: currentConfPassword
        };
        checkPassword.innerHTML = "";
        checkLogin.innerHTML = "";

        login.value = "";
        password1.value = "";
        password2.value = "";

        localStorage.setItem('user', JSON.stringify(user));
    }
}