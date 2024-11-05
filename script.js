const targetDate = new Date("2024-11-07T14:15:00").getTime(); // Set this to your meeting date

function updateCountdown() {
    const now = new Date().getTime();
    const timeRemaining = targetDate - now;

    if (timeRemaining > 0) {
        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        document.getElementById("days").innerText = days + "d";
        document.getElementById("hours").innerText = hours + "h";
        document.getElementById("minutes").innerText = minutes + "m";
        document.getElementById("seconds").innerText = seconds + "s";
    } else {
        document.querySelector(".countdown").innerText = "We're together in Tenerife!";
    }
}

// Update countdown every second
setInterval(updateCountdown, 1000);


function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
  }
// Confetti Burst on Heart Click
function burstConfetti() {
    confetti({
        angle: randomInRange(55, 125),
        spread: randomInRange(50, 70),
        particleCount: randomInRange(50, 100),
        origin: { y: 0.6 }
      });
}

// Countdown Logic remains unchanged

// Test Confetti on Page Load (Remove after testing)
window.addEventListener('load', () => {
    burstConfetti();
});
