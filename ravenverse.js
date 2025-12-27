document.addEventListener("DOMContentLoaded", () => {
  const card = document.querySelector(".profile-card");
  if (!card) return;

  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX = -(y - rect.height / 2) / 12;
    const rotateY = (x - rect.width / 2) / 12;

    card.style.transform = `
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      scale(1.03)
    `;

    // light follow
    card.style.setProperty("--mx", `${(x / rect.width) * 100}%`);
    card.style.setProperty("--my", `${(y / rect.height) * 100}%`);
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = `
      rotateX(0deg)
      rotateY(0deg)
      scale(1)
    `;
    card.style.setProperty("--mx", "50%");
    card.style.setProperty("--my", "50%");
  });
});
// This function starts the audio
  function playAudio() {
    const audio = document.getElementById("bgAudio");
    audio.play().catch(error => {
      console.log("Autoplay blocked, waiting for user interaction.");
    });
  }

  // This triggers the audio on the VERY FIRST click anywhere on the page
  document.addEventListener('click', playAudio, { once: true });
  
  // This also triggers it if they press a key or scroll
  document.addEventListener('keydown', playAudio, { once: true });
  document.addEventListener('touchstart', playAudio, { once: true });


