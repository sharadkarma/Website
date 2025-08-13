// Dark/Light mode toggle
const themeButton = document.getElementById('theme-button');
const body = document.body;
themeButton.addEventListener('click', () => {
  body.classList.toggle('dark');
  body.classList.toggle('light');
  themeButton.textContent = body.classList.contains('dark') ? '🌙' : '☀️';
});

// Initialize AOS
AOS.init({ duration: 1000 });

// Initialize Vanilla Tilt
VanillaTilt.init(document.querySelectorAll(".project-card"), { max: 15, speed: 400, glare: true, "max-glare": 0.4 });

// Particles.js
particlesJS("particles-js", {
  "particles": {
    "number": { "value": 70, "density": { "enable": true, "value_area": 800 } },
    "color": { "value": "#ffffff" },
    "shape": { "type": "circle" },
    "opacity": { "value": 0.5 },
    "size": { "value": 3 },
    "line_linked": { "enable": true, "distance": 150, "color": "#ffffff", "opacity": 0.4, "width": 1 },
    "move": { "enable": true, "speed": 4 }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": { "onhover": {"enable": true,"mode": "repulse"}, "onclick": {"enable": true,"mode": "push"}, "resize": true },
    "modes": { "repulse": {"distance": 100,"duration": 0.4}, "push": {"particles_nb": 4} }
  },
  "retina_detect": true
});
