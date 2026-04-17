let progress = document.getElementById("progress");
let song = document.getElementById("song");
let ctrlIcon = document.getElementById("ctrlIcon");

console.log(song)
song.onloadeddata = function(){
    progress.max = song.ondurationchange;
    progress.value = song.currentTime;
}

function playPause(){
    if(ctrlIcon.classList.contains("ri-play-fill")){
        song.pause();
        ctrlIcon.classList.remove("ri-play-fill");
        ctrlIcon.classList.add("ri-pause-line")
    }else{
        song.play();
        ctrlIcon.classList.add("ri-play-fill");
        ctrlIcon.classList.remove("ri-pause-line");
    }
}

if(song.play()){
    setInterval(()=>{
        progress.value = song.currentTime;
    },500);
}

progress.onchange = function(){
    song.play();
    song.currentTime = progress.value;
    ctrlIcon.classList.add("ri-play-fill");
    ctrlIcon.classList.remove("ri-pause-line")
}