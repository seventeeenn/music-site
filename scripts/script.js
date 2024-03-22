const wrapper = document.querySelector(".block-period-music.mid"),
playPausebtn = wrapper.querySelector(".controls"),
mainAudio = wrapper.querySelector("#main-audio"),
progressBar = wrapper.querySelector(".progress-bar"),
progressArea = wrapper.querySelector(".progress-area"),

leftBtn = document.querySelector(".button.left"),
rightBtn = document.querySelector(".button.right"),
leftBlock = document.querySelector(".block-period-music.a"),
midBlock = document.querySelector(".block-period-music.b"),
rightBlock = document.querySelector(".block-period-music.c"),

header = document.querySelector("header"),
menuItems = document.querySelectorAll(".items");

function clickBtn(){
    if (leftBtn) {
        leftBtn.addEventListener("click", (e) => {
            if (leftBlock.classList.contains("right")){
                leftBlock.classList.remove("right");
                leftBlock.classList.add("mid");
                rightBlock.classList.remove("mid");
                rightBlock.classList.add("left");
                midBlock.classList.remove("left");
                midBlock.classList.add("right");
            } else if (leftBlock.classList.contains("left")) {
                leftBlock.classList.remove("left");
                leftBlock.classList.add("right");
                rightBlock.classList.remove("right");
                rightBlock.classList.add("mid");
                midBlock.classList.remove("mid");
                midBlock.classList.add("left");
            } else {
                leftBlock.classList.remove("mid");
                leftBlock.classList.add("left");
                rightBlock.classList.remove("left");
                rightBlock.classList.add("right");
                midBlock.classList.remove("right");
                midBlock.classList.add("mid");
            }
        });
    }
    if (rightBtn) {
        rightBtn.addEventListener("click", (e) => {
            if (leftBlock.classList.contains("right")){
                leftBlock.classList.remove("right");
                leftBlock.classList.add("left");
                rightBlock.classList.remove("mid");
                rightBlock.classList.add("right");
                midBlock.classList.remove("left");
                midBlock.classList.add("mid");
            } else if (leftBlock.classList.contains("left")) {
                leftBlock.classList.remove("left");
                leftBlock.classList.add("mid");
                rightBlock.classList.remove("right");
                rightBlock.classList.add("left");
                midBlock.classList.remove("mid");
                midBlock.classList.add("right");
            } else {
                leftBlock.classList.remove("mid");
                leftBlock.classList.add("right");
                rightBlock.classList.remove("left");
                rightBlock.classList.add("mid");
                midBlock.classList.remove("right");
                midBlock.classList.add("left");
            }
        });
    }
}

clickBtn();

mainAudio.volume = 0.1;

function playMusic(){
    wrapper.classList.add("paused");
    playPausebtn.querySelector("i").innerText = "pause";
    mainAudio.play();
}
function pauseMusic(){
    wrapper.classList.remove("paused");
    playPausebtn.querySelector("i").innerText = "play_arrow";
    mainAudio.pause();
}

playPausebtn.addEventListener("click", ()=>{
    const isMusicPaused = wrapper.classList.contains("paused");
    //if else
    isMusicPaused ? pauseMusic() : playMusic();
});

mainAudio.addEventListener("timeupdate", (e)=>{
    const currentTime = e.target.currentTime;
    const duration = e.target.duration;
    let progressWidth = (currentTime / duration) * 100;
    progressBar.style.width = `${progressWidth}%`;

    let musicCurrentTime = wrapper.querySelector(".current"),
    musicDuration = wrapper.querySelector(".duration");

    //не работает
    mainAudio.addEventListener("loadeddata", ()=>{
        let audioDuration = mainAudio.duration;
        let totalMin = Math.floor(audioDuration / 60);
        let totalSec = Math.floor(audioDuration % 60);
        if(totalSec < 10){
            totalSec = `0${totalSec}`;
        }
        musicDuration.innerText = `${totalMin}:${totalSec}`;
    });
    //не работает

    let currentMin = Math.floor(currentTime / 60);
    let currentSec = Math.floor(currentTime % 60);
    if(currentSec < 10){
        currentSec = `0${currentSec}`;
    }
    musicCurrentTime.innerText = `${currentMin}:${currentSec}`;
});

progressArea.addEventListener("click", (e)=>{
    let progressWidthval = progressArea.clientWidth;
    let clickedOffSetX = e.offsetX;
    let songDuration = mainAudio.duration;

    mainAudio.currentTime = (clickedOffSetX / progressWidthval) * songDuration;
    playMusic();
});

