/**
 * Firehills Landing Page - Animation Controller
 * Handles the sequencing of F logo and coming soon text animations
 */

(function() {
    'use strict';

    /**
     * Initialize animations when DOM is loaded
     */
    function initAnimations() {
        // Get elements
        const fLogo = document.getElementById('f-logo');
        const comingSoon = document.getElementById('coming-soon');

        // Check if elements exist
        if (!fLogo || !comingSoon) {
            console.error('Animation elements not found');
            return;
        }

        // Check for reduced motion preference
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        if (prefersReducedMotion) {
            // Skip animations and show everything immediately
            fLogo.style.opacity = '1';
            fLogo.style.transform = 'none';
            comingSoon.style.opacity = '1';
            comingSoon.style.transform = 'none';
            return;
        }

        // Start animation sequence
        startAnimationSequence(fLogo, comingSoon);
    }

    /**
     * Start the animation sequence
     * @param {HTMLElement} fLogo - F logo container element
     * @param {HTMLElement} comingSoon - Coming soon text container element
     */
    function startAnimationSequence(fLogo, comingSoon) {
        // Small delay before starting (allows page to settle)
        setTimeout(() => {
            // Animate F logo
            fLogo.classList.add('animate');

            // Animate coming soon text after F logo completes
            // Animation duration is 0.8s, so we add the class after that
            setTimeout(() => {
                comingSoon.classList.add('animate');
            }, 800); // Match fadeInLogo animation duration
        }, 100); // Small initial delay
    }

    /**
     * Optional: Add scroll-triggered animations for elements below the fold
     */
    function initScrollAnimations() {
        // Observer for elements that should animate on scroll
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        // Observe elements with .scroll-animate class
        const scrollElements = document.querySelectorAll('.scroll-animate');
        scrollElements.forEach(el => observer.observe(el));
    }

    /**
     * Initialize everything when DOM is ready
     */
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initAnimations);
    } else {
        initAnimations();
    }

    // Initialize scroll animations if needed
    // initScrollAnimations();

})();
