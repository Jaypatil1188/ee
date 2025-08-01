window.addEventListener("DOMContentLoaded", () => {
  const music = document.getElementById("bg-music");
  music.volume = 0.4;

  // Try autoplay first
  const playPromise = music.play();

  if (playPromise !== undefined) {
    playPromise
      .then(() => {
        console.log("Music autoplayed successfully.");
      })
      .catch(() => {
        console.log("Autoplay blocked. Waiting for user interaction...");
        const startMusic = () => {
          music.play();
          document.body.removeEventListener("click", startMusic);
        };
        document.body.addEventListener("click", startMusic);
      });
  }
});
