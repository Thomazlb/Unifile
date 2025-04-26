// Attendre que le DOM soit complètement chargé
document.addEventListener('DOMContentLoaded', () => {
    // Initialisation des variables
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const languageToggle = document.querySelector('.toggle-pill');
    const toggleSlider = document.querySelector('.toggle-slider');
    const parallaxBg = document.querySelector('.parallax-bg');
    const video = document.getElementById('demo-video');
    const playBtn = document.getElementById('play-btn');
    const fullscreenBtn = document.getElementById('fullscreen-btn');
    const progressFill = document.querySelector('.progress-fill');
    const progressBar = document.querySelector('.progress-bar');
    const tooltip = document.querySelector('.tooltip');
    const timeCode = document.querySelector('.time-code');
    const privacyModal = document.querySelector('.privacy-modal');
    const termsModal = document.querySelector('.terms-modal');
    const privacyTrigger = document.querySelector('.privacy-modal-trigger');
    const termsTrigger = document.querySelector('.terms-modal-trigger');
    const closeModals = document.querySelectorAll('.close-modal');
    
    // Initialisation de la langue
    let currentLang = 'fr'; // Par défaut en français
    
    // Fonction pour traduire la page
    const translatePage = (lang) => {
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (lang === 'fr' && fr[key]) {
                element.innerHTML = fr[key];
            } else if (lang === 'en' && en[key]) {
                element.innerHTML = en[key];
            }
        });
        
        // Sauvegarde de la préférence de langue
        localStorage.setItem('unifile-language', lang);
        currentLang = lang;
        
        // Mise à jour de l'attribut lang sur l'élément HTML
        document.documentElement.setAttribute('lang', lang);
    };
    
    // Charger la langue préférée de l'utilisateur s'il y en a une
    const savedLang = localStorage.getItem('unifile-language');
    if (savedLang) {
        currentLang = savedLang;
        if (savedLang === 'en') {
            // Ajuster le toggle pour l'anglais
            const spans = languageToggle.querySelectorAll('span');
            spans[0].classList.remove('active');
            spans[1].classList.add('active');
            toggleSlider.style.left = 'calc(50% - 2px)';
        }
        translatePage(currentLang);
    }
    
    // Menu mobile
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', () => {
            mobileNav.classList.toggle('active');
        });
    }
    
    // Sélecteur de langue
    if (languageToggle) {
        languageToggle.addEventListener('click', () => {
            const spans = languageToggle.querySelectorAll('span');
            spans.forEach(span => span.classList.toggle('active'));
            
            if (toggleSlider.style.left === '2px' || toggleSlider.style.left === '') {
                toggleSlider.style.left = 'calc(50% - 2px)';
                translatePage('en');
            } else {
                toggleSlider.style.left = '2px';
                translatePage('fr');
            }
        });
    }
    
    // Effet parallax
    if (parallaxBg) {
        document.addEventListener('mousemove', (e) => {
            const x = e.clientX / window.innerWidth;
            const y = e.clientY / window.innerHeight;
            
            const layer2 = document.querySelector('.layer-2');
            const layer3 = document.querySelector('.layer-3');
            
            layer2.style.transform = `translateX(${-x * 20}px) translateY(${-y * 20}px)`;
            layer3.style.transform = `translateX(${x * 20}px) translateY(${y * 20}px)`;
        });
    }
    
    // Contrôles vidéo
    if (video) {
        // Jouer/Pause
        playBtn.addEventListener('click', togglePlay);
        video.addEventListener('click', togglePlay);
        
        function togglePlay() {
            if (video.paused || video.ended) {
                video.play();
                playBtn.innerHTML = '<i class="fas fa-pause"></i>';
            } else {
                video.pause();
                playBtn.innerHTML = '<i class="fas fa-play"></i>';
            }
        }
        
        // Mise à jour de la progression
        video.addEventListener('timeupdate', updateProgress);
        
        function updateProgress() {
            const percent = (video.currentTime / video.duration) * 100;
            progressFill.style.width = `${percent}%`;
            
            // Mise à jour du timecode
            const currentMinutes = Math.floor(video.currentTime / 60);
            const currentSeconds = Math.floor(video.currentTime % 60);
            const durationMinutes = Math.floor(video.duration / 60) || 0;
            const durationSeconds = Math.floor(video.duration % 60) || 0;
            
            timeCode.textContent = `${currentMinutes}:${currentSeconds < 10 ? '0' + currentSeconds : currentSeconds} / ${durationMinutes}:${durationSeconds < 10 ? '0' + durationSeconds : durationSeconds}`;
        }
        
        // Clic sur la barre de progression
        progressBar.addEventListener('click', setProgress);
        
        function setProgress(e) {
            const width = this.clientWidth;
            const clickX = e.offsetX;
            const duration = video.duration;
            
            video.currentTime = (clickX / width) * duration;
        }
        
        // Tooltip sur la barre de progression
        progressBar.addEventListener('mousemove', (e) => {
            const percent = (e.offsetX / progressBar.clientWidth) * 100;
            tooltip.style.left = `${percent}%`;
            
            const time = (e.offsetX / progressBar.clientWidth) * video.duration;
            const minutes = Math.floor(time / 60);
            const seconds = Math.floor(time % 60);
            
            tooltip.textContent = `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
        });
        
        // Plein écran
        fullscreenBtn.addEventListener('click', toggleFullscreen);
        
        function toggleFullscreen() {
            if (video.requestFullscreen) {
                video.requestFullscreen();
            } else if (video.webkitRequestFullscreen) {
                video.webkitRequestFullscreen();
            } else if (video.msRequestFullscreen) {
                video.msRequestFullscreen();
            }
        }
    }
    
    // Animation au défilement
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.timeline-item, .step, .installation-card, .advantage-card');
        
        elements.forEach(item => {
            const itemTop = item.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (itemTop < windowHeight * 0.8) {
                item.classList.add('in-view');
            }
        });
    };
    
    // Écouteur d'événement pour déclencher l'animation au défilement
    window.addEventListener('scroll', animateOnScroll);
    
    // Déclencher une fois au chargement de la page
    animateOnScroll();
    
    // Animation des compteurs
    const animateCounters = () => {
        const counters = document.querySelectorAll('.counter');
        const speed = 100; // Plus la valeur est basse, plus c'est rapide
        
        counters.forEach(counter => {
            if (counter.classList.contains('animated')) return;
            
            const itemTop = counter.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (itemTop < windowHeight * 0.8) {
                const target = +counter.getAttribute('data-target');
                const count = +counter.innerText;
                const increment = target / speed;
                
                if (count < target) {
                    counter.innerText = Math.ceil(count + increment);
                    counter.classList.add('animated');
                    setTimeout(() => {
                        counter.classList.remove('animated');
                        animateCounters();
                    }, 20);
                } else {
                    counter.innerText = target;
                }
            }
        });
    };
    
    // Écouteur d'événement pour déclencher l'animation des compteurs
    window.addEventListener('scroll', animateCounters);
    
    // Modales
    if (privacyTrigger && privacyModal) {
        privacyTrigger.addEventListener('click', (e) => {
            e.preventDefault();
            privacyModal.classList.add('active');
        });
    }
    
    if (termsTrigger && termsModal) {
        termsTrigger.addEventListener('click', (e) => {
            e.preventDefault();
            termsModal.classList.add('active');
        });
    }
    
    closeModals.forEach(btn => {
        btn.addEventListener('click', () => {
            privacyModal.classList.remove('active');
            termsModal.classList.remove('active');
        });
    });
    
    // Fermeture des modales en cliquant en dehors
    window.addEventListener('click', (e) => {
        if (e.target === privacyModal) {
            privacyModal.classList.remove('active');
        }
        if (e.target === termsModal) {
            termsModal.classList.remove('active');
        }
    });
    
    // Animation des widgets hero au survol sur desktop
    const widgets = document.querySelectorAll('.widget');
    
    if (window.innerWidth > 768) {
        widgets.forEach(widget => {
            widget.addEventListener('mouseenter', () => {
                const icon = widget.querySelector('.widget-icon i');
                icon.classList.add('fa-beat');
                setTimeout(() => {
                    icon.classList.remove('fa-beat');
                }, 1000);
            });
        });
    } else {
        // Sur mobile, activer l'animation au tap
        widgets.forEach(widget => {
            widget.addEventListener('click', () => {
                const icon = widget.querySelector('.widget-icon i');
                icon.classList.add('fa-beat');
                setTimeout(() => {
                    icon.classList.remove('fa-beat');
                }, 1000);
            });
        });
    }
    
    // Amélioration de l'expérience tactile pour les contrôles vidéo sur mobile
    if (video && 'ontouchstart' in window) {
        video.addEventListener('touchstart', () => {
            const videoControls = document.querySelector('.video-controls');
            if (videoControls.style.opacity === '1') {
                videoControls.style.opacity = '0';
            } else {
                videoControls.style.opacity = '1';
                setTimeout(() => {
                    videoControls.style.opacity = '0';
                }, 3000);
            }
        });
    }
    
    // Gestion améliorée du menu mobile
    if (mobileMenuToggle) {
        const headerHeight = document.querySelector('.glass-nav').offsetHeight;
        const mobileNav = document.querySelector('.mobile-nav');
        
        mobileMenuToggle.addEventListener('click', () => {
            mobileNav.classList.toggle('active');
            if (mobileNav.classList.contains('active')) {
                mobileNav.style.top = `${headerHeight}px`;
            }
        });
        
        // Fermer le menu lors du clic sur un lien
        const mobileNavLinks = document.querySelectorAll('.mobile-nav a');
        mobileNavLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileNav.classList.remove('active');
            });
        });
    }
    
    // Ajout de classes d'animation aux boutons de téléchargement
    const downloadBtns = document.querySelectorAll('.primary-btn');
    downloadBtns.forEach(btn => {
        btn.addEventListener('mouseenter', () => {
            btn.classList.add('pulse-once');
            setTimeout(() => {
                btn.classList.remove('pulse-once');
            }, 1000);
        });
    });
    
    // Détection d'orientation pour les appareils mobiles
    window.addEventListener('orientationchange', () => {
        // Recalculer les animations au défilement après changement d'orientation
        setTimeout(animateOnScroll, 300);
    });
    
    // Optimisation tactile pour les cartes d'installation
    const installationCards = document.querySelectorAll('.installation-card');
    if ('ontouchstart' in window) {
        installationCards.forEach(card => {
            card.addEventListener('touchstart', () => {
                card.style.transform = 'scale(0.98)';
            });
            
            card.addEventListener('touchend', () => {
                card.style.transform = 'scale(1)';
            });
        });
    }
    
    // Appliquer la traduction initiale
    translatePage(currentLang);
});