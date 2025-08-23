<script>
document.addEventListener("DOMContentLoaded", () => {
  /** --------------------
   * HERO Section
   --------------------- */
  const hero = document.querySelector('.hero-content');
  if (hero) hero.classList.add('animate');

  // Typed text animation
  const typedSpan = document.querySelector('.typed');
  if (typedSpan) {
    const words = ["Creative.", "Innovative.", "Tech-Driven."];
    let i = 0, j = 0, isDeleting = false;

    function type() {
      const currentWord = words[i];
      if (isDeleting) {
        typedSpan.textContent = currentWord.substring(0, j--);
        if (j < 0) { isDeleting = false; i = (i+1) % words.length; }
      } else {
        typedSpan.textContent = currentWord.substring(0, j++);
        if (j > currentWord.length) { isDeleting = true; j = currentWord.length; }
      }
      setTimeout(type, isDeleting ? 50 : 150);
    }
    type();
  }

  /** --------------------
   * UNIVERSAL SCROLL OBSERVER
   * Works for About Us, Services, and any fade-in element
   --------------------- */
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("scroll-animate");
        obs.unobserved(entry.target); // run once
      }
    });
  }, { threshold: 0.2 });

  // Elements to animate
  const scrollElements = document.querySelectorAll(
    ".fade-in, .about-text, .about-image, .service-box"
  );
  scrollElements.forEach(el => observer.observe(el));

  /** --------------------
   * NAVBAR Smooth Scroll
   --------------------- */
  const navLinks = document.querySelectorAll('.navbar a');
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop - 50,
          behavior: 'smooth'
        });
      }
    });
  });




  /** --------------------
   * GALLERY Slideshow
   --------------------- */
  let slideIndex = 0;
  function showSlides() {
    let slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) slides[i].style.display = "none";
    slideIndex++;
    if (slideIndex > slides.length) slideIndex = 1;
    if (slides[slideIndex-1]) slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 3000); // 3s
  }
  showSlides();
});
</script>

document.addEventListener("DOMContentLoaded", () => {
  const serviceBoxes = document.querySelectorAll(".service-box");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("scroll-animate");
        observer.unobserve(entry.target); // animate once
      }
    });
  }, { threshold: 0.2 });

  serviceBoxes.forEach(box => observer.observe(box));
});


<script>
<script>
<script>
let currentSlide = 0;

function moveToSlide(slideIndex, totalSlides, visibleSlides) {
  const track = document.querySelector(".gallery-track");
  const dots = document.querySelectorAll(".dot");

  // Shift by groups (100% per group of 3)
  const shift = slideIndex * 100;
  track.style.transform = `translateX(-${shift}%)`;

  // Update dots
  dots.forEach(dot => dot.classList.remove("active"));
  if (dots[slideIndex]) dots[slideIndex].classList.add("active");
}

function initGallery() {
  const slides = document.querySelectorAll(".gallery-track img");
  const visibleSlides = 3;
  const totalGroups = Math.ceil(slides.length / visibleSlides);

  const dotsContainer = document.querySelector(".gallery-dots");
  dotsContainer.innerHTML = "";

  for (let i = 0; i < totalGroups; i++) {
    const dot = document.createElement("span");
    dot.classList.add("dot");
    dot.addEventListener("click", () => {
      currentSlide = i;
      moveToSlide(currentSlide, slides.length, visibleSlides);
    });
    dotsContainer.appendChild(dot);
  }

  moveToSlide(currentSlide, slides.length, visibleSlides);
}

function nextSlide() {
  const slides = document.querySelectorAll(".gallery-track img");
  const visibleSlides = 3;
  const totalGroups = Math.ceil(slides.length / visibleSlides);

  if (currentSlide < totalGroups - 1) {
    currentSlide++;
  } else {
    currentSlide = 0;
  }
  moveToSlide(currentSlide, slides.length, visibleSlides);
}

function prevSlide() {
  const slides = document.querySelectorAll(".gallery-track img");
  const visibleSlides = 3;
  const totalGroups = Math.ceil(slides.length / visibleSlides);

  if (currentSlide > 0) {
    currentSlide--;
  } else {
    currentSlide = totalGroups - 1;
  }
  moveToSlide(currentSlide, slides.length, visibleSlides);
}

document.addEventListener("DOMContentLoaded", initGallery);
</script>
