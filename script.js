//your code here
const appDiv = document.getElementById("app");
const swapButton = document.getElementById("swap");

function swapTheme() {
  appDiv.classList.toggle("day");
  appDiv.classList.toggle("night");

  swapButton.classList.toggle("button_day");
  swapButton.classList.toggle("button_night");

  // Additional logic to handle animation delays
  const hasNightClass = appDiv.classList.contains("night");

  if (hasNightClass) {
    // Add a delay before checking the class to allow for animations
    setTimeout(() => {
      if (!appDiv.classList.contains("night")) {
        // If the class was removed, reapply it
        appDiv.classList.add("night");
      }
    }, 1000); // Adjust the delay as needed
  }
}

swapButton.addEventListener("click", swapTheme);

