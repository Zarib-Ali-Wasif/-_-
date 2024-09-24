// Song information and file paths
const songs = [
  {
    name: "song1",
    displayName: "Song 1",
    artist: "Artist 1",
  },
  {
    name: "song2",
    displayName: "Song 2",
    artist: "Artist 2",
  },
  {
    name: "song3",
    displayName: "Song 3",
    artist: "Artist 3",
  },
  {
    name: "song4",
    displayName: "Song 4",
    artist: "Artist 4",
  },
  {
    name: "song5",
    displayName: "Song 5",
    artist: "Artist 5",
  },
];

// Select elements
const audio = document.getElementById("audio");
const playBtn = document.getElementById("play");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const progressContainer = document.getElementById("progress-container");
const progress = document.getElementById("progress");
const songTitle = document.getElementById("song-title");
const artistName = document.getElementById("artist-name");
const songList = document.getElementById("song-list");

// Keep track of current song
let songIndex = 0;

// Load song
function loadSong(song) {
  songTitle.innerText = song.displayName;
  artistName.innerText = song.artist;
  audio.src = `music/${song.name}.mp3`;
}

// Play Song
function playSong() {
  playBtn.innerHTML = '<i class="fas fa-pause"></i>';
  audio.play();
}

// Pause Song
function pauseSong() {
  playBtn.innerHTML = '<i class="fas fa-play"></i>';
  audio.pause();
}

// Play or Pause event
playBtn.addEventListener("click", () => {
  const isPlaying = audio.paused;
  if (isPlaying) {
    playSong();
  } else {
    pauseSong();
  }
});

// Previous song
function prevSong() {
  songIndex = songIndex === 0 ? songs.length - 1 : songIndex - 1;
  loadSong(songs[songIndex]);
  playSong();
}

// Next song
function nextSong() {
  songIndex = songIndex === songs.length - 1 ? 0 : songIndex + 1;
  loadSong(songs[songIndex]);
  playSong();
}

// Update progress bar
function updateProgress(e) {
  const { duration, currentTime } = e.srcElement;
  const progressPercent = (currentTime / duration) * 100;
  progress.style.width = `${progressPercent}%`;
}

// Set progress bar manually
function setProgress(e) {
  const width = this.clientWidth;
  const clickX = e.offsetX;
  const duration = audio.duration;
  audio.currentTime = (clickX / width) * duration;
}

// Event listeners for buttons and progress
prevBtn.addEventListener("click", prevSong);
nextBtn.addEventListener("click", nextSong);
audio.addEventListener("timeupdate", updateProgress);
progressContainer.addEventListener("click", setProgress);
audio.addEventListener("ended", nextSong);

// Load the first song on page load
loadSong(songs[songIndex]);

// Generate Song List
songs.forEach((song, index) => {
  const li = document.createElement("li");
  li.innerText = `${song.displayName} - ${song.artist}`;
  li.addEventListener("click", () => {
    songIndex = index;
    loadSong(song);
    playSong();
  });
  songList.appendChild(li);
});
