const links = document.querySelectorAll('nav ul li a');

for (const link of links) {
  link.addEventListener('click', smoothScroll);
}

function smoothScroll(e) {
  e.preventDefault();

  const targetId = this.getAttribute('href');
  const targetPosition = document.querySelector(targetId).offsetTop;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  const duration = 1000;
  let start = null;

  window.requestAnimationFrame(step);

  function step(timestamp) {
    if (!start) start = timestamp;
    const progress = timestamp - start;
    window.scrollTo(0, easeInOutCubic(progress, startPosition, distance, duration));
    if (progress < duration) window.requestAnimationFrame(step);
  }
}

function easeInOutCubic(t, b, c, d) {
  t /= d / 2;
  if (t < 1) return c / 2 * t * t * t + b;
  t -= 2;
  return c / 2 * (t * t * t + 2) + b;
}

// Form submission
const form = document.querySelector('form');
form.addEventListener('submit', handleSubmit);

function handleSubmit(e) {
  e.preventDefault();
  
  const name = document.querySelector('input[type="text"]').value;
  const email = document.querySelector('input[type="email"]').value;
  const message = document.querySelector('textarea').value;
  
  // Perform validation and send the form data to the server
  // You can customize this part based on your requirements
  
  console.log('Name:', name);
  console.log('Email:', email);
  console.log('Message:', message);
  
  // Clear form fields
  form.reset();
}