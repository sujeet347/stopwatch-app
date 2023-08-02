// Get references to the elements
const timeDisplay = document.querySelector(".time-display");
const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");

// Initialize variables
let startTime;
let interval;
let isRunning = false;

// Function to update the time display
function updateTimeDisplay() {
    const currentTime = Date.now() - startTime;
    const minutes = Math.floor(currentTime / 60000);
    const seconds = Math.floor((currentTime % 60000) / 1000);
    const milliseconds = currentTime % 1000;
    timeDisplay.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}:${String(milliseconds).padStart(3, '0')}`;
}

// Event listeners for buttons
startBtn.addEventListener("click", function () {
    if (!isRunning) {
        startTime = Date.now();
        interval = setInterval(updateTimeDisplay, 10); // Update every 10 milliseconds
        isRunning = true;
    }
});

stopBtn.addEventListener("click", function () {
    if (isRunning) {
        clearInterval(interval);
        isRunning = false;
    }
});

resetBtn.addEventListener("click", function () {
    clearInterval(interval);
    timeDisplay.textContent = "00:00:00";
    isRunning = false;
});
