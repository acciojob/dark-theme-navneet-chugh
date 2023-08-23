const appDiv = document.getElementById("app");
const swapButton = document.getElementById("swap");

function swapTheme() {
  appDiv.classList.toggle("day");
  appDiv.classList.toggle("night");

  swapButton.classList.toggle("button_day");
  swapButton.classList.toggle("button_night");

  const hasNightClass = appDiv.classList.contains("night");

  if (hasNightClass) {
    // Use requestAnimationFrame to synchronize with rendering cycle
    requestAnimationFrame(() => {
      setTimeout(() => {
        if (!appDiv.classList.contains("night")) {
          appDiv.classList.add("night");
        }
      }, 1000); // Adjust the delay as needed
    });
  }
}

swapButton.addEventListener("click", swapTheme);
