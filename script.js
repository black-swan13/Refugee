// script.js - Fixed navigation with proper slide management
document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('.slide');
  const counter = document.getElementById('counter');
  const dots = document.getElementById('dots');
  const prevBtn = document.getElementById('prev');
  const nextBtn = document.getElementById('next');
  const muteBtn = document.getElementById('mute-btn');
  const bgMusic = document.getElementById('bg-music');
  
  let currentSlide = 0;

  // Initialize dots
  function createDots() {
    dots.innerHTML = '';
    slides.forEach((_, i) => {
      const dot = document.createElement('div');
      dot.classList.add('dot');
      if (i === currentSlide) dot.classList.add('active');
      dot.addEventListener('click', () => goToSlide(i));
      dots.appendChild(dot);
    });
  }

  // Go to specific slide
  function goToSlide(index) {
    if (index < 0) index = 0;
    if (index >= slides.length) index = slides.length - 1;
    
    currentSlide = index;
    updateSlide();
    animateCurrentSlide();
  }

  // Update visible slide and UI
  function updateSlide() {
    slides.forEach((slide, i) => {
      slide.style.display = i === currentSlide ? 'block' : 'none';
    });
    counter.textContent = `${currentSlide + 1}/${slides.length}`;
    
    // Update dots
    document.querySelectorAll('.dot').forEach((dot, i) => {
      dot.classList.toggle('active', i === currentSlide);
    });
  }

  // Animations for current slide
  function animateCurrentSlide() {
    // Reset all animations first
    gsap.killTweensOf('.character');
    
    // 🟦 Slide 1 Animations
    if (currentSlide === 0) {
      gsap.from("#Slide-1-01", { opacity: 0, scale: 1.5, y: -50, rotation: -15, duration: 1, ease: 'back.out(1.7)' });
      gsap.from("#Slide-1-02", { y: 50, opacity: 0, rotation: 10, duration: 1.2, delay: 0.3, ease: 'elastic.out(1, 0.5)' });
      gsap.from("#Slide-1-03", { scale: 1.3, opacity: 0, x: 50, duration: 1.5, delay: 0.5, ease: 'power2.out' });
    }
    
    // 🟦 Slide 2 Animations
    else if (currentSlide === 1) {
      gsap.from("#Slide-2-01", { y: -100, opacity: 0, duration: 1 });
      gsap.from("#Slide-2-02", { x: -100, opacity: 0, duration: 1, delay: 0.5 });
      gsap.from("#Slide-2-03", { x: 100, opacity: 0, duration: 1, delay: 0.8 });
    }
    
    // 🟦 Slide 7 Special Animation (Sad Overlay)
    else if (currentSlide === 6) {
      const overlay = document.querySelector('.sad-overlay');
      gsap.to(overlay, { opacity: 1, duration: 2, delay: 0.5 });
    }
  }
function animateCurrentSlide() {
  // Reset all text animations first
  gsap.killTweensOf(".story-text");
  
  // Slide-specific animations
  if (currentSlide === 0) { // Slide 1
    gsap.to("#slide1 .story-text", { 
      opacity: 1, 
      y: 0, 
      duration: 1.5,
      delay: 0.8
    });
  }
  else if (currentSlide === 2) { // Slide 3
    gsap.to("#slide3 .story-text", {
      opacity: 1,
      y: 0,
      duration: 1,
      delay: 0.3
    });
    
    // Fire effect intensity pulse
    gsap.to(".fire-overlay", {
      opacity: 0.8,
      duration: 0.5,
      repeat: 3,
      yoyo: true
    });
  }
  gsap.set(".story-text", { opacity: 0, y: 20 });
  
  // Show current slide's text
  const currentText = document.querySelector(`#slide${currentSlide + 1} .story-text`);
  if (currentText) {
    gsap.to(currentText, {
      opacity: 1,
      y: 0,
      duration: 1,
      delay: 0.5
    });
}
  // Event Listeners
  prevBtn.addEventListener('click', () => goToSlide(currentSlide - 1));
  nextBtn.addEventListener('click', () => goToSlide(currentSlide + 1));
  
  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') goToSlide(currentSlide - 1);
    if (e.key === 'ArrowRight') goToSlide(currentSlide + 1);
  });

  // Music controls
  muteBtn.addEventListener('click', () => {
    bgMusic.muted = !bgMusic.muted;
    muteBtn.textContent = bgMusic.muted ? '🔇 Unmute' : '🔊 Mute';
  });

  // Auto-play music after first interaction
  document.body.addEventListener('click', function startMusic() {
    bgMusic.volume = 0.3;
    bgMusic.play().catch(e => console.log("Autoplay prevented:", e));
    document.body.removeEventListener('click', startMusic);
  }, { once: true });

  // Initialize
  createDots();
  updateSlide();
  animateCurrentSlide();
});


