// JavaScript with animateCurrentSlide structure for all 13 slides

document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('.slide');
  const counter = document.getElementById('counter');
  const dots = document.getElementById('dots');
  let currentSlide = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.style.display = i === index ? 'block' : 'none';
    });
    counter.textContent = `${index + 1}/${slides.length}`;
    updateDots(index);
    animateCurrentSlide();
  }

  function updateDots(activeIndex) {
    dots.innerHTML = '';
    slides.forEach((_, i) => {
      const dot = document.createElement('div');
      dot.classList.add('dot');
      if (i === activeIndex) dot.classList.add('active');
      dots.appendChild(dot);
    });
  }

  // Animations for each slide
  function animateCurrentSlide() {
    // 🟦 Slide 1 **************************************
    if (currentSlide === 0) {
      gsap.from("#Slide-1-01", { opacity: 0, scale: 1.5, y: -50, rotation: -15, duration: 1, ease: 'back.out(1.7)' });
      gsap.from("#Slide-1-02", { y: 50, opacity: 0, rotation: 10, duration: 1.2, delay: 0.3, ease: 'elastic.out(1, 0.5)' });
      gsap.from("#Slide-1-03", { scale: 1.3, opacity: 0, x: 50, duration: 1.5, delay: 0.5, ease: 'power2.out' });
    }

    // 🟦 Slide 2 **************************************
    if (currentSlide === 1) {
      gsap.from("#Slide-2-01", { y: -100, opacity: 0, duration: 1 });
      gsap.from("#Slide-2-02", { x: -100, opacity: 0, duration: 1, delay: 0.5 });
      gsap.from("#Slide-2-03", { x: 100, opacity: 0, duration: 1, delay: 0.8 });
    }

    // 🟦 Slide 3 **************************************
    if (currentSlide === 2) {
      gsap.from("#Slide-3-01", { scale: 0.8, opacity: 0, duration: 1 });
      gsap.from("#Slide-3-02", { y: 50, opacity: 0, duration: 1, delay: 0.5 });
      gsap.from("#Slide-3-03", { opacity: 0, duration: 1, delay: 1 });
    }

    if (currentSlide === 3) {
      gsap.from("#Slide-4-01", { x: -100, opacity: 0, duration: 1 });
      gsap.from("#Slide-4-02", { x: 100, opacity: 0, duration: 1, delay: 0.3 });
      gsap.from("#Slide-4-03", { y: 50, opacity: 0, duration: 1, delay: 0.6 });
    }
    
  }

  document.getElementById('prev').addEventListener('click', () => {
    if (currentSlide > 0) currentSlide--;
    showSlide(currentSlide);
  });

  document.getElementById('next').addEventListener('click', () => {
    if (currentSlide < slides.length - 1) currentSlide++;
    showSlide(currentSlide);
  });

  // Music controls
  document.body.addEventListener('click', function startMusic() {
    const music = document.getElementById('bg-music');
    music.volume = 0.3;
    music.play();
    document.body.removeEventListener('click', startMusic);
  });

  document.getElementById('mute-btn').addEventListener('click', () => {
    const music = document.getElementById('bg-music');
    music.muted = !music.muted;
    document.getElementById('mute-btn').textContent = music.muted ? '🔇 Unmute' : '🔊 Mute';
  });
let currentSlide = 1;
const slides = document.querySelectorAll(".slide");
const totalSlides = slides.length;
const counter = document.getElementById("counter");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const dotsContainer = document.getElementById("dots");
const bgMusic = document.getElementById("bg-music");
const muteBtn = document.getElementById("mute-btn");

// Create dots
for (let i = 1; i <= totalSlides; i++) {
  const dot = document.createElement("div");
  dot.classList.add("dot");
  dot.addEventListener("click", () => goToSlide(i));
  dotsContainer.appendChild(dot);
}
updateUI();


function showSlide(slideNum) {
  slides.forEach((slide, i) => {
    if (i + 1 === slideNum) {
      slide.style.opacity = "1";
      slide.style.pointerEvents = "auto";
      slide.style.zIndex = "1";
    } else {
      slide.style.opacity = "0";
      slide.style.pointerEvents = "none";
      slide.style.zIndex = "0";
    }
  });

  const activeSlide = slides[slideNum - 1];
  const characters = activeSlide.querySelectorAll(".character");

  if (slideNum === 7) {
    gsap.fromTo(characters, { opacity: 0, y: 40 }, { opacity: 1, y: 0, stagger: 0.6, duration: 1.8, ease: "power1.out" });
    if (characters[1]) {
      gsap.to(characters[1], { y: 20, duration: 4, ease: "power1.inOut", repeat: -1, yoyo: true });
    }
    const overlay = activeSlide.querySelector(".sad-overlay");
    if (overlay) {
      gsap.to(overlay, { opacity: 1, duration: 2, delay: 0.5 });
    }
  } else {
    gsap.fromTo(characters, { opacity: 0, y: 50 }, { opacity: 1, y: 0, stagger: 0.2, duration: 1, ease: "power2.out" });
  }
}


function updateUI() {
  counter.textContent = `${currentSlide}/${totalSlides}`;
  document.querySelectorAll(".dot").forEach((dot, i) => {
    dot.classList.toggle("active", i + 1 === currentSlide);
  });
  showSlide(currentSlide);
}

function goToSlide(num) {
  if (num < 1) num = totalSlides;
  if (num > totalSlides) num = 1;
  currentSlide = num;
  updateUI();
}

prevBtn.addEventListener("click", () => goToSlide(currentSlide - 1));
nextBtn.addEventListener("click", () => goToSlide(currentSlide + 1));
document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") goToSlide(currentSlide + 1);
  if (e.key === "ArrowLeft") goToSlide(currentSlide - 1);
});

muteBtn.addEventListener("click", () => {
  bgMusic.muted = !bgMusic.muted;
  muteBtn.textContent = bgMusic.muted ? "🔇 Unmute" : "🔊 Mute";
});

bgMusic.volume = 0.5;
bgMusic.play().catch(() => {});

  // Initialize first slide
  showSlide(currentSlide);
});


