const regButton = document.querySelector("#sendbut"),
checkPassword = document.querySelector("#check"),
password1 = document.querySelector(".same1"),
password2 = document.querySelector(".same2");

window.addEventListener("load",function(){
    regButton.addEventListener("click",function(){
        if(password1.value!=password2.value){
            password1.value = "";
            password2.value = "";
            checkPassword.innerHTML = "Пароли не совпадают";
        }
        else{
            checkPassword.innerHTML = "";
        }
    });
})