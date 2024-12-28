const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);

let slideIndex = 0;

// Function to move the carousel
function moveCarousel() {
  slideIndex++;
  if (slideIndex >= slides.length) {
    slideIndex = 0; // Loop back to the start
  }

  const slideWidth = slides[0].getBoundingClientRect().width;
  track.style.transform = `translateX(-${slideWidth * slideIndex}px)`;
}

// Start auto-scrolling every 3 seconds
setInterval(moveCarousel, 3000);

