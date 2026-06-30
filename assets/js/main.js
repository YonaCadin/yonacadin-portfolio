/* ============================================
   PORTFOLIO YONA CADIN
   Script principal
   ============================================ */

document.addEventListener('DOMContentLoaded', function () {

    /* ── Éléments du DOM ── */
    const header = document.getElementById('header');
    const themeToggle = document.getElementById('theme-toggle');
    const langToggle = document.getElementById('lang-toggle');
    const langLabel = document.getElementById('lang-label');
    const burger = document.getElementById('nav-burger');
    const navMenu = document.getElementById('nav-menu');
    const projectCards = document.querySelectorAll('.project-card');
    const projectModal = document.getElementById('project-modal');
    const legalModal = document.getElementById('legal-modal');
    const openLegalBtn = document.getElementById('open-legal');


    /* ══════════════════════════════════════
       INTERNATIONALISATION (i18n)
       ══════════════════════════════════════ */

    const translations = {
        fr: {
            skip_link: "Aller au contenu principal",
            nav_about: "À propos",
            nav_skills: "Compétences",
            nav_projects: "Projets",
            nav_journey: "Parcours",
            nav_contact: "Contact",
            
            hero_hello: "Hello, moi c'est",
            hero_role: "Cheffe de projet",
            hero_tagline: "Du terrain sportif au numérique — passionnée, compétitrice, polyvalente.",
            hero_cta_projects: "Mes projets",
            hero_cta_contact: "Me contacter",
            
            section_about: "À propos",
            about_intro: "Passionnée par tout ce qui est créatif, j'aime avoir le choix et être polyvalente. Compétitrice dans l'âme, j'aime relever de nouveaux défis.",
            about_bio: "Après une licence STAPS Entraînement sportif à l'Université d'Évry Val d'Essonne, je me suis réorientée dans le numérique en intégrant le master Cultures et Métiers du Web à l'Université Gustave Eiffel, en apprentissage chez <strong>Safran Aircraft Engines</strong>. Mon prochain défi : un master en Cybersécurité à l'ESGI Paris dès septembre 2026.",
            tag_team: "Esprit d'équipe",
            tag_versatile: "Polyvalence",
            tag_dynamic: "Dynamisme",
            tag_people: "Bon relationnel",
            tag_comm: "Communication",
            lang_fr: "Français — <em>natif</em>",
            lang_en: "Anglais — <em>niveau C1</em>",
            
            section_skills: "Compétences",
            skill_dev: "Développement Web",
            skill_design: "Design & Créatif",
            skill_pm: "Gestion de projet",
            skill_agile: "Méthodes agiles",
            
            section_projects: "Projets",
            proj_see: "Voir le projet →",
            proj_visit: "Visiter le site →",
            proj_view_pdf: "Voir le document (PDF) →",
            
            proj_appren_short: "Application web de rencontre entreprises-étudiants inversant le processus de recrutement.",
            proj_appren_long: "Projet réalisé dans le cadre du master CMW. Appren inverse le processus classique de recrutement en alternance : les étudiants créent leur profil avec leurs compétences et aspirations, et ce sont les entreprises qui viennent à leur rencontre.",
            
            proj_geoje_title: "Vivre de la mer à Geoje",
            proj_geoje_short: "Documentaire interactif sur les communautés rurales vivant de la mer en Corée du Sud.",
            proj_geoje_long: "Documentaire interactif réalisé lors de mon échange universitaire à Busan. Ce projet explore la vie des communautés rurales qui vivent encore de la pêche et de la mer sur l'île de Geoje, en Corée du Sud.",
            
            proj_windmap_short: "Concept de design interactif — visualisation de données météorologiques.",
            proj_windmap_long: "Création d'un concept de design interactif autour de la visualisation des vents. Ce projet explore comment rendre les données météorologiques accessibles et esthétiques à travers une interface immersive.",
            
            proj_ministere_title: "Le Ministère du Temps",
            proj_ministere_short: "Concept de design orienté web — interfaces narratives autour du temps.",
            proj_ministere_long: "Concept de design orienté web imaginant un univers autour de la manipulation temporelle. Ce projet explore les interfaces narratives et l'expérience utilisateur au service du storytelling.",
            
            proj_photo_title: "Portfolio photo",
            proj_photo_short: "Répertoire de shootings photo de rue — capturer l'énergie urbaine.",
            proj_photo_long: "Un répertoire de shootings photo de rue capturant l'énergie et les instants fugaces de la vie urbaine. Chaque série raconte une histoire entre spontanéité et composition.",
            
            proj_mamie_short: "Trailer d'un documentaire — l'histoire d'une grand-mère et du sanatorium.",
            proj_mamie_long: "Réalisation d'un trailer pour un documentaire racontant l'histoire de la grand-mère de Julien et son expérience au sanatorium. Un travail de montage mêlant témoignages, archives et musique.",
            
            proj_fast_short: "Vidéo interview pour la promotion d'un tournoi d'eSport — dynamisme et storytelling.",
            proj_fast_long: "Création d'une vidéo interview au format « Fast & Curious » pour promouvoir un tournoi d'eSport. Un exercice de montage dynamique mêlant interviews rapides, transitions percutantes et storytelling visuel.",
            
            tag_documentary: "Documentaire",
            tag_interactive_design: "Design interactif",
            tag_web_design: "Design web",
            tag_art_direction: "Direction artistique",
            tag_photography: "Photographie",
            tag_directing: "Réalisation",
            tag_editing: "Montage",
            tag_video_editing: "Montage vidéo",
            video_fallback: "Votre navigateur ne supporte pas la lecture vidéo.",
            
            section_journey: "Parcours",
            journey_1: "Étudiante d'échange aux États-Unis. Une expérience fondatrice qui m'a permis d'atteindre un niveau d'anglais C1 et de découvrir une autre culture.",
            journey_2_title: "Licence STAPS Entraînement sportif",
            journey_2: "Université d'Évry Val d'Essonne. Formation axée sur la performance sportive, le coaching et la méthodologie d'entraînement.",
            journey_3: "Échange universitaire d'un semestre en Corée du Sud. Immersion culturelle et réalisation du documentaire interactif « Vivre de la mer à Geoje ».",
            journey_4_title: "Master CMW + Safran Aircraft Engines",
            journey_4: "Master Cultures et Métiers du Web à l'Université Gustave Eiffel, en apprentissage chez Safran Aircraft Engines. Gestion de projet, développement web et communication digitale.",
            journey_5_title: "Master Cybersécurité — ESGI Paris",
            journey_5: "Prochaine étape : approfondir mes compétences en sécurité informatique et protection des systèmes d'information.",
            
            section_contact: "Contact",
            contact_intro: "Un projet, une question ou juste envie de discuter ? N'hésitez pas à me contacter !",
            
            footer_rights: "Tous droits réservés.",
            footer_legal: "Mentions légales",
            
            legal_title: "Mentions légales",
            legal_publisher_title: "Responsable de publication",
            legal_name_label: "Nom :",
            legal_hosting_title: "Hébergement",
            legal_hosting: "Ce site est hébergé sur <strong>GitHub Pages</strong>, un service proposé par GitHub, Inc., 88 Colin P Kelly Jr St, San Francisco, CA 94107, États-Unis.",
            legal_ip_title: "Propriété intellectuelle",
            legal_ip: "Le contenu de ce site (textes, images, vidéos, maquettes et éléments graphiques) est la propriété intellectuelle de Yona CADIN, sauf indication contraire. Toute reproduction ou utilisation sans autorisation préalable est interdite.",
            legal_liability_title: "Responsabilité",
            legal_liability: "L'autrice du site s'efforce de fournir des informations exactes et à jour, mais ne peut garantir l'absence d'erreurs ou d'omissions.",
            legal_links_title: "Liens externes",
            legal_links: "Ce site peut contenir des liens vers des sites externes. L'autrice n'est pas responsable du contenu de ces sites tiers.",
            legal_data_title: "Protection des données",
            legal_data: "Ce site ne collecte aucune donnée personnelle. Aucun cookie, aucun outil de suivi ou d'analyse n'est utilisé.",
            legal_ai_title: "Utilisation de l'intelligence artificielle",
            legal_ai_intro: "Ce portfolio a été développé avec l'aide d'outils d'intelligence artificielle dans une démarche d'utilisation raisonnée :",
            legal_ai_1_label: "Autocomplétion de code :",
            legal_ai_1: "Assistance à l'écriture via les fonctionnalités intégrées à l'éditeur de code (VS Code).",
            legal_ai_2_label: "Aide à la résolution de problèmes :",
            legal_ai_2: "Consultation ponctuelle pour résoudre des difficultés techniques spécifiques.",
            legal_ai_disclaimer: "L'intégralité du code n'a pas été générée par une IA. Les passages ayant bénéficié d'une assistance sont indiqués par des commentaires dans le code source.",
            legal_updated: "Dernière mise à jour : juin 2026"
        },
        en: {
            skip_link: "Skip to main content",
            nav_about: "About",
            nav_skills: "Skills",
            nav_projects: "Projects",
            nav_journey: "Journey",
            nav_contact: "Contact",
            
            hero_hello: "Hello, I'm",
            hero_role: "Project Manager",
            hero_tagline: "From sports coaching to digital — passionate, competitive, and versatile.",
            hero_cta_projects: "My Projects",
            hero_cta_contact: "Contact Me",
            
            section_about: "About Me",
            about_intro: "Passionate about everything creative, I enjoy having choices and being versatile. Competitive at heart, I love taking on new challenges.",
            about_bio: "After a Bachelor's in Sports Training at the University of Évry, I transitioned to digital by joining the Web Cultures and Professions Master's at Gustave Eiffel University, apprenticing at <strong>Safran Aircraft Engines</strong>. My next challenge: a Master's in Cybersecurity at ESGI Paris starting September 2026.",
            tag_team: "Team Spirit",
            tag_versatile: "Versatility",
            tag_dynamic: "Dynamic",
            tag_people: "Interpersonal Skills",
            tag_comm: "Communication",
            lang_fr: "French — <em>native</em>",
            lang_en: "English — <em>C1 level</em>",
            
            section_skills: "Skills",
            skill_dev: "Web Development",
            skill_design: "Design & Creative",
            skill_pm: "Project Management",
            skill_agile: "Agile Methodologies",
            
            section_projects: "Projects",
            proj_see: "View Project →",
            proj_visit: "Visit Website →",
            proj_view_pdf: "View Document (PDF) →",
            
            proj_appren_short: "A company-student dating web app that reverses the recruitment process.",
            proj_appren_long: "Project carried out as part of the CMW Master's. Appren reverses the traditional work-study recruitment process: students create a profile with their skills and aspirations, and companies come to them.",
            
            proj_geoje_title: "Living from the Sea in Geoje",
            proj_geoje_short: "Interactive documentary on rural communities living off the sea in South Korea.",
            proj_geoje_long: "Interactive documentary created during my university exchange in Busan. This project explores the lives of rural communities still relying on fishing and the sea on Geoje Island, South Korea.",
            
            proj_windmap_short: "Interactive design concept — meteorological data visualization.",
            proj_windmap_long: "Creation of an interactive design concept focused on visualizing winds. This project explores how to make meteorological data accessible and aesthetically pleasing through an immersive interface.",
            
            proj_ministere_title: "The Ministry of Time",
            proj_ministere_short: "Web-oriented design concept — narrative interfaces around time.",
            proj_ministere_long: "Web-oriented design concept imagining a universe around time manipulation. This project explores narrative interfaces and user experience in the service of storytelling.",
            
            proj_photo_title: "Photography Portfolio",
            proj_photo_short: "Directory of street photo shoots — capturing urban energy.",
            proj_photo_long: "A directory of street photography shoots capturing the energy and fleeting moments of urban life. Each series tells a story balancing spontaneity and composition.",
            
            proj_mamie_short: "Documentary trailer — the story of a grandmother and a sanatorium.",
            proj_mamie_long: "Directed a trailer for a documentary telling the story of Julien's grandmother and her experience in a sanatorium. An editing project combining testimonies, archives, and music.",
            
            proj_fast_short: "Video interview promoting an eSports tournament — dynamism and storytelling.",
            proj_fast_long: "Creation of an interview video in the « Fast & Curious » format to promote an eSports tournament. A dynamic editing exercise combining quick interviews, punchy transitions, and visual storytelling.",
            
            tag_documentary: "Documentary",
            tag_interactive_design: "Interactive Design",
            tag_web_design: "Web Design",
            tag_art_direction: "Art Direction",
            tag_photography: "Photography",
            tag_directing: "Directing",
            tag_editing: "Editing",
            tag_video_editing: "Video Editing",
            video_fallback: "Your browser does not support video playback.",
            
            section_journey: "My Journey",
            journey_1: "Exchange student in the USA. A foundational experience that allowed me to reach a C1 English level and discover another culture.",
            journey_2_title: "Bachelor's in Sports Training",
            journey_2: "University of Évry. Training focused on sports performance, coaching, and training methodology.",
            journey_3: "One-semester university exchange in South Korea. Cultural immersion and creation of the interactive documentary « Living from the Sea in Geoje ».",
            journey_4_title: "Master's CMW + Safran Aircraft Engines",
            journey_4: "Web Cultures and Professions Master's at Gustave Eiffel University, apprenticing at Safran Aircraft Engines. Project management, web development, and digital communication.",
            journey_5_title: "Cybersecurity Master's — ESGI Paris",
            journey_5: "Next step: deepening my skills in IT security and information systems protection.",
            
            section_contact: "Contact",
            contact_intro: "Have a project, a question, or just want to chat? Feel free to contact me!",
            
            footer_rights: "All rights reserved.",
            footer_legal: "Legal Notice",
            
            legal_title: "Legal Notice",
            legal_publisher_title: "Publication Manager",
            legal_name_label: "Name:",
            legal_hosting_title: "Hosting",
            legal_hosting: "This site is hosted on <strong>GitHub Pages</strong>, a service provided by GitHub, Inc., 88 Colin P Kelly Jr St, San Francisco, CA 94107, USA.",
            legal_ip_title: "Intellectual Property",
            legal_ip: "The content of this site (texts, images, videos, mockups, and graphics) is the intellectual property of Yona CADIN, unless otherwise stated. Any reproduction or use without prior authorization is prohibited.",
            legal_liability_title: "Liability",
            legal_liability: "The author of the site strives to provide accurate and up-to-date information but cannot guarantee the absence of errors or omissions.",
            legal_links_title: "External Links",
            legal_links: "This site may contain links to external sites. The author is not responsible for the content of these third-party sites.",
            legal_data_title: "Data Protection",
            legal_data: "This site does not collect any personal data. No cookies, tracking, or analysis tools are used.",
            legal_ai_title: "Use of Artificial Intelligence",
            legal_ai_intro: "This portfolio was developed with the help of artificial intelligence tools in a reasoned approach:",
            legal_ai_1_label: "Code Autocompletion:",
            legal_ai_1: "Writing assistance via built-in code editor features (VS Code).",
            legal_ai_2_label: "Problem Solving Assistance:",
            legal_ai_2: "Occasional consultation to resolve specific technical difficulties.",
            legal_ai_disclaimer: "The entire code was not generated by an AI. Sections that benefited from assistance are indicated by comments in the source code.",
            legal_updated: "Last updated: June 2026"
        }
    };

    let currentLang = localStorage.getItem('language') || 'fr';
    document.documentElement.lang = currentLang;

    // Met à jour l'interface avec la langue active
    function applyTranslations(lang) {
        document.documentElement.lang = lang;
        langLabel.textContent = lang === 'fr' ? 'EN' : 'FR';
        langToggle.setAttribute('aria-label', lang === 'fr' ? 'Switch to English' : 'Passer en français');

        // Traduire tous les éléments avec l'attribut data-i18n
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang][key]) {
                el.innerHTML = translations[lang][key];
            }
        });
    }

    // Appliquer au chargement
    applyTranslations(currentLang);

    // Event listener pour le bouton
    langToggle.addEventListener('click', () => {
        currentLang = currentLang === 'fr' ? 'en' : 'fr';
        localStorage.setItem('language', currentLang);
        applyTranslations(currentLang);
    });


    /* ══════════════════════════════════════
       THÈME SOMBRE / CLAIR
       ══════════════════════════════════════ */

    var savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
        updateThemeToggle(savedTheme === 'dark');
    }

    themeToggle.addEventListener('click', function () {
        var isDark = document.documentElement.getAttribute('data-theme') === 'dark';
        var newTheme = isDark ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeToggle(!isDark);
    });

    function updateThemeToggle(isDark) {
        themeToggle.setAttribute('aria-pressed', isDark);
        // Translation locale pour le bouton theme (pas gérée par i18n principal pour simplifier les aria)
        var labelFr = isDark ? 'Activer le mode clair' : 'Activer le mode sombre';
        var labelEn = isDark ? 'Enable light mode' : 'Enable dark mode';
        themeToggle.setAttribute('aria-label', currentLang === 'fr' ? labelFr : labelEn);
    }


    /* ══════════════════════════════════════
       HEADER AU SCROLL
       ══════════════════════════════════════ */

    var lastScroll = 0;

    window.addEventListener('scroll', function () {
        var scrollY = window.scrollY;
        if (scrollY > 50) {
            header.classList.add('is-scrolled');
        } else {
            header.classList.remove('is-scrolled');
        }
        lastScroll = scrollY;
    }, { passive: true });


    /* ══════════════════════════════════════
       MENU HAMBURGER (MOBILE)
       ══════════════════════════════════════ */

    burger.addEventListener('click', function () {
        var isOpen = navMenu.classList.toggle('is-open');
        burger.setAttribute('aria-expanded', isOpen);
        burger.setAttribute('aria-label', isOpen ? 'Fermer le menu' : 'Ouvrir le menu');

        document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    navMenu.querySelectorAll('.nav-link').forEach(function (link) {
        link.addEventListener('click', function () {
            navMenu.classList.remove('is-open');
            burger.setAttribute('aria-expanded', 'false');
            burger.setAttribute('aria-label', 'Ouvrir le menu');
            document.body.style.overflow = '';
        });
    });


    /* ══════════════════════════════════════
       SCROLL REVEAL (IntersectionObserver)
       ══════════════════════════════════════ */

    var revealElements = document.querySelectorAll('.reveal');

    if ('IntersectionObserver' in window) {
        var revealObserver = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    revealObserver.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.15,
            rootMargin: '0px 0px -40px 0px'
        });

        revealElements.forEach(function (el) {
            revealObserver.observe(el);
        });
    } else {
        revealElements.forEach(function (el) {
            el.classList.add('is-visible');
        });
    }


    /* ══════════════════════════════════════
       MODAL PROJET
       ══════════════════════════════════════ */

    var currentTrigger = null; 

    projectCards.forEach(function (card) {
        card.addEventListener('click', function () {
            openProjectModal(card);
        });

        card.addEventListener('keydown', function (e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                openProjectModal(card);
            }
        });
    });

    function openProjectModal(card) {
        currentTrigger = card;
        
        // La traduction est déjà gérée sur la carte elle-même.
        // On récupère le texte visible de la carte pour le titre.
        var title = card.querySelector('.project-card-title').textContent;
        var tags = card.querySelector('.project-card-tags');
        var detail = card.querySelector('.project-detail');

        var modalTitle = projectModal.querySelector('.modal-title');
        var modalDesc = projectModal.querySelector('.modal-description');
        var modalTags = projectModal.querySelector('.modal-tags');
        var modalMedia = projectModal.querySelector('.modal-media');

        modalTitle.textContent = title;

        // Vider la modale d'abord
        modalDesc.innerHTML = '';
        modalMedia.innerHTML = '';

        if (detail) {
            // Cloner le contenu du template
            const clone = detail.content.cloneNode(true);
            
            // Séparer les paragraphes et les boutons/vidéos
            const paragraphs = clone.querySelectorAll('p');
            const mediaLinks = clone.querySelectorAll('a, .modal-video-wrapper');
            
            paragraphs.forEach(p => modalDesc.appendChild(p));
            mediaLinks.forEach(m => modalMedia.appendChild(m));
        } else {
            modalDesc.textContent = card.querySelector('.project-card-desc').textContent;
        }

        if (tags) {
            modalTags.innerHTML = tags.innerHTML;
        }

        openModal(projectModal);
    }


    /* ══════════════════════════════════════
       MODAL MENTIONS LÉGALES
       ══════════════════════════════════════ */

    openLegalBtn.addEventListener('click', function () {
        currentTrigger = openLegalBtn;
        openModal(legalModal);
    });


    /* ══════════════════════════════════════
       GESTION GÉNÉRIQUE DES MODALES
       ══════════════════════════════════════ */

    function openModal(modal) {
        modal.classList.add('is-open');
        modal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';

        var dialog = modal.querySelector('.modal-dialog');
        if (dialog) {
            dialog.focus();
        }
    }

    function closeModal(modal) {
        modal.classList.remove('is-open');
        modal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';

        // Stopper les vidéos quand on ferme la modale
        var videos = modal.querySelectorAll('video');
        videos.forEach(v => {
            v.pause();
            v.currentTime = 0;
        });

        if (currentTrigger) {
            currentTrigger.focus();
            currentTrigger = null;
        }
    }

    document.querySelectorAll('[data-close-modal]').forEach(function (el) {
        el.addEventListener('click', function () {
            var modal = el.closest('.modal');
            if (modal) {
                closeModal(modal);
            }
        });
    });

    document.querySelectorAll('.modal-close').forEach(function (btn) {
        btn.addEventListener('click', function () {
            var modal = btn.closest('.modal');
            if (modal) {
                closeModal(modal);
            }
        });
    });

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
            var openModals = document.querySelectorAll('.modal.is-open');
            openModals.forEach(function (modal) {
                closeModal(modal);
            });

            if (navMenu.classList.contains('is-open')) {
                navMenu.classList.remove('is-open');
                burger.setAttribute('aria-expanded', 'false');
                document.body.style.overflow = '';
            }
        }
    });


    /* ══════════════════════════════════════
       SMOOTH SCROLL POUR LES ANCRES
       ══════════════════════════════════════ */

    document.querySelectorAll('a[href^="#"]').forEach(function (link) {
        link.addEventListener('click', function (e) {
            var targetId = this.getAttribute('href');
            if (targetId === '#') return;

            var target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

});
