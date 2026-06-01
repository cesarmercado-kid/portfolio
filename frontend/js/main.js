/* mobile nav toggle */
(function () {
  const toggle = document.getElementById('navToggle');
  const links  = document.getElementById('navLinks');
  if (!toggle || !links) return;

  toggle.addEventListener('click', () => {
    toggle.classList.toggle('open');
    links.classList.toggle('open');
  });

  links.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      toggle.classList.remove('open');
      links.classList.remove('open');
    });
  });
})();


/* navbar scroll effect */
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  const topMenu = document.querySelector(".top-menu");
  if (window.scrollY > window.innerHeight * 0.6) {
    navbar.classList.add("show");
    topMenu.classList.add("hide");
  } else {
    navbar.classList.remove("show");
    topMenu.classList.remove("hide");
  }
});



window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  const heroHeight = window.innerHeight;
  
  let progress = scrollY / heroHeight;
  
  progress = Math.min(Math.max(progress, 0), 1);
  document.body.style.setProperty("--bg-opacity", progress);

});


// typewriter effect
(function () {
  const words   = [
    'Databases',
    'Data Analyst', 
    'Storyteller', 
    'BI and Dashboards', 
    'Tech Enthusiast', 
    'Lifelong Learner', 
    'Problem Solver', 
    'Team Player', 
    'Creative Thinker'];
  const el      = document.getElementById('typed-word');
  const cursor  = document.querySelector('.cursor');
  if (!el) return;

  let wordIndex  = 0;
  let charIndex  = 0;
  let deleting   = false;
  let pause      = false;

  function type() {
    const current = words[wordIndex];

    if (!deleting) {
      // escribir
      el.textContent = current.slice(0, charIndex + 1);
      charIndex++;
      if (charIndex === current.length) {
        // pausa antes de borrar
        pause = true;
        setTimeout(() => { pause = false; deleting = true; requestAnimationFrame(loop); }, 1800);
        return;
      }
    } else {
      // borrar
      el.textContent = current.slice(0, charIndex - 1);
      charIndex--;
      if (charIndex === 0) {
        deleting = false;
        wordIndex = (wordIndex + 1) % words.length;
      }
    }
    requestAnimationFrame(loop);
  }

  function loop() {
    if (pause) return;
    const speed = deleting ? 60 : 110;
    setTimeout(type, speed);
  }

  loop();
})();