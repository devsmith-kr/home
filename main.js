// DevSmith — 코드를 벼리는 대장장이
// GitHub Pages static site scripts

(function () {
    'use strict';

    const nav = document.querySelector('.nav');
    const toggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    // Nav background on scroll
    window.addEventListener('scroll', function () {
        nav.classList.toggle('scrolled', window.scrollY > 50);
    });

    // Mobile menu toggle
    if (toggle) {
        toggle.addEventListener('click', function () {
            navLinks.classList.toggle('open');
            toggle.classList.toggle('active');
        });
    }

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
        anchor.addEventListener('click', function (e) {
            var href = this.getAttribute('href');
            if (href === '#') {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            } else {
                var target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }
            // Close mobile menu after click
            navLinks.classList.remove('open');
            toggle.classList.remove('active');
        });
    });
})();