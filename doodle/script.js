document.addEventListener("DOMContentLoaded", function() {
  const text = "congrats! you found me! doodle here:";
  const writeupElement = document.getElementById("typewriter");

  function typeWriterEffect(text, element, speed) {
    let i = 0;
    function type() {
      if (i < text.length) {
        element.innerHTML += text.charAt(i);
        i++;
        setTimeout(type, speed);
      }
    }
    type();
  }

  // Adjust the speed (second parameter) to control the typing speed
  typeWriterEffect(text, writeupElement, 100);
});

document.addEventListener("DOMContentLoaded", function() {
  const canvas = document.getElementById("doodleCanvas");
  const ctx = canvas.getContext("2d");
  let isDrawing = false;

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  canvas.addEventListener("mousedown", startDrawing);
  canvas.addEventListener("mousemove", draw);
  canvas.addEventListener("mouseup", stopDrawing);
  canvas.addEventListener("mouseleave", stopDrawing);

  // Set the drawing color to #b70000
  ctx.fillStyle = "#b70000";

  function startDrawing(event) {
    isDrawing = true;
    draw(event); // Draw the initial point
  }

  function draw(event) {
    if (!isDrawing) return;

    const size = 50; // Adjust the size of the pen
    const x = event.clientX - canvas.offsetLeft;
    const y = event.clientY - canvas.offsetTop;

    ctx.beginPath();
    ctx.arc(x, y, size / 2, 0, 2 * Math.PI);
    ctx.fill();
    ctx.closePath();
  }

  function stopDrawing() {
    isDrawing = false;
  }
});

document.addEventListener("DOMContentLoaded", function() {
  const backLink = document.getElementById("backLink");

  // Add a click event listener to the back link
  backLink.addEventListener("click", function() {
    // Use the window.history object to navigate back
    window.history.back();
  });
});
