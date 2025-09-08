/*==================== toggle icon navbar ====================*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};


/*==================== scroll sections active link ====================*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
    /*==================== sticky navbar ====================*/
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};


/*==================== scroll reveal ====================*/
ScrollReveal({
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });


/*==================== typed js ====================*/
const typed = new Typed('.multiple-text', {
    strings: ['Security consultant'],
    typeSpeed: 100,

    loop: false
});


/*=====das andere=====*/

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
  
      about_heading: "Über <span style='color:rgb(110, 159, 112);'>Mich</span>",
      about_sub: "Cyber Security!",
      about_text: "Schon in jungen Jahren hat mich die Welt der Informatik begeistert. Mit 16 begann ich, in meiner bis heute liebsten Programmiersprache Python zu programmieren und eigene kleine Projekte umzusetzen. Die Begeisterung wuchs schnell, doch 2017 erlebte ich einen Wendepunkt: Ich wurde – wie viele andere – Opfer von NotPetya, und mein Notebook erlitt einen Blue Screen. Dieses Ereignis öffnete mir die Augen für die Bedeutung von Sicherheit in der digitalen Welt. Seitdem hat mich das Thema Cyber Security nicht mehr losgelassen. Es treibt mich an, meine Fähigkeiten kontinuierlich auszubauen und Lösungen zu entwickeln, die Technik und Sicherheit verbinden.",
      about_more: "Mehr lesen",
      
      title: "Albert Dygov",
      services_heading: "Meine <span style='color:rgb(110, 159, 112);'>Fähigkeiten</span>",
      services_bcm_title: "BCM",
      services_bcm_text: "Business Continuity Management ist ein zentraler Bestandteil der Informationssicherheit und zählt zu meinen persönlichen Lieblingsbereichen.",
      services_bcm_more: "Mehr lesen",
  
      services_bsi_title: "ISMS nach BSI-IT Grundschutz",
      services_bsi_text: "Das BSI vereint meine Interessen an Struktur und Modularität – zwei Aspekte, die unterschiedlicher nicht sein könnten, aber hier ideal kombiniert werden.",
      services_bsi_more: "Mehr lesen",
  
      services_linux_title: "Linux-Administration und Endpoint-Sicherheit",
      services_linux_text: "Die Arbeit mit Linux verbindet meine Liebe zum Netzwerken, und durch Endpoint Security konnte ich dieses Wissen gezielt erweitern.",
      services_linux_more: "Mehr lesen",
  
      portfolio_heading: "Neueste <span style='color:rgb(110, 159, 112);'>Zertifikate</span>",
      portfolio_underheading: "für den Download klicken !",
      portfolio_cert1: "BSI IT-Grundschutz Praktiker",
      portfolio_cert2: "ITIL v4 Foundation",
      portfolio_cert3: "CCFA | Crowdstrike Certified Falcon Administrator (Neu)",
  
      contact_heading: "Kontaktiere <span style='color:rgb(110, 159, 112);'>Mich</span>!",
      contact_name: "Vollständiger Name",
      contact_email: "E-Mail-Adresse",
      contact_number: "Telefonnummer",
      contact_subject: "Betreff",
      contact_message: "Deine Nachricht",
      contact_send: "Nachricht senden",
  
      footer_text: "Copyright © 2025 von Albert Dygov | Alle Rechte vorbehalten.",
      rss_text: "!! Ich habe ein NEUES Zertifikat !! Ich habe ein NEUES Zertifikat !! Ich habe ein NEUES Zertifikat !! Ich habe ein NEUES Zertifikat !! Ich habe ein NEUES Zertifikat !! Ich habe ein NEUES Zertifikat !! Ich habe ein NEUES Zertifikat !! Ich habe ein NEUES Zertifikat !! "
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
  
      about_heading: "About <span style='color:rgb(110, 159, 112);'>Me</span>",
      about_sub: "Cyber Security!",
      about_text: "From a young age, I was fascinated by the world of computer science. At 16, I started programming in my still favorite language, Python, and creating small projects. My enthusiasm grew quickly, but in 2017 I experienced a turning point: like many others, I fell victim to NotPetya, and my laptop suffered a Blue Screen. This event opened my eyes to the importance of security in the digital world. Since then, the topic of Cyber Security has never let me go. It drives me to continuously expand my skills and develop solutions that combine technology and security.",
      about_more: "Read More",
  
      title: "Albert Dygov",
      services_heading: "My <span style='color:rgb(110, 159, 112);'>Skills</span>",
      services_bcm_title: "BCM",
      services_bcm_text: "Business Continuity Management is a central part of information security and one of my personal favorite areas.",
      services_bcm_more: "Read More",
  
      services_bsi_title: "ISMS according to BSI-IT Baseline Protection",
      services_bsi_text: "The BSI combines my interests in structure and modularity – two aspects that could hardly be more different, yet are ideally united here.",
      services_bsi_more: "Read More",
  
      services_linux_title: "Linux Administration and Endpoint Security",
      services_linux_text: "Working with Linux combines my love for networking, and through endpoint security I was able to expand this knowledge in a targeted way.",
      services_linux_more: "Read More",
  
      portfolio_heading: "Latest <span style='color:rgb(110, 159, 112);'>Certification</span>",
      portfolio_underheading: "click for the download !",
      portfolio_cert1: "BSI IT-Baseline Protection Practitioner",
      portfolio_cert2: "ITIL v4 Foundation",
      portfolio_cert3: "CCFA | Crowdstrike Certified Falcon Administrator (NEW)",
  
      contact_heading: "Contact <span style='color:rgb(110, 159, 112);'>Me</span>!",
      contact_name: "Full Name",
      contact_email: "Email Address",
      contact_number: "Mobile Number",
      contact_subject: "Subject",
      contact_message: "Your Message",
      contact_send: "Send Message",
  
      footer_text: "Copyright © 2025 by Albert Dygov | All Rights Reserved.",
      rss_text: "!! I have a NEW Certificate !! I have a NEW Certificate !! I have a NEW Certificate !! I have a NEW Certificate !! I have a NEW Certificate !! I have a NEW Certificate !! I have a NEW Certificate !! I have a NEW Certificate !! I have a NEW Certificate !! I have a NEW Certificate !! I have a NEW Certificate !! I have a NEW Certificate !!"
    }
  };
  
  let currentLang = "de"; // Startsprache
  const switchBtn = document.getElementById("lang-switch");
  
  function updateTranslations() {
    document.querySelectorAll("[data-translate]").forEach(el => {
      const key = el.getAttribute("data-translate");
      if(el.tagName === "INPUT") {
        if(el.type === "submit") el.value = translations[currentLang][key];
        else el.placeholder = translations[currentLang][key];
      } else if(el.tagName === "TEXTAREA") {
        el.placeholder = translations[currentLang][key];
      } else {
        el.innerHTML = translations[currentLang][key]; // für <span> im Text
      }
    });
    document.documentElement.setAttribute("lang", currentLang);
  }
  
  // Sprache wechseln beim Button-Klick
  switchBtn.addEventListener("click", () => {
    currentLang = currentLang === "de" ? "en" : "de";
    switchBtn.textContent = switchBtn.getAttribute("data-" + currentLang);
    updateTranslations();
  });
  
  // Startsprache direkt beim Laden anwenden
  updateTranslations();
  

  /*==================== typed js ====================*/
const scroll = document.getElementById("scrollText");
let containerWidth = scroll.parentElement.offsetWidth;
let text = scroll.innerHTML;


scroll.innerHTML = text + " " + text;

let posX = containerWidth; 
const speed = 100; 

function animate(timestamp) {
    const deltaTime = 1 / 100; 
    posX -= speed * deltaTime;

    const textWidth = scroll.offsetWidth / 2; 

    
    if (posX <= -textWidth) {
        posX += textWidth;
    }

    scroll.style.transform = `translateX(${posX}px)`;
    requestAnimationFrame(animate);
}

// Responsiv
window.addEventListener("resize", () => {
    containerWidth = scroll.parentElement.offsetWidth;
    posX = containerWidth; // Start wieder ganz rechts
});

requestAnimationFrame(animate);
