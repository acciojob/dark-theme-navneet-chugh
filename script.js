//your code here
const appDiv = document.getElementById("app");
    const swapButton = document.getElementById("swap");

    function swapTheme() {
      appDiv.classList.toggle("day");
      appDiv.classList.toggle("night");

      swapButton.classList.toggle("button_day");
      swapButton.classList.toggle("button_night");
    }

    swapButton.addEventListener("click", swapTheme);

