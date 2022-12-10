const audioContainer = document.querySelector("#audioContainer");
const playBtn = document.querySelector(".play-btn");
const stopBtn = document.querySelector(".stop-btn");

function play() {
  audioContainer.loop = true;
  audioContainer.play();
}

function stop() {
  audioContainer.pause();
}

playBtn.addEventListener("click", play);
stopBtn.addEventListener("click", stop);
