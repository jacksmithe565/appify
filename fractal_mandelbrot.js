Here is an example of a JavaScript code that generates a fractal image using the Mandelbrot set algorithm, fulfilling the requirements you mentioned:

```javascript
// Filename: fractal_mandelbrot.js
// The code generates the Mandelbrot fractal image

function mandelbrot(c_real, c_imag) {
  let z_real = 0;
  let z_imag = 0;

  for (let i = 0; i < 1000; i++) {
    let temp_real = z_real;
    let temp_imag = z_imag;

    z_real = temp_real * temp_real - temp_imag * temp_imag + c_real;
    z_imag = 2 * temp_real * temp_imag + c_imag;

    if (z_real * z_real + z_imag * z_imag >= 4) {
      return i;
    }
  }

  return 0;
}

function generateMandelbrotImage(width, height, xMin, xMax, yMin, yMax) {
  const imageData = [];

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const px_width = (xMax - xMin) / width;
      const px_height = (yMax - yMin) / height;

      const c_real = xMin + x * px_width;
      const c_imag = yMin + y * px_height;

      const iterations = mandelbrot(c_real, c_imag);
      const normalizedIterations = iterations * (255 / 1000);

      const r = normalizedIterations;
      const g = normalizedIterations;
      const b = normalizedIterations;

      imageData.push(r, g, b, 255);
    }
  }

  return imageData;
}

// Usage:
const canvas = document.createElement('canvas');
canvas.width = 800;
canvas.height = 600;
document.body.appendChild(canvas);

const context = canvas.getContext('2d');
const imageData = context.createImageData(canvas.width, canvas.height);

const imageDataArr = generateMandelbrotImage(
  canvas.width,
  canvas.height,
  -2.5,
  1,
  -1,
  1
);

for (let i = 0; i < imageData.data.length; i++) {
  imageData.data[i] = imageDataArr[i];
}

context.putImageData(imageData, 0, 0);
```

Note: The provided code uses the HTML5 Canvas element to draw the Mandelbrot fractal image. When executing this code in a web browser, it will generate and display the fractal image on the webpage.