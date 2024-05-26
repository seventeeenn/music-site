function acceptChanges(){
    const newNicknameInput = document.querySelector(".newNickname"),
    newAvatarInput = document.querySelector(".newAvatar");

    const NewNicknameValue = newNicknameInput.value,
    NewAvatarValue = newAvatarInput.value;

    if (localStorage.getItem('userLogin') && localStorage.getItem('userAvatarUrl')) {
        console.log('Оба набора данных найдены в локальном хранилище, запускается функция.');
            if (NewNicknameValue.trim() !== "" || NewAvatarValue.trim() !== "") {
                if (NewNicknameValue.trim() !== "") {
                    localStorage.setItem("userLogin", NewNicknameValue);
                }
            
                if (NewAvatarValue.trim() !== "") {
                    localStorage.setItem("userAvatarUrl", NewAvatarValue);
                }
            
                alert("Данные успешно обновлены!");
            } else {
                console.log("Оба поля пустые. Данные не изменены.");
            }
    } else {
        alert('У вас нет аккаунта.');
        window.location.href = '../regform.html';
    }
}
function clearLocalStorage() {
    const isConfirmed = confirm("Вы уверены, что хотите удалить аккаунт?");
    if (localStorage.getItem('userLogin') && localStorage.getItem('userAvatarUrl')) {
        if (isConfirmed) {
            localStorage.removeItem("userLogin");
            localStorage.removeItem("userAvatarUrl");
        } else {
            alert("Отмена удаления аккаунта успешна.");
        }
    }else{
        alert('У вас нет аккаунта. Прежде чем удалять аккаунт, его нужно создать.');
        window.location.href = '../regform.html';
    }

}