let currentSection = 0;
const sections = document.querySelectorAll('.section');
const numSections = sections.length;

let scrollThreshold = 200; // Adjust this value to control sensitivity
let accumulatedScroll = 0;

// Variables to handle touch events
let startY = 0;
let currentY = 0;

window.addEventListener('wheel', (event) => {
    accumulatedScroll += event.deltaY;
    
    if (Math.abs(accumulatedScroll) >= scrollThreshold) {
        if (accumulatedScroll > 0) {
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
        accumulatedScroll = 0; // Reset the accumulated scroll
        scrollToSection();
    }
});

window.addEventListener('touchstart', (event) => {
    startY = event.touches[0].clientY;
});

window.addEventListener('touchmove', (event) => {
    currentY = event.touches[0].clientY;
    accumulatedScroll += startY - currentY;
    startY = currentY;

    if (Math.abs(accumulatedScroll) >= scrollThreshold) {
        if (accumulatedScroll > 0) {
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
        accumulatedScroll = 0; // Reset the accumulated scroll
        scrollToSection();
    }
});

window.addEventListener('touchend', () => {
    accumulatedScroll = 0; // Reset the accumulated scroll when touch ends
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


