document.addEventListener("DOMContentLoaded", function() {
  const text = "congrats! you found me! doodle here ☻:";
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
  let lastX = 0;
  let lastY = 0;

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  canvas.addEventListener("mousedown", startDrawing);
  canvas.addEventListener("mousemove", draw);
  canvas.addEventListener("mouseup", stopDrawing);
  canvas.addEventListener("mouseleave", stopDrawing);
  canvas.addEventListener("touchstart", startDrawing); // for touch devices
  canvas.addEventListener("touchmove", draw); // for touch devices
  canvas.addEventListener("touchend", stopDrawing); // for touch devices
  canvas.addEventListener("touchcancel", stopDrawing); // for touch devices

  // Set the drawing color to #b70000
  ctx.strokeStyle = "#b70000";
  ctx.lineWidth = 15; // Set the line width

  function startDrawing(event) {
    isDrawing = true;
    const { clientX, clientY } = event.touches ? event.touches[0] : event;
    lastX = clientX - canvas.offsetLeft;
    lastY = clientY - canvas.offsetTop;
    draw(event); // Draw the initial point
  }

  function draw(event) {
    if (!isDrawing) return;

    const { clientX, clientY } = event.touches ? event.touches[0] : event;
    const x = clientX - canvas.offsetLeft;
    const y = clientY - canvas.offsetTop;

    ctx.beginPath();
    ctx.moveTo(lastX, lastY); // Move to the last position
    ctx.lineTo(x, y); // Draw a line to the new position
    ctx.stroke();
    ctx.lineCap = "round"; // Set line ends to be round
    ctx.closePath();

    // Update the last position
    lastX = x;
    lastY = y;
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
