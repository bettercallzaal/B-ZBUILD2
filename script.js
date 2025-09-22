document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Contact form submission
    const contactForm = document.querySelector('.contact-form');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // You can add an AJAX call here to actually send the form data

        const formContent = contactForm.innerHTML;
        contactForm.innerHTML = '<h3>Thank you for your message!</h3>';

        // Optional: Restore the form after a few seconds
        setTimeout(() => {
            contactForm.innerHTML = formContent;
        }, 5000);
    });
});