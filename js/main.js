/**
 * Firehills Landing Page - Main JavaScript
 * Handles email form submission with mailto functionality
 */

(function() {
    'use strict';

    // Configuration
    const CONFIG = {
        email: 'rob@firehills.io',
        subject: 'Furze Launch Notification Request',
        bodyTemplate: 'Please add me to the Furze launch notification list.\n\nMy email: '
    };

    /**
     * Initialize the application
     */
    function init() {
        // Setup email form (disabled - now using HubSpot form)
        // setupEmailForm();

        // Setup smooth scrolling
        setupSmoothScroll();

        // Setup tagline placeholder editing (optional - for development)
        setupTaglinePlaceholder();
    }

    /**
     * Setup email form submission with mailto functionality
     */
    function setupEmailForm() {
        const form = document.getElementById('emailForm');
        const emailInput = document.getElementById('emailInput');
        const formMessage = document.getElementById('formMessage');

        if (!form || !emailInput || !formMessage) {
            console.error('Form elements not found');
            return;
        }

        form.addEventListener('submit', function(e) {
            e.preventDefault();

            // Clear previous messages
            formMessage.textContent = '';
            formMessage.className = 'form-message';

            // Get email value
            const email = emailInput.value.trim();

            // Validate email
            if (!isValidEmail(email)) {
                showMessage(formMessage, 'Please enter a valid email address', 'error');
                emailInput.focus();
                return;
            }

            // Create mailto link
            const mailtoLink = createMailtoLink(email);

            // Try to open mailto link
            try {
                window.location.href = mailtoLink;

                // Show success message
                showMessage(
                    formMessage,
                    'Your email client should open, please drop us a note to express your interest.',
                    'success'
                );

                // Clear the input after a delay
                setTimeout(() => {
                    emailInput.value = '';
                }, 2000);
            } catch (error) {
                showMessage(
                    formMessage,
                    'Unable to open email client. Please email us directly at ' + CONFIG.email,
                    'error'
                );
                console.error('Mailto error:', error);
            }
        });

        // Clear error message on input
        emailInput.addEventListener('input', function() {
            if (formMessage.classList.contains('error')) {
                formMessage.textContent = '';
                formMessage.className = 'form-message';
            }
        });
    }

    /**
     * Validate email address format
     * @param {string} email - Email address to validate
     * @returns {boolean} - True if valid, false otherwise
     */
    function isValidEmail(email) {
        // RFC 5322 compliant email regex (simplified)
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    /**
     * Create mailto link with pre-filled subject and body
     * @param {string} userEmail - User's email address
     * @returns {string} - Complete mailto URL
     */
    function createMailtoLink(userEmail) {
        const subject = encodeURIComponent(CONFIG.subject);
        const body = encodeURIComponent(CONFIG.bodyTemplate + userEmail);

        return `mailto:${CONFIG.email}?subject=${subject}&body=${body}`;
    }

    /**
     * Show message to user
     * @param {HTMLElement} element - Message element
     * @param {string} message - Message text
     * @param {string} type - Message type ('success' or 'error')
     */
    function showMessage(element, message, type) {
        element.textContent = message;
        element.className = `form-message ${type}`;
    }

    /**
     * Setup smooth scrolling for anchor links
     */
    function setupSmoothScroll() {
        const links = document.querySelectorAll('a[href^="#"]');

        links.forEach(link => {
            link.addEventListener('click', function(e) {
                const targetId = this.getAttribute('href');

                // Skip if it's just "#"
                if (targetId === '#') {
                    e.preventDefault();
                    return;
                }

                const target = document.querySelector(targetId);

                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }

    /**
     * Setup tagline placeholder - makes it easy to update during development
     * This is optional and can be removed in production
     */
    function setupTaglinePlaceholder() {
        const tagline = document.getElementById('tagline-placeholder');

        if (!tagline) return;

        // Optional: Make tagline editable in development
        // Uncomment the following to enable click-to-edit functionality
        /*
        tagline.addEventListener('click', function() {
            const currentText = this.textContent;
            const newText = prompt('Enter new tagline:', currentText);

            if (newText && newText.trim()) {
                this.textContent = newText.trim();
                // Could save to localStorage here if desired
                localStorage.setItem('tagline', newText.trim());
            }
        });

        // Load saved tagline from localStorage
        const savedTagline = localStorage.getItem('tagline');
        if (savedTagline) {
            tagline.textContent = savedTagline;
        }
        */
    }

    /**
     * Handle keyboard accessibility
     */
    function setupKeyboardAccessibility() {
        // Ensure all interactive elements are keyboard accessible
        const interactiveElements = document.querySelectorAll('button, a, input, select, textarea');

        interactiveElements.forEach(element => {
            // Add keyboard focus styles
            element.addEventListener('keydown', function(e) {
                if (e.key === 'Enter' || e.key === ' ') {
                    if (element.tagName === 'A' || element.tagName === 'BUTTON') {
                        // Already handled by browser
                    }
                }
            });
        });
    }

    /**
     * Optional: Track analytics (placeholder for future implementation)
     */
    function trackEvent(eventName, eventData) {
        // Placeholder for analytics tracking
        // Example: Google Analytics, Mixpanel, etc.
        console.log('Event tracked:', eventName, eventData);
    }

    /**
     * Initialize when DOM is ready
     */
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    // Setup keyboard accessibility
    setupKeyboardAccessibility();

})();
