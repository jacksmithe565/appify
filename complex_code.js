/* filename: complex_code.js */

// This code generates a complex pattern using canvas

// Initialize canvas
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Set canvas size
const canvasWidth = 800;
const canvasHeight = 600;
canvas.width = canvasWidth;
canvas.height = canvasHeight;

// Define colors
const colors = [
  "#ff0000",
  "#00ff00",
  "#0000ff",
  "#ffff00",
  "#00ffff",
  "#ff00ff",
  "#ffffff",
];

// Define variables for pattern generation
const patternWidth = 200;
const patternHeight = 200;
const padding = 50;
const numColumns = Math.ceil(canvasWidth / (patternWidth + padding));
const numRows = Math.ceil(canvasHeight / (patternHeight + padding));

// Define a function to draw a complex pattern
function drawPattern(x, y) {
  for (let i = 0; i < patternWidth; i++) {
    for (let j = 0; j < patternHeight; j++) {
      const color = colors[(i % colors.length)];
      ctx.fillStyle = color;
      ctx.fillRect(x + i, y + j, 1, 1);
    }
  }
}

// Generate the complex pattern
for (let row = 0; row < numRows; row++) {
  for (let col = 0; col < numColumns; col++) {
    const x = col * (patternWidth + padding);
    const y = row * (patternHeight + padding);
    drawPattern(x, y);
  }
}