let count = 0;

const button = document.getElementById("treat-btn");
const countDisplay = document.getElementById("treat-count");

button.addEventListener("click", function () {
  count++;

  if (count === 1) {
    button.textContent = `Clicked ${count} time!`;
  } else {
    button.textContent = `Clicked ${count} times!`;
  }

  countDisplay.textContent = count;
});

const canvas = document.getElementById("dogCanvas");
const ctx = canvas.getContext("2d");

let drawing = false;

canvas.addEventListener("mousedown", () => {
  drawing = true;
});

canvas.addEventListener("mouseup", () => {
  drawing = false;
ctx.beginPath();
});

canvas.addEventListener("mousemove", (e) => {
  if (!drawing) return;

  ctx.lineWidth = 3;
  ctx.lineCap = "round";
  ctx.strokeStyle = "#333";

  const rect = canvas.getBoundingClientRect();

  ctx.lineTo(e.clientX - rect.left, e.clientY - rect.top);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(e.clientX - rect.left, e.clientY - rect.top);
});

function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
};