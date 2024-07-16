const image = document.querySelector("img");
const title = document.getElementById("title");
const artist = document.getElementById("artist");
const music = document.querySelector("audio");
const prevBtn = document.getElementById("prev");
const playBtn = document.getElementById("play");
const nextBtn = document.getElementById("next");

const songs = [
  {
    name: "jacinto-1",
    displayName: "Electric Chill Machine",
    artist: "ELox",
  },
  {
    name: "jacinto-2",
    displayName: "Acoustic Guitar",
    artist: "Lona",
  },
  {
    name: "jacinto-3",
    displayName: "Melodious Piano",
    artist: "Addisi",
  },
  {
    name: "metric-1",
    displayName: "Jonas Song Chills",
    artist: "Jonas Sisters",
  },
];

//play song
//pause song
//variable is just like useState, when you need to change something dynamically , we use them
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
  playBtn.setAttribute("title", "Play");
}

playBtn.addEventListener("click", () => (isPlaying ? pauseSong() : playSong()));

function loadSong(song) {
  title.textContent = song.displayName;
  artist.textContent = song.artist;
  image.src = `./img/${song.name}.jpg`;
  music.src = `./music/${song.name}.mp3`;
}

let songIndex = 0;

function prevSong() {
  songIndex--;
  if (songIndex < 0) {
    songIndex = songs.length - 1;
  }
  loadSong(songs[songIndex]);
  playSong();
}
function nextSong() {
  songIndex++;
  if (songIndex > songs.length - 1) {
    songIndex = 0;
  }
  loadSong(songs[songIndex]);
  playSong();
}

loadSong(songs[songIndex]);

prevBtn.addEventListener("click", prevSong);
nextBtn.addEventListener("click", nextSong);
