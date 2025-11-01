/* ==================== PRELOADER ==================== */
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    setTimeout(() => {
        preloader.classList.add('hidden');
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 500);
    }, 1000);
});

/* ==================== CURSOR EFFECT ==================== */
const cursor = document.getElementById('cursor');
const cursorFollower = document.getElementById('cursorFollower');

if (window.innerWidth > 768) {
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
        
        setTimeout(() => {
            cursorFollower.style.left = e.clientX - 20 + 'px';
            cursorFollower.style.top = e.clientY - 20 + 'px';
        }, 100);
    });

    const hoverElements = document.querySelectorAll('a, button, .service-card, .certificate-card');
    hoverElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.classList.add('hover');
            cursorFollower.classList.add('hover');
        });
        el.addEventListener('mouseleave', () => {
            cursor.classList.remove('hover');
            cursorFollower.classList.remove('hover');
        });
    });
} else {
    cursor.style.display = 'none';
    cursorFollower.style.display = 'none';
}

/* ==================== HEADER SCROLL EFFECT ==================== */
const header = document.getElementById('header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

/* ==================== MOBILE MENU ==================== */
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('active');
    mobileMenu.classList.toggle('active');
    document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
});

mobileNavLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuBtn.classList.remove('active');
        mobileMenu.classList.remove('active');
        document.body.style.overflow = '';
    });
});

/* ==================== SCROLL REVEAL ANIMATIONS ==================== */
if (typeof ScrollReveal !== 'undefined') {
    ScrollReveal().reveal('.section-header', {
        distance: '100px',
        duration: 1500,
        origin: 'top',
        easing: 'cubic-bezier(0.68, -0.55, 0.27, 1.55)'
    });

    ScrollReveal().reveal('.about-image-wrapper', {
        distance: '100px',
        duration: 1500,
        origin: 'left',
        delay: 200
    });

    ScrollReveal().reveal('.about-text-wrapper', {
        distance: '100px',
        duration: 1500,
        origin: 'right',
        delay: 400
    });

    ScrollReveal().reveal('.service-card', {
        distance: '100px',
        duration: 1500,
        origin: 'bottom',
        interval: 200
    });

    ScrollReveal().reveal('.certificate-card', {
        distance: '100px',
        duration: 1500,
        origin: 'left',
        interval: 300
    });
}

/* ==================== PARALLAX EFFECTS ==================== */
if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);

    // Hero Parallax Layers
    const parallaxLayers = document.querySelectorAll('.parallax-layer');
    parallaxLayers.forEach((layer, index) => {
        const speed = layer.getAttribute('data-speed') || 0.5;
        gsap.to(layer, {
            yPercent: 50 * (1 - speed),
            ease: 'none',
            scrollTrigger: {
                trigger: '.hero',
                start: 'top top',
                end: 'bottom top',
                scrub: true
            }
        });
    });

    // Hero Image Parallax
    const heroImage = document.querySelector('.hero-image-wrapper');
    if (heroImage) {
        gsap.to(heroImage, {
            y: -100,
            ease: 'none',
            scrollTrigger: {
                trigger: '.hero',
                start: 'top top',
                end: 'bottom top',
                scrub: true
            }
        });
    }

    // Section Number Animation
    gsap.utils.toArray('.section-number').forEach(number => {
        gsap.to(number, {
            scrollTrigger: {
                trigger: number.parentElement,
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            },
            scale: 1.2,
            duration: 1,
            ease: 'power2.out'
        });
    });
}

/* ==================== TYPED JS ==================== */
if (typeof Typed !== 'undefined') {
    const typed = new Typed('.multiple-text', {
        strings: ['Security Consultant', 'Cyber Security Expert', 'IT-Sicherheitsspezialist'],
        typeSpeed: 80,
        backSpeed: 50,
        backDelay: 2000,
        loop: true,
        showCursor: true,
        cursorChar: '|'
    });
}

/* ==================== RSS TEXT SCROLL ==================== */
const rssText = document.getElementById('rss-text');
if (rssText) {
    const originalText = rssText.textContent;
    rssText.textContent = originalText + ' ' + originalText + ' ' + originalText;
}

/* ==================== NAVIGATION ACTIVE STATE ==================== */
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');

function updateActiveNav() {
    let current = '';
    const scrollPosition = window.pageYOffset + 200;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            current = sectionId;
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

window.addEventListener('scroll', updateActiveNav);
window.addEventListener('load', updateActiveNav);

/* ==================== SMOOTH SCROLL ==================== */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 150;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

/* ==================== TRANSLATIONS ==================== */
const translations = {
    de: {
        logo: "Portfolio von Albert Dygov",
        nav_home: "Start",
        nav_about: "Über mich",
        nav_services: "Fähigkeiten",
        nav_portfolio: "Zertifikate",
        nav_contact: "Kontakt",

        home_welcome: "Willkommen",
        home_name: "Ich bin Albert D.",
        home_iam: "Und ich bin",
        home_text: "Motiviert in allem, was ich tue – mit Leidenschaft für Informationssicherheit.",
        home_cv: "Lebenslauf herunterladen",

        about_heading: "Über <span class='highlight'>Mich</span>",
        about_sub: "Cyber Security!",
        about_text: "Schon in jungen Jahren hat mich die Welt der Informatik begeistert. Mit 16 begann ich, in meiner bis heute liebsten Programmiersprache Python zu programmieren und eigene kleine Projekte umzusetzen. Die Begeisterung wuchs schnell, doch 2017 erlebte ich einen Wendepunkt: Ich wurde – wie viele andere – Opfer von NotPetya, und mein Notebook erlitt einen Blue Screen. Dieses Ereignis öffnete mir die Augen für die Bedeutung von Sicherheit in der digitalen Welt. Seitdem hat mich das Thema Cyber Security nicht mehr losgelassen. Es treibt mich an, meine Fähigkeiten kontinuierlich auszubauen und Lösungen zu entwickeln, die Technik und Sicherheit verbinden.",
        about_more: "Mehr lesen",

        title: "Albert Dygov",
        services_heading: "Meine <span class='highlight'>Fähigkeiten</span>",
        services_bcm_title: "BCM",
        services_bcm_text: "Business Continuity Management ist ein zentraler Bestandteil der Informationssicherheit und zählt zu meinen persönlichen Lieblingsbereichen.",
        services_bcm_more: "Mehr lesen",

        services_bsi_title: "ISMS nach BSI-IT Grundschutz",
        services_bsi_text: "Das BSI vereint meine Interessen an Struktur und Modularität – zwei Aspekte, die unterschiedlicher nicht sein könnten, aber hier ideal kombiniert werden.",
        services_bsi_more: "Mehr lesen",

        services_linux_title: "Linux-Administration und Endpoint-Sicherheit",
        services_linux_text: "Die Arbeit mit Linux verbindet meine Liebe zum Netzwerken, und durch Endpoint Security konnte ich dieses Wissen gezielt erweitern.",
        services_linux_more: "Mehr lesen",

        portfolio_heading: "Neueste <span class='highlight'>Zertifikate</span>",
        portfolio_underheading: "für den Download klicken !",
        portfolio_cert1: "Zertifikat herunterladen",
        portfolio_cert2: "Zertifikat herunterladen",
        portfolio_cert3: "Zertifikat herunterladen",

        contact_heading: "Kontaktiere <span class='highlight'>Mich</span>!",
        contact_name: "Vollständiger Name",
        contact_email: "E-Mail-Adresse",
        contact_number: "Telefonnummer",
        contact_subject: "Betreff",
        contact_message: "Deine Nachricht",
        contact_send: "Nachricht senden",

        footer_text: "Copyright © 2025 von Albert Dygov | Alle Rechte vorbehalten.",
        rss_text: "! ich bin nun CCFA - Zertifiziert ! - ! ich bin nun CCFA - Zertifiziert ! - ! ich bin nun CCFA - Zertifiziert !  - ! ich bin nun CCFA - Zertifiziert ! - ! ich bin nun CCFA - Zertifiziert ! - ! ich bin nun CCFA - Zertifiziert ! - ! ich bin nun CCFA - Zertifiziert ! - ! ich bin nun CCFA - Zertifiziert ! - ! ich bin nun CCFA - Zertifiziert ! - ! ich bin nun CCFA - Zertifiziert !"
    },

    en: {
        logo: "Portfolio from Albert Dygov",
        nav_home: "Home",
        nav_about: "About",
        nav_services: "Skills",
        nav_portfolio: "Certification",
        nav_contact: "Contact",

        home_welcome: "Welcome",
        home_name: "I am Albert D.",
        home_iam: "And I'm",
        home_text: "Motivated in everything I do – with a passion for information security.",
        home_cv: "Download CV",

        about_heading: "About <span class='highlight'>Me</span>",
        about_sub: "Cyber Security!",
        about_text: "From a young age, I was fascinated by the world of computer science. At 16, I started programming in my still favorite language, Python, and creating small projects. My enthusiasm grew quickly, but in 2017 I experienced a turning point: like many others, I fell victim to NotPetya, and my laptop suffered a Blue Screen. This event opened my eyes to the importance of security in the digital world. Since then, the topic of Cyber Security has never let me go. It drives me to continuously expand my skills and develop solutions that combine technology and security.",
        about_more: "Read More",

        title: "Albert Dygov",
        services_heading: "My <span class='highlight'>Skills</span>",
        services_bcm_title: "BCM",
        services_bcm_text: "Business Continuity Management is a central part of information security and one of my personal favorite areas.",
        services_bcm_more: "Read More",

        services_bsi_title: "ISMS according to BSI-IT Baseline Protection",
        services_bsi_text: "The BSI combines my interests in structure and modularity – two aspects that could hardly be more different, yet are ideally united here.",
        services_bsi_more: "Read More",

        services_linux_title: "Linux Administration and Endpoint Security",
        services_linux_text: "Working with Linux combines my love for networking, and through endpoint security I was able to expand this knowledge in a targeted way.",
        services_linux_more: "Read More",

        portfolio_heading: "Latest <span class='highlight'>Certification</span>",
        portfolio_underheading: "click for the download !",
        portfolio_cert1: "Download Certificate",
        portfolio_cert2: "Download Certificate",
        portfolio_cert3: "Download Certificate",

        contact_heading: "Contact <span class='highlight'>Me</span>!",
        contact_name: "Full Name",
        contact_email: "Email Address",
        contact_number: "Mobile Number",
        contact_subject: "Subject",
        contact_message: "Your Message",
        contact_send: "Send Message",

        footer_text: "Copyright © 2025 by Albert Dygov | All Rights Reserved.",
        rss_text: "I am now CCFA certified! - I am now CCFA certified! - I am now CCFA certified! - I am now CCFA certified! - I am now CCFA certified! - I am now CCFA certified! - I am now CCFA certified! - I am now CCFA certified! - I am now CCFA certified! - I am now CCFA certified!"
    }
};

let currentLang = "de";

function updateTranslations() {
    document.querySelectorAll("[data-translate]").forEach(el => {
        const key = el.getAttribute("data-translate");
        if (translations[currentLang] && translations[currentLang][key]) {
            if (el.tagName === "INPUT") {
                if (el.type === "submit") {
                    el.value = translations[currentLang][key];
                } else {
                    el.placeholder = translations[currentLang][key];
                }
            } else if (el.tagName === "TEXTAREA") {
                el.placeholder = translations[currentLang][key];
            } else {
                el.innerHTML = translations[currentLang][key];
            }
        }
    });

    document.documentElement.setAttribute("lang", currentLang);

    const switchBtns = document.querySelectorAll('.lang-switch-btn');
    switchBtns.forEach(btn => {
        btn.textContent = btn.getAttribute(`data-${currentLang}`);
    });
}

function toggleLanguage() {
    currentLang = currentLang === "de" ? "en" : "de";
    updateTranslations();
    
    // Update Typed.js if needed
    if (typeof Typed !== 'undefined' && currentLang === 'en') {
        // Could update strings here if needed
    }
}

const switchBtns = document.querySelectorAll('.lang-switch-btn, .mobile-lang-btn');
switchBtns.forEach(btn => {
    btn.addEventListener("click", toggleLanguage);
});

updateTranslations();

/* ==================== SCROLL TO TOP BUTTON ==================== */
const scrollTopBtn = document.querySelector('.scroll-top-btn');
if (scrollTopBtn) {
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 500) {
            scrollTopBtn.style.opacity = '1';
            scrollTopBtn.style.transform = 'scale(1)';
        } else {
            scrollTopBtn.style.opacity = '0';
            scrollTopBtn.style.transform = 'scale(0)';
        }
    });
}

/* ==================== INTERSECTION OBSERVER FOR FADE ANIMATIONS ==================== */
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in-up').forEach(el => {
    observer.observe(el);
});

/* ==================== PERFORMANCE OPTIMIZATION ==================== */
let ticking = false;

function onScroll() {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            updateActiveNav();
            ticking = false;
        });
        ticking = true;
    }
}

window.addEventListener('scroll', onScroll, { passive: true });
