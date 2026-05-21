/* ── Custom Animated Cursor ── */
const cursor = document.getElementById('cursor');
const ring = document.getElementById('cursorRing');

let mx = -100, my = -100;
let rx = -100, ry = -100;

document.addEventListener('mousemove', function (e) {
  mx = e.clientX;
  my = e.clientY;
});

(function animateCursor() {
  cursor.style.left = mx + 'px';
  cursor.style.top  = my + 'px';

  rx += (mx - rx) * 0.12;
  ry += (my - ry) * 0.12;
  ring.style.left = rx + 'px';
  ring.style.top  = ry + 'px';

  requestAnimationFrame(animateCursor);
})();

document.querySelectorAll('a, button').forEach(function (el) {
  el.addEventListener('mouseenter', function () {
    ring.style.transform = 'translate(-50%, -50%) scale(1.6)';
    ring.style.opacity   = '0.8';
  });
  el.addEventListener('mouseleave', function () {
    ring.style.transform = 'translate(-50%, -50%) scale(1)';
    ring.style.opacity   = '0.5';
  });
});


/* ── Scroll Reveal ── */
const reveals = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

reveals.forEach(function (el) {
  revealObserver.observe(el);
});


/* ── Active Nav Highlight on Scroll ── */
const sections = document.querySelectorAll('section[id]');
const navLinks  = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', function () {
  let current = '';

  sections.forEach(function (section) {
    if (window.scrollY >= section.offsetTop - 100) {
      current = section.id;
    }
  });

  navLinks.forEach(function (link) {
    if (link.getAttribute('href') === '#' + current) {
      link.style.color = 'var(--accent)';
    } else {
      link.style.color = '';
    }
  });
});
