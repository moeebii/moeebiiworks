document.addEventListener('DOMContentLoaded', init);

const init = () => {
    gsap.registerPlugin(ScrollTrigger);
    var scrollElement = document.getElementById("scrollContainer");

    scrollElement.addEventListener('mouseover', function() {
        handleMouseOver(scrollElement);
    });

    scrollElement.addEventListener('mouseout', function() {
        handleMouseOut(scrollElement);
    });

    runLenis();
}

function handleMouseOver(element) {
    element.classList.add("paused");
};
  
function handleMouseOut(element) {
    element.classList.remove("paused");
};

var scrollElement = document.getElementById("scrollContainer");

const runLenis = () => {
    const lenis = new Lenis({
        infinite: true,
    });
    
    function raf(time) {
        lenis.raf(time);
        ScrollTrigger.update();
        requestAnimationFrame(raf);
    }

    const st = ScrollTrigger.create({
        animation: lenis,
        trigger: scrollElement,
        scroller: scrollElement,
        start: 'top top',
        end: 'bottom top',
    });
    
    requestAnimationFrame(raf);
}

function redirectToContactPage() {
    window.location.href = "https://moeebii.github.io/moeebiicontact/";
  }
  