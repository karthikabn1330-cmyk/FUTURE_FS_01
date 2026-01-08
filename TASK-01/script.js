document.addEventListener('DOMContentLoaded', () => {
    // Mobile Navigation Toggle
    const menuToggle = document.getElementById('mobile-menu');
    const navList = document.querySelector('.nav-list');
    const body = document.body;

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navList.classList.toggle('active');
            // Animate hamburger (optional)

            // Prevent scrolling when menu is open
            if (navList.classList.contains('active')) {
                body.style.overflow = 'hidden';
            } else {
                body.style.overflow = 'auto';
            }
        });
    }

    // Close mobile menu when a link is clicked
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navList.classList.remove('active');
            body.style.overflow = 'auto';
        });
    });

    // Smooth Scrolling for Anchor Links (with offset due to fixed header)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });

    // Navbar Scroll Effect (Hide/Show or Shadow)
    let lastScrollY = window.scrollY;
    const header = document.querySelector('.header');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 10px 30px -10px rgba(2, 12, 27, 0.7)';
        } else {
            header.style.boxShadow = 'none';
        }
        lastScrollY = window.scrollY;
    });

    // Form Submission Handler (Formspree)
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            const btn = contactForm.querySelector('button');
            const originalText = btn.innerText;

            // Loading state
            btn.innerText = 'Sending...';
            btn.disabled = true;

            const formData = new FormData(contactForm);

            try {
                const response = await fetch(contactForm.action, {
                    method: 'POST',
                    body: formData,
                    headers: {
                        'Accept': 'application/json'
                    }
                });

                if (response.ok) {
                    // Success state
                    btn.innerText = 'Message Sent!';
                    btn.style.backgroundColor = 'var(--text-primary)';
                    btn.style.color = 'var(--bg-color)';
                    contactForm.reset();

                    setTimeout(() => {
                        btn.innerText = originalText;
                        btn.removeAttribute('style');
                        btn.disabled = false;
                    }, 5000);
                } else {
                    // Fallback for 400/403 (Activation needed) or other server errors
                    throw new Error('Server returned ' + response.status);
                }
            } catch (error) {
                console.error('Submission Error:', error);

                // Fallback: Submit natively to allow redirect/activation
                btn.innerText = 'Redirecting...';

                // Allow a brief moment for the user to see "Redirecting..."
                setTimeout(() => {
                    contactForm.submit();
                }, 1000);
            }
        });
    }

    // Reveal on Scroll Animation (Simple Intersection Observer)
    const observerOptions = {
        threshold: 0.2, // Trigger when 20% of element is visible
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Select elements to animate
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.opacity = "0";
        section.style.transform = "translateY(20px)";
        section.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out";
        observer.observe(section);
    });
    // Image Modal Functionality
    const modal = document.getElementById("image-modal");
    const modalImg = document.getElementById("modal-img");
    const captionText = document.getElementById("caption");
    const closeBtn = document.getElementsByClassName("close")[0];

    if (modal) {
        // Get all project titles
        const projectTitles = document.querySelectorAll('.project-title');

        projectTitles.forEach(title => {
            title.addEventListener('click', function () {
                const card = this.closest('.project-card');
                const img = card.querySelector('.project-image img');

                if (img) {
                    modal.style.display = "block";
                    modalImg.src = img.src;
                    captionText.innerHTML = this.innerHTML; // Set caption to project title
                }
            });
        });

        // Close modal when X is clicked
        if (closeBtn) {
            closeBtn.onclick = function () {
                modal.style.display = "none";
            }
        }

        // Close modal when clicking outside the image
        window.onclick = function (event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
    }
});
