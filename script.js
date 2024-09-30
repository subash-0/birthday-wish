const giftBox = document.getElementById("giftBox");
const surpriseElements = document.getElementById("surpriseElements");
const fireworks = document.getElementById("fireworks");
const stars = document.getElementById("stars");
const music = document.getElementById("music");

giftBox.addEventListener("click", function () {
  surpriseElements.classList.remove("hidden");

  // Create fireworks
  launchFireworks();
  
  // Create stars
  createStars();
  
  // Play birthday music
  music.play();
  
  // Hide the gift box
  giftBox.style.display = "none";
});

// Launch Fireworks
function launchFireworks() {
  for (let i = 0; i < 10; i++) {
    const firework = document.createElement("div");
    firework.classList.add("firework");
    firework.style.left = Math.random() * 100 + "vw";
    firework.style.top = Math.random() * 50 + "vh";
    firework.style.animationDuration = Math.random() * 2 + "2s";
    fireworks.appendChild(firework);
  }
}

// Create Starry Sky
function createStars() {
  for (let i = 0; i < 100; i++) {
    const star = document.createElement("div");
    star.classList.add("star");
    star.style.left = Math.random() * 100 + "vw";
    star.style.top = Math.random() * 100 + "vh";
    stars.appendChild(star);
  }
}
