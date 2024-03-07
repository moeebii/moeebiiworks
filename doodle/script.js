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
  const context = canvas.getContext("2d");
  const container = document.body;

  let isDoodling = false;
  let lastX, lastY;

  container.addEventListener("mousedown", startDoodle);
  container.addEventListener("mousemove", draw);
  container.addEventListener("mouseup", stopDoodle);

  function startDoodle(event) {
    isDoodling = true;
    [lastX, lastY] = [event.clientX, event.clientY];
  }

  function draw(event) {
    if (!isDoodling) return;

    context.beginPath();
    context.moveTo(lastX, lastY);
    context.lineTo(event.clientX, event.clientY);
    context.strokeStyle = "#b70000";
    context.lineWidth = 5;
    context.lineCap = "round";
    context.stroke();

    [lastX, lastY] = [event.clientX, event.clientY];
  }

  function stopDoodle() {
    isDoodling = false;
  }
});
