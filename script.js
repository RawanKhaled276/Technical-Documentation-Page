 // ── Hamburger menu toggle ──────────────────────────────────────
    const toggle   = document.getElementById('navToggle');
    const overlay  = document.getElementById('navOverlay');
    const navbar   = document.getElementById('navbar');
 
    function openNav() {
      navbar.classList.add('open');
      overlay.classList.add('visible');
      toggle.setAttribute('aria-expanded', 'true');
      toggle.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
    function closeNav() {
      navbar.classList.remove('open');
      overlay.classList.remove('visible');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.classList.remove('active');
      document.body.style.overflow = '';
    }
 
    toggle.addEventListener('click', () => {
      navbar.classList.contains('open') ? closeNav() : openNav();
    });
    overlay.addEventListener('click', closeNav);
 
    // Close nav when a link is clicked on mobile
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        if (window.innerWidth <= 900) closeNav();
      });
    });
 
    // ── Active section highlight via IntersectionObserver ─────────
    const sections = document.querySelectorAll('.main-section');
    const navLinks = document.querySelectorAll('.nav-link');
 
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          navLinks.forEach(link => {
            link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
          });
        }
      });
    }, { rootMargin: '-15% 0px -75% 0px', threshold: 0 });
 
    sections.forEach(sec => observer.observe(sec));