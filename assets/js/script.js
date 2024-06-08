let currentSection = 0;
const sections = document.querySelectorAll('.section');
const numSections = sections.length;

window.addEventListener('wheel', (event) => {
    if (event.deltaY > 0) {
        // Scrolling down
        if (currentSection < numSections - 1) {
            currentSection++;
        }
    } else {
        // Scrolling up
        if (currentSection > 0) {
            currentSection--;
        }
    }
    scrollToSection();
});

function scrollToSection() {
    sections.forEach((section, index) => {
        if (index === currentSection) {
            section.classList.add('active');
        } else {
            section.classList.remove('active');
        }
    });
}

// Initialize by showing the home section
scrollToSection();

/////////////////////////////
document.addEventListener('DOMContentLoaded', () => {
            const logos = document.querySelectorAll('.logo');

            const observerOptions = {
                root: null, // Use the viewport as the container
                rootMargin: '0px',
                threshold: 0.1 // Trigger when at least 10% of the element is visible
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const logos = entry.target.querySelectorAll('.logo');
                        logos.forEach((logo, index) => {
                            setTimeout(() => {
                                logo.classList.add('show');
                            }, index * 1500); // 1500ms delay between each logo
                        });
                        observer.unobserve(entry.target); // Stop observing once the animation starts
                    }
                });
            }, observerOptions);

            const logosContainer = document.querySelector('.logos');
            observer.observe(logosContainer);
        });

////////////////////////////////////
document.querySelector('#contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    e.target.elements.name.value = '';
    e.target.elements.email.value = '';
    e.target.elements.message.value = '';
  });

////////////////////////////////////////


