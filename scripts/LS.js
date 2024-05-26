function getDataFromLocalStorage() {
    const currentLogin = localStorage.getItem('userLogin');
    const currentAvatarUrl = localStorage.getItem('userAvatarUrl');
    const otherDataString = localStorage.getItem('userOtherData');


    document.getElementById('nickname').innerHTML = currentLogin;

    const avatarImage = document.createElement('img');
    avatarImage.src = currentAvatarUrl || '';
    avatarImage.alt = 'User Avatar';
    document.getElementById('avatar').appendChild(avatarImage).classList.add('profpicforpage');
}
getDataFromLocalStorage();