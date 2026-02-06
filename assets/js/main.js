/* ============================================
   BizHan Landing Page — Main JavaScript
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
    // ============ NAVBAR SCROLL EFFECT ============
    const navbar = document.getElementById('navbar');
    const backToTop = document.getElementById('backToTop');

    const handleScroll = () => {
        const scrollY = window.scrollY;

        // Navbar background
        if (scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Back to top button
        if (scrollY > 500) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }

        // Active nav link based on section
        updateActiveNavLink();
    };

    window.addEventListener('scroll', handleScroll);

    // ============ MOBILE NAV TOGGLE ============
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.getElementById('navLinks');

    navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('active');
        navLinks.classList.toggle('open');
        document.body.style.overflow = navLinks.classList.contains('open') ? 'hidden' : '';
    });

    // Close mobile nav on link click
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navToggle.classList.remove('active');
            navLinks.classList.remove('open');
            document.body.style.overflow = '';
        });
    });

    // ============ ACTIVE NAV LINK ============
    function updateActiveNavLink() {
        const sections = document.querySelectorAll('section[id]');
        const scrollPos = window.scrollY + 150;

        sections.forEach(section => {
            const top = section.offsetTop;
            const height = section.offsetHeight;
            const id = section.getAttribute('id');
            const link = document.querySelector(`.navbar__links a[href="#${id}"]`);

            if (link && !link.classList.contains('btn')) {
                if (scrollPos >= top && scrollPos < top + height) {
                    document.querySelectorAll('.navbar__links a:not(.btn)').forEach(a => a.classList.remove('active'));
                    link.classList.add('active');
                }
            }
        });
    }

    // ============ SMOOTH SCROLL ============
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offset = 80;
                const top = target.offsetTop - offset;
                window.scrollTo({
                    top: top,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ============ BACK TO TOP ============
    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // ============ SCROLL REVEAL ANIMATION ============
    const revealElements = document.querySelectorAll('.reveal');

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('revealed');
                }, index * 100);
                revealObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));

    // ============ COUNTER ANIMATION ============
    const counterElements = document.querySelectorAll('[data-count]');

    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                counterObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    counterElements.forEach(el => counterObserver.observe(el));

    function animateCounter(el) {
        const target = parseInt(el.getAttribute('data-count'));
        const duration = 2000;
        const startTime = performance.now();

        function update(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // Easing function
            const easeOut = 1 - Math.pow(1 - progress, 3);
            const current = Math.floor(easeOut * target);

            el.textContent = current.toLocaleString();

            if (progress < 1) {
                requestAnimationFrame(update);
            }
        }

        requestAnimationFrame(update);
    }

    // ============ FAQ ACCORDION ============
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-item__question');

        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');

            // Close all
            faqItems.forEach(faq => faq.classList.remove('active'));

            // Open clicked if it wasn't active
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });

    // ============ WAITLIST FORM ============
    const waitlistForm = document.getElementById('waitlistForm');
    const waitlistSuccess = document.getElementById('waitlistSuccess');
    const luckyCodeEl = document.getElementById('luckyCode');

    if (waitlistForm) {
        waitlistForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // Generate lucky code
            const randomPart = Math.random().toString(36).substring(2, 6).toUpperCase();
            const code = `LIXI-8386-${randomPart}`;

            // Show success
            waitlistForm.style.display = 'none';
            waitlistSuccess.style.display = 'block';
            luckyCodeEl.textContent = code;

            // Update urgency counter
            const urgencyCount = document.getElementById('urgencyCount');
            const currentCount = parseInt(urgencyCount.textContent.replace(/,/g, ''));
            const newCount = currentCount + 1;
            urgencyCount.textContent = newCount.toLocaleString();

            // Update progress bar
            const urgencyFill = document.getElementById('urgencyFill');
            const percentage = (newCount / 8386) * 100;
            urgencyFill.style.width = `${percentage}%`;

            // Trigger confetti
            createConfetti();

            // Scroll to success
            waitlistSuccess.scrollIntoView({ behavior: 'smooth', block: 'center' });
        });
    }

    // ============ CONFETTI EFFECT ============
    function createConfetti() {
        const colors = ['#DC2626', '#F59E0B', '#FFD700', '#22C55E', '#EF4444'];
        const container = document.body;

        for (let i = 0; i < 50; i++) {
            const confetti = document.createElement('div');
            confetti.style.cssText = `
                position: fixed;
                top: -10px;
                left: ${Math.random() * 100}%;
                width: ${Math.random() * 10 + 5}px;
                height: ${Math.random() * 10 + 5}px;
                background: ${colors[Math.floor(Math.random() * colors.length)]};
                border-radius: ${Math.random() > 0.5 ? '50%' : '0'};
                z-index: 9999;
                pointer-events: none;
                animation: confettiFall ${Math.random() * 3 + 2}s ease-out forwards;
                animation-delay: ${Math.random() * 0.5}s;
            `;
            container.appendChild(confetti);

            setTimeout(() => confetti.remove(), 5000);
        }
    }

    // Add confetti keyframes
    const confettiStyle = document.createElement('style');
    confettiStyle.textContent = `
        @keyframes confettiFall {
            0% { 
                transform: translateY(0) rotate(0deg); 
                opacity: 1; 
            }
            100% { 
                transform: translateY(100vh) rotate(${Math.random() * 720}deg); 
                opacity: 0; 
            }
        }
    `;
    document.head.appendChild(confettiStyle);

    // ============ HERO PARTICLES ============
    function createParticles() {
        const container = document.getElementById('particles');
        if (!container) return;

        const particleCount = 30;

        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.classList.add('particle');

            const size = Math.random() * 4 + 2;
            const x = Math.random() * 100;
            const delay = Math.random() * 6;
            const duration = Math.random() * 4 + 4;
            const opacity = Math.random() * 0.5 + 0.1;

            const colors = ['#DC2626', '#F59E0B', '#FFD700', '#FCA5A5'];
            const color = colors[Math.floor(Math.random() * colors.length)];

            particle.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                background: ${color};
                left: ${x}%;
                bottom: -20px;
                border-radius: 50%;
                opacity: 0;
                animation: particleFloat ${duration}s ease-in-out ${delay}s infinite;
            `;

            container.appendChild(particle);
        }
    }

    createParticles();

    // ============ URGENCY COUNTER UPDATE ============
    // Simulates live registration updates
    function updateUrgency() {
        const urgencyCount = document.getElementById('urgencyCount');
        if (!urgencyCount) return;

        setInterval(() => {
            const current = parseInt(urgencyCount.textContent.replace(/,/g, ''));
            if (current < 8386) {
                const increment = Math.random() > 0.7 ? 1 : 0;
                if (increment) {
                    const newCount = current + 1;
                    urgencyCount.textContent = newCount.toLocaleString();

                    const urgencyFill = document.getElementById('urgencyFill');
                    if (urgencyFill) {
                        urgencyFill.style.width = `${(newCount / 8386) * 100}%`;
                    }
                }
            }
        }, 15000 + Math.random() * 30000);
    }

    updateUrgency();

    // ============ HANZI CHARACTER ANIMATION ============
    const hanziChars = document.querySelectorAll('.hanzi-char');
    hanziChars.forEach(char => {
        char.addEventListener('mouseenter', () => {
            char.style.transform = 'scale(1.15) translateY(-5px)';
        });
        char.addEventListener('mouseleave', () => {
            char.style.transform = '';
        });
    });

    // ============ TYPING EFFECT FOR HERO ============
    // Optional: adds a subtle typing cursor to the hero subtitle
    const heroSubtitle = document.querySelector('.hero__subtitle');
    if (heroSubtitle) {
        heroSubtitle.style.borderRight = 'none';
    }

    // ============ PARALLAX ON HERO ============
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        const heroGradient = document.querySelector('.hero__gradient');
        if (heroGradient && scrollY < window.innerHeight) {
            heroGradient.style.transform = `translateY(${scrollY * 0.3}px)`;
        }
    });

    // ============ FORM VALIDATION VISUAL FEEDBACK ============
    document.querySelectorAll('.form__group input, .form__group select').forEach(input => {
        input.addEventListener('blur', function () {
            if (this.value && this.checkValidity()) {
                this.style.borderColor = '#22C55E';
            } else if (this.value && !this.checkValidity()) {
                this.style.borderColor = '#DC2626';
            } else {
                this.style.borderColor = '';
            }
        });

        input.addEventListener('focus', function () {
            this.style.borderColor = '';
        });
    });
});
