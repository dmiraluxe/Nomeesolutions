/**
 * DIVEXA GLOBAL - High-Performance Animation Engine v3.0
 * Developed for Enterprise 3D Web Interface
 * Powered by Nomee Solutions
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. CORE VARIABLES & STATE ---
    const header = document.querySelector('.main-header');
    const spheres = document.querySelectorAll('.gradient-sphere, .gradient-sphere-2');
    const cards = document.querySelectorAll('.vertical-card, .glass-morph');
    const heroTitle = document.querySelector('.mega-title');
    
    // --- 2. ADVANCED SCROLL ENGINE ---
    // Change navbar appearance on scroll for better readability
    const handleHeaderScroll = () => {
        if (window.scrollY > 40) {
            header.style.padding = '12px 0';
            header.style.background = 'rgba(5, 5, 5, 0.96)';
            header.style.backdropFilter = 'blur(30px)';
            header.style.borderBottom = '1px solid rgba(255, 157, 0, 0.3)';
            header.style.transition = 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)';
        } else {
            header.style.padding = '22px 0';
            header.style.background = 'rgba(5, 5, 5, 0.85)';
            header.style.borderBottom = '1px solid rgba(255, 255, 255, 0.1)';
        }
    };

    window.addEventListener('scroll', handleHeaderScroll);

    // --- 3. 3D PARALLAX MOUSE TRACKING ---
    // Background spheres follow mouse movement for depth effect
    document.addEventListener('mousemove', (e) => {
        const mouseX = (e.clientX / window.innerWidth - 0.5) * 40;
        const mouseY = (e.clientY / window.innerHeight - 0.5) * 40;

        spheres.forEach((sphere, index) => {
            const factor = (index + 1) * 0.8;
            sphere.style.transform = `translate(${mouseX * factor}px, ${mouseY * factor}px)`;
            sphere.style.transition = 'transform 0.2s ease-out';
        });
    });

    // --- 4. INTERSECTION OBSERVER (REVEAL ON SCROLL) ---
    // Elements fade and slide up as they enter the viewport
    const revealOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealOnScroll = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0) scale(1)';
                entry.target.style.filter = 'blur(0)';
            }
        });
    }, revealOptions);

    const animatedElements = [...cards, heroTitle, ...document.querySelectorAll('.v-icon')];
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(60px) scale(0.95)';
        el.style.filter = 'blur(10px)';
        el.style.transition = 'all 1.2s cubic-bezier(0.16, 1, 0.3, 1)';
        revealOnScroll.observe(el);
    });

    // --- 5. MAGNETIC BUTTON EFFECT ---
    // Buttons pull slightly towards the cursor for premium feel
    const magneticBtns = document.querySelectorAll('.btn-primary-3d, .btn-secondary-glow');
    
    magneticBtns.forEach(btn => {
        btn.addEventListener('mousemove', (e) => {
            const position = btn.getBoundingClientRect();
            const x = e.pageX - position.left - position.width / 2;
            const y = e.pageY - position.top - position.height / 2;
            
            btn.style.transform = `translate(${x * 0.3}px, ${y * 0.5}px)`;
        });
        
        btn.addEventListener('mouseout', () => {
            btn.style.transform = 'translate(0px, 0px)';
        });
    });

    // --- 6. SMOOTH ANCHOR NAVIGATION ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // --- 7. DYNAMIC LIVE COUNTER (For Trust Signals) ---
    // Simulates live onboarding/processing data
    const createLivePing = () => {
        const pingDot = document.querySelector('.ping-dot');
        if (pingDot) {
            setInterval(() => {
                pingDot.style.boxShadow = '0 0 20px #28a745';
                setTimeout(() => {
                    pingDot.style.boxShadow = '0 0 5px #28a745';
                }, 1000);
            }, 3000);
        }
    };
    createLivePing();

    // --- 8. PRE-LOADER SEQUENCE ---
    window.addEventListener('load', () => {
        console.log("%c DIVEXA GLOBAL: System Secure & Operational ", "background: #ff9d00; color: #000; font-weight: bold; padding: 5px;");
        
        // Final sanity check for GitHub Deployments
        if (document.querySelector('.visual-engine')) {
            console.log("3D Visual Engine: ACTIVE");
        }
    });
});
