// Système de traduction i18n
let i18n = {
    currentLang: 'fr',
    translations: {
        'fr': {
            // Navigation
            'nav-features': 'FONCTIONNALITÉS',
            'nav-how-it-works': 'COMMENT ÇA MARCHE',
            'nav-advantages': 'AVANTAGES',
            'nav-support': 'FAIRE UN DON',
            'nav-download': 'TÉLÉCHARGER',
            
            // Sections principales
            'hero-title': 'Unifile : Votre hub de conversion & téléchargement local',
            'hero-subtitle': 'Tout est gratuit, sans pub, illimité et 100% local',
            'download-button': 'Télécharger l\'app',
            'learn-more': 'EN SAVOIR PLUS',
            
            // Section Fonctionnalités
            'features-title': 'Fonctionnalités clés',
            'documents-title': 'Documents',
            'documents-desc': 'PDF ↔ DOCX, PPTX, XLSX, TXT, ODT... Préservation mise en page, polices, images intégrées.',
            'images-title': 'Images',
            'images-desc': 'JPG, PNG, WebP, GIF, TIFF, BMP... Compression optimisée, redimensionnement, réglage qualité.',
            'videos-title': 'Vidéos',
            'videos-desc': 'MP4, WebM, AVI, MKV, MOV... Accélération GPU pour une conversion ultra-rapide.',
            'audio-title': 'Audio',
            'audio-desc': 'MP3, WAV, FLAC, AAC, OGG... Bitrate ajustable, normalisation du volume.',
            'player-title': 'Lecteur Vidéo',
            'player-desc': 'Lecteur intégré avec contrôle de vitesse, sous-titres et qualité.',
            'videodownload-title': 'Téléchargement Vidéo',
            'videodownload-desc': 'YouTube, TikTok, Vimeo, Dailymotion, Coflix, Wiflix... Téléchargement direct, sans trackers.',
            'movies-title': 'Films & Séries',
            'movies-desc': 'Téléchargement de films et séries sans publicité, illimité et sécurisé.',
            'settings-title': 'Paramètres',
            'settings-desc': 'Thèmes clair/sombre, langues, dossiers de sortie personnalisables.',
            'history-title': 'Historique',
            'history-desc': 'Suivez vos conversions et téléchargements récents pour un accès rapide.',
            
            // Section Comment ça marche
            'how-it-works-title': 'Comment ça marche',
            'step1-title': 'Glisser-déposer un fichier ou coller un lien vidéo',
            'step1-desc': 'Sélectionnez simplement le fichier à convertir ou collez l\'URL de la vidéo à télécharger.',
            'step2-title': 'Choisir format et options',
            'step2-desc': 'Sélectionnez le format de sortie désiré et ajustez les paramètres (résolution, codec, bitrate...).',
            'step3-title': 'Télécharger instantanément votre conversion',
            'step3-desc': 'Profitez d\'un traitement ultra-rapide localement, sans attente de serveur.',
            
            // Section Installation
            'installation-title': 'Comment installer Unifile',
            'install-step1-title': 'Téléchargez le fichier compressé',
            'install-step1-desc': 'Cliquez sur le bouton "Télécharger l\'app" en haut de la page.',
            'install-step2-title': 'Extrayez le fichier RAR',
            'install-step2-desc': 'Utilisez WinRAR ou 7-Zip pour extraire le contenu du fichier téléchargé.',
            'install-step3-title': 'Placez le dossier où vous voulez',
            'install-step3-desc': 'Déplacez le dossier extrait à l\'emplacement de votre choix sur votre ordinateur.',
            'install-step4-title': 'Utilisez le raccourci Unifile',
            'install-step4-desc': 'Placez le raccourci Unifile où vous voulez (bureau, menu démarrer...) pour lancer l\'application facilement.',
            
            // Section Avantages
            'advantages-title': 'Avantages & Chiffres clés',
            'advantage1': 'Interface unifiée',
            'advantage1-desc': 'Accédez à tous vos fichiers depuis une seule application intuitive.',
            'advantage2': 'Performances optimisées',
            'advantage2-desc': 'Navigation fluide et rapide, même avec de nombreux fichiers.',
            'advantage3': 'Fonctionnalités avancées',
            'advantage3-desc': 'Conversion, téléchargement et gestion de fichiers en quelques clics.',
            'advantage4': 'Multi-plateforme',
            'advantage4-desc': 'Disponible sur Windows, macOS et Linux.',
            'speed-title': 'Traitement Ultra-rapide',
            'speed-desc': 'Conversion locale sans attente de serveur',
            'adfree-title': 'Sans Publicité',
            'adfree-desc': 'Aucune publicité ni trackers',
            'noreg-title': 'Sans Inscription',
            'noreg-desc': 'Utilisation immédiate sans création de compte',
            'multilang-title': 'Multilingue',
            'multilang-desc': 'Support FR/EN et thèmes clair/sombre',
            'unlimited-title': 'Illimité',
            'unlimited-desc': 'Aucune limite de taille ou de nombre de fichiers',
            'formats-title': '+30 Formats',
            'formats-desc': 'Support pour plus de 30 formats différents',
            
            // Section Support/Donation
            'support-title': 'Soutenez le développeur',
            'support-text': 'Unifile est entièrement gratuit et illimité, mais si vous aimez cette application, vous pouvez soutenir le développeur par un don.',
            'donate-btn': 'FAIRE UN DON',
            'github-btn': 'STAR SUR GITHUB',
            'donate-button': 'Faire un don',
            
            // Footer
            'footer-copyright': '© 2023 Unifile. Tous droits réservés.',
            'footer-legal': 'Liens juridiques',
            'privacy-link': 'Politique de confidentialité',
            'terms-link': 'Conditions générales',
            'contact-title': 'Contact & Support',
            'privacy-policy': 'Politique de confidentialité',
            'terms': 'Conditions d\'utilisation',
            
            // Modales
            'privacy-title': 'Politique de Confidentialité',
            'privacy-content': 'Unifile prend votre confidentialité très au sérieux...',
            'terms-title': 'Conditions Générales d\'Utilisation',
            'terms-content': 'Dernière mise à jour : 18 avril 2025...',
            'close': 'Fermer'
        },
        'en': {
            // Navigation
            'nav-features': 'FEATURES',
            'nav-how-it-works': 'HOW IT WORKS',
            'nav-advantages': 'ADVANTAGES',
            'nav-support': 'DONATE',
            'nav-download': 'DOWNLOAD',
            
            // Sections principales
            'hero-title': 'Unifile: Your local conversion & download hub',
            'hero-subtitle': 'Everything is free, ad-free, unlimited and 100% local',
            'download-button': 'Download app',
            'learn-more': 'LEARN MORE',
            
            // Section Fonctionnalités
            'features-title': 'Key Features',
            'documents-title': 'Documents',
            'documents-desc': 'PDF ↔ DOCX, PPTX, XLSX, TXT, ODT... Preserves layout, fonts, embedded images.',
            'images-title': 'Images',
            'images-desc': 'JPG, PNG, WebP, GIF, TIFF, BMP... Optimized compression, resizing, quality adjustment.',
            'videos-title': 'Videos',
            'videos-desc': 'MP4, WebM, AVI, MKV, MOV... GPU acceleration for ultra-fast conversion.',
            'audio-title': 'Audio',
            'audio-desc': 'MP3, WAV, FLAC, AAC, OGG... Adjustable bitrate, volume normalization.',
            'player-title': 'Video Player',
            'player-desc': 'Integrated player with speed control, subtitles and quality.',
            'videodownload-title': 'Video Download',
            'videodownload-desc': 'YouTube, TikTok, Vimeo, Dailymotion, Coflix, Wiflix... Direct download, no trackers.',
            'movies-title': 'Movies & Series',
            'movies-desc': 'Ad-free, unlimited and secure download of movies and series.',
            'settings-title': 'Settings',
            'settings-desc': 'Light/dark themes, languages, customizable output folders.',
            'history-title': 'History',
            'history-desc': 'Track your recent conversions and downloads for quick access.',
            
            // Section Comment ça marche
            'how-it-works-title': 'How It Works',
            'step1-title': 'Drag and drop a file or paste a video link',
            'step1-desc': 'Simply select the file to convert or paste the URL of the video to download.',
            'step2-title': 'Choose format and options',
            'step2-desc': 'Select the desired output format and adjust the settings (resolution, codec, bitrate...).',
            'step3-title': 'Instantly download your conversion',
            'step3-desc': 'Enjoy ultra-fast local processing without server waiting time.',
            
            // Section Installation
            'installation-title': 'How to install Unifile',
            'install-step1-title': 'Download the compressed file',
            'install-step1-desc': 'Click on the "Download app" button at the top of the page.',
            'install-step2-title': 'Extract the RAR file',
            'install-step2-desc': 'Use WinRAR or 7-Zip to extract the contents of the downloaded file.',
            'install-step3-title': 'Place the folder wherever you want',
            'install-step3-desc': 'Move the extracted folder to a location of your choice on your computer.',
            'install-step4-title': 'Use the Unifile shortcut',
            'install-step4-desc': 'Place the Unifile shortcut wherever you want (desktop, start menu...) to launch the application easily.',
            
            // Section Avantages
            'advantages-title': 'Advantages & Key Figures',
            'advantage1': 'Unified Interface',
            'advantage1-desc': 'Access all your files from a single intuitive application.',
            'advantage2': 'Optimized Performance',
            'advantage2-desc': 'Smooth and fast navigation, even with many files.',
            'advantage3': 'Advanced Features',
            'advantage3-desc': 'Convert, download, and manage files with just a few clicks.',
            'advantage4': 'Cross-Platform',
            'advantage4-desc': 'Available on Windows, macOS, and Linux.',
            'speed-title': 'Ultra-fast Processing',
            'speed-desc': 'Local conversion without server waiting',
            'adfree-title': 'Ad-free',
            'adfree-desc': 'No ads or trackers',
            'noreg-title': 'No Registration',
            'noreg-desc': 'Immediate use without account creation',
            'multilang-title': 'Multilingual',
            'multilang-desc': 'FR/EN support and light/dark themes',
            'unlimited-title': 'Unlimited',
            'unlimited-desc': 'No size or file count limits',
            'formats-title': '+30 Formats',
            'formats-desc': 'Support for over 30 different formats',
            
            // Section Support/Donation
            'support-title': 'Support the developer',
            'support-text': 'Unifile is completely free and unlimited, but if you like this application, you can support the developer with a donation.',
            'donate-btn': 'DONATE',
            'github-btn': 'STAR ON GITHUB',
            'donate-button': 'Donate',
            
            // Footer
            'footer-copyright': '© 2023 Unifile. All rights reserved.',
            'footer-legal': 'Legal links',
            'privacy-link': 'Privacy Policy',
            'terms-link': 'Terms and Conditions',
            'contact-title': 'Contact & Support',
            'privacy-policy': 'Privacy Policy',
            'terms': 'Terms of Use',
            
            // Modales
            'privacy-title': 'Privacy Policy',
            'privacy-content': 'Unifile takes your privacy very seriously...',
            'terms-title': 'Terms of Use',
            'terms-content': 'Last updated: April 18, 2025...',
            'close': 'Close'
        }
    }
};

// Attendre que le DOM soit chargé
document.addEventListener('DOMContentLoaded', function() {
    // Initialiser l'interface avec la langue par défaut (français)
    translateUI(i18n.currentLang);
    
    // Ajouter l'attribut data-active au sélecteur de langue pour l'animation
    document.querySelector('.language-switch').setAttribute('data-active', i18n.currentLang);
    
    // Ajouter les événements pour changer de langue
    document.querySelectorAll('.language-switch button').forEach(button => {
        button.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            if (lang !== i18n.currentLang) {
                // Ajouter l'animation pour le déplacement du sélecteur
                const switchElement = document.querySelector('.language-switch');
                switchElement.setAttribute('data-active', lang);
                
                // Mettre à jour la classe active sur les boutons
                document.querySelector('.language-switch button.active').classList.remove('active');
                this.classList.add('active');
                
                // Changer la langue après une légère temporisation pour que l'animation soit visible
                setTimeout(() => {
                    translateUI(lang);
                    i18n.currentLang = lang;
                }, 300); // Délai pour que l'animation soit visible avant le changement de texte
            }
        });
    });
    
    // Initialiser le menu hamburger
    initHamburgerMenu();
    
    // Initialiser le lecteur vidéo
    initVideoPlayer();
    
    // Initialiser les modales
    initModals();
    
    // Animation des connexions entre les éléments de la timeline
    animateTimelineConnectors();
    
    // Activer le parallaxe pour les éléments qui le supportent
    initParallax();
});

// Fonction pour initialiser le menu hamburger sur mobile
function initHamburgerMenu() {
    const hamburgerButton = document.createElement('div');
    hamburgerButton.className = 'hamburger-menu';
    hamburgerButton.innerHTML = '<span></span><span></span><span></span>';
    
    const navBar = document.querySelector('.glass-nav');
    const navLinks = document.querySelector('.nav-links');
    const languageSwitch = document.querySelector('.language-switch');
    
    // Insérer le menu hamburger avant le sélecteur de langue
    navBar.insertBefore(hamburgerButton, languageSwitch);
    
    // Ajouter l'événement de clic pour afficher/masquer le menu
    hamburgerButton.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });
    
    // Fermer le menu après un clic sur un lien
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', function() {
            navLinks.classList.remove('active');
        });
    });
    
    // Fermer le menu quand on clique en dehors
    document.addEventListener('click', function(event) {
        const isClickInside = navLinks.contains(event.target) || hamburgerButton.contains(event.target);
        if (!isClickInside && navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
        }
    });
}

// Fonction pour traduire tous les éléments de l'interface
function translateUI(lang) {
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (i18n.translations[lang] && i18n.translations[lang][key]) {
            if (element.tagName === 'INPUT' && element.type === 'placeholder') {
                element.placeholder = i18n.translations[lang][key];
            } else {
                element.textContent = i18n.translations[lang][key];
            }
        }
    });
    
    // Mettre à jour la langue du document
    document.documentElement.lang = lang;
}

// Initialisation du lecteur vidéo personnalisé
function initVideoPlayer() {
    const video = document.getElementById('demo-video');
    const playPauseBtn = document.getElementById('play-pause');
    const progress = document.querySelector('.progress');
    const progressBar = document.querySelector('.progress-bar');
    const timeDisplay = document.querySelector('.time-display');
    const timeTooltip = document.querySelector('.time-tooltip');
    const fullscreenBtn = document.getElementById('fullscreen');
    
    // Fonction pour formater le temps en minutes:secondes
    function formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        seconds = Math.floor(seconds % 60);
        return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }
    
    // Événement pour le bouton play/pause
    playPauseBtn.addEventListener('click', function() {
        if (video.paused) {
            video.play();
            playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
        } else {
            video.pause();
            playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
        }
    });
    
    // Click sur la vidéo pour play/pause
    video.addEventListener('click', function() {
        if (video.paused) {
            video.play();
            playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
        } else {
            video.pause();
            playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
        }
    });
    
    // Mettre à jour la barre de progression pendant la lecture
    video.addEventListener('timeupdate', function() {
        const percent = (video.currentTime / video.duration) * 100;
        progress.style.width = `${percent}%`;
        timeDisplay.textContent = `${formatTime(video.currentTime)} / ${formatTime(video.duration)}`;
    });
    
    // Charger les métadonnées de la vidéo
    video.addEventListener('loadedmetadata', function() {
        timeDisplay.textContent = `00:00 / ${formatTime(video.duration)}`;
    });
    
    // Permettre de cliquer sur la barre de progression pour sauter à une position
    progressBar.addEventListener('click', function(e) {
        const pos = (e.offsetX / progressBar.offsetWidth);
        video.currentTime = pos * video.duration;
    });
    
    // Afficher le tooltip sur la barre de progression
    progressBar.addEventListener('mousemove', function(e) {
        const pos = (e.offsetX / progressBar.offsetWidth);
        const time = pos * video.duration;
        timeTooltip.textContent = formatTime(time);
        timeTooltip.style.left = `${e.offsetX}px`;
        timeTooltip.style.display = 'block';
    });
    
    // Masquer le tooltip quand la souris quitte la barre de progression
    progressBar.addEventListener('mouseleave', function() {
        timeTooltip.style.display = 'none';
    });
    
    // Bouton plein écran
    fullscreenBtn.addEventListener('click', function() {
        if (video.requestFullscreen) {
            video.requestFullscreen();
        } else if (video.webkitRequestFullscreen) {
            video.webkitRequestFullscreen();
        } else if (video.msRequestFullscreen) {
            video.msRequestFullscreen();
        }
    });
    
    // Mettre en pause la vidéo quand elle est terminée
    video.addEventListener('ended', function() {
        playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
    });
}

// Initialisation des modales
function initModals() {
    const privacyLink = document.getElementById('privacy-link');
    const termsLink = document.getElementById('terms-link');
    const privacyModal = document.getElementById('privacy-modal');
    const termsModal = document.getElementById('terms-modal');
    const closeButtons = document.querySelectorAll('.close-modal');
    
    // S'assurer que le contenu des modales est correctement chargé
    function preloadModalContent() {
        const modalBodies = document.querySelectorAll('.modal-body');
        modalBodies.forEach(body => {
            // Force le rendu du contenu
            body.style.display = 'block';
            body.style.visibility = 'visible';
            body.style.opacity = '1';
        });
    }
    
    // Précharger le contenu des modales après le chargement de la page
    setTimeout(preloadModalContent, 1000);
    
    // Ouvrir la modale de confidentialité
    if (privacyLink) {
        privacyLink.addEventListener('click', function(e) {
            e.preventDefault();
            privacyModal.style.display = 'flex'; // Utiliser flex pour centrer
            document.body.classList.add('modal-open');
            // Ajouter un délai pour l'animation
            setTimeout(() => {
                privacyModal.querySelector('.modal-content').classList.add('active');
                // S'assurer que le contenu est visible
                privacyModal.querySelector('.modal-body').style.display = 'block';
                privacyModal.querySelector('.modal-body').style.visibility = 'visible';
                privacyModal.querySelector('.modal-body').style.opacity = '1';
                // Défiler vers le haut de la modale
                privacyModal.querySelector('.modal-body').scrollTop = 0;
            }, 10);
        });
    }
    
    // Ouvrir la modale de conditions
    if (termsLink) {
        termsLink.addEventListener('click', function(e) {
            e.preventDefault();
            termsModal.style.display = 'flex'; // Utiliser flex pour centrer
            document.body.classList.add('modal-open');
            // Ajouter un délai pour l'animation
            setTimeout(() => {
                termsModal.querySelector('.modal-content').classList.add('active');
                // S'assurer que le contenu est visible
                termsModal.querySelector('.modal-body').style.display = 'block';
                termsModal.querySelector('.modal-body').style.visibility = 'visible';
                termsModal.querySelector('.modal-body').style.opacity = '1';
                // Défiler vers le haut de la modale
                termsModal.querySelector('.modal-body').scrollTop = 0;
            }, 10);
        });
    }
    
    // Fermer les modales
    closeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const modal = this.closest('.modal');
            modal.querySelector('.modal-content').classList.remove('active');
            
            // Attendre la fin de l'animation avant de cacher la modale
            setTimeout(() => {
                modal.style.display = 'none';
                document.body.classList.remove('modal-open');
            }, 300);
        });
    });
    
    // Fermer les modales en cliquant en dehors
    window.addEventListener('click', function(e) {
        if (e.target.classList.contains('modal')) {
            const modal = e.target;
            modal.querySelector('.modal-content').classList.remove('active');
            
            // Attendre la fin de l'animation avant de cacher la modale
            setTimeout(() => {
                modal.style.display = 'none';
                document.body.classList.remove('modal-open');
            }, 300);
        }
    });
}

// Fonction pour animer les connexions dans la timeline
function animateTimelineConnectors() {
    // Code d'animation des connecteurs de la timeline
    // ...
}

// Effet de parallaxe au défilement
function initParallax() {
    const parallaxBackground = document.querySelector('.parallax-background');
    
    window.addEventListener('scroll', function() {
        const scrollY = window.scrollY;
        parallaxBackground.style.transform = `translateY(${scrollY * 0.3}px)`;
        
        // Parallaxe pour les éléments avec data-parallax
        document.querySelectorAll('[data-parallax]').forEach(element => {
            const speed = element.getAttribute('data-parallax') * 0.03;
            const yPos = -(scrollY * speed);
            element.style.transform = `translateY(${yPos}px)`;
        });
    });
}

// Révélation des éléments au scroll
function initScrollReveal() {
    const revealElements = document.querySelectorAll('.timeline-item, .feature-highlight, .step, .advantage-card');
    
    const revealOnScroll = function() {
        const windowHeight = window.innerHeight;
        const windowTop = window.scrollY;
        const windowBottom = windowTop + windowHeight;
        
        revealElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top + windowTop;
            const elementHeight = element.offsetHeight;
            const elementBottom = elementTop + elementHeight;
            
            // Si l'élément est visible dans la fenêtre
            if (elementTop < windowBottom - 100 && elementBottom > windowTop + 100) {
                element.classList.add('revealed');
            }
        });
    };
    
    // Révéler les éléments visibles au chargement initial
    setTimeout(revealOnScroll, 300);
    
    // Révéler les éléments au défilement
    window.addEventListener('scroll', revealOnScroll);
}