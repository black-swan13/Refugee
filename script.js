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

  // Initialize first slide
  showSlide(currentSlide);
});
