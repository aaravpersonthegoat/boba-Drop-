// Basic JavaScript file
const music = document.getElementById('bgMusic');
const btn = document.getElementById('musicBtn');
btn.addEventListener('click', () => {
    if (music.paused) {
        music.play();
        btn.textContent = '🔇 Pause';
    } else {
        music.pause();
        btn.textContent = '🔊 Play Music';
    }
});
function toggleImage() {
  const img = document.getElementById("myimg");
  if (img.style.display === "none") {
    img.style.display = "block";
  } else {
    img.style.display = "none";
  }
}
