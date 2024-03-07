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
  const container = document.body;

  container.addEventListener("mousemove", function(event) {
    createDoodle(event.clientX, event.clientY);
  });

  function createDoodle(x, y) {
    const circle = document.createElement("div");
    circle.className = "doodle-circle";
    container.appendChild(circle);

    const circleStyle = circle.style;

    const size = 100; // Adjust the size of circles

    circleStyle.width = `${size}px`;
    circleStyle.height = `${size}px`;

    circleStyle.left = `${x - size / 2}px`;
    circleStyle.top = `${y - size / 2}px`;

    setTimeout(() => {
      container.removeChild(circle);
    }, 5000); // Remove after 10 seconds
  }
});


