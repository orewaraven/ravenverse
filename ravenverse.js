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

<script>
  // This waits for the user to click anywhere on the page to start the music
  document.addEventListener('click', function() {
    var audio = document.getElementById("bgAudio");
    audio.play();
  }, { once: true }); // { once: true } ensures it only triggers on the first click
</script>
