const headerr = document.querySelector("header");
function showMenu(){
    if(headerr.classList.contains("boom")){
        headerr.classList.remove("boom");
    } else {
        headerr.classList.add("boom");
    }
}