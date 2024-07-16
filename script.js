const music = document.querySelector("audio");
const prevBtn = document.getElementById("prev");
const playBtn = document.getElementById("play");
const nextBtn = document.getElementById("next");

//play song
//pause song
let isPlaying = false;

function playSong() {
  music.play();
  isPlaying = true;
  playBtn.classList.replace("fa-play", "fa-pause");
  playBtn.setAttribute("title", "Pause");
}

function pauseSong() {
  music.pause();
  isPlaying = false;
  playBtn.classList.replace("fa-pause", "fa-play");
  playBtn.setAttribute("title", "Play")
}

playBtn.addEventListener("click", () => (isPlaying ? pauseSong() : playSong()));
