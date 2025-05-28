// Particules d'arrière-plan
class ParticleSystem {
    constructor() {
        this.container = document.getElementById('particles-container');
        this.particles = [];
        this.init();
    }

    init() {
        this.createParticles();
        this.animate();
        
        // Réagir au scroll
        window.addEventListener('scroll', this.onScroll.bind(this));
    }

    createParticles() {
        for (let i = 0; i < 50; i++) {
            this.createParticle();
        }
    }

    createParticle() {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        const size = Math.random() * 4 + 2;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.animationDuration = `${Math.random() * 20 + 10}s`;
        particle.style.animationDelay = `${Math.random() * 20}s`;
        
        this.container.appendChild(particle);
        this.particles.push(particle);
    }

    onScroll() {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        
        this.particles.forEach((particle, index) => {
            const speed = (index % 5 + 1) * 0.1;
            particle.style.transform = `translateY(${rate * speed}px)`;
        });
    }

    animate() {
        // Animation continue
        requestAnimationFrame(this.animate.bind(this));
    }
}

// Navigation
class Navigation {
    constructor() {
        this.nav = document.querySelector('.nav');
        this.mobileToggle = document.querySelector('.mobile-menu-toggle');
        this.navLinks = document.querySelector('.nav-links');
        this.init();
    }

    init() {
        this.handleScroll();
        this.handleMobileMenu();
        this.handleSmoothScroll();
        
        window.addEventListener('scroll', this.handleScroll.bind(this));
    }

    handleScroll() {
        const scrolled = window.pageYOffset;
        if (scrolled > 50) {
            this.nav.style.background = 'rgba(26, 26, 26, 0.95)';
            this.nav.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.3)';
        } else {
            this.nav.style.background = 'rgba(26, 26, 26, 0.9)';
            this.nav.style.boxShadow = 'none';
        }
    }

    handleMobileMenu() {
        if (this.mobileToggle) {
            this.mobileToggle.addEventListener('click', () => {
                this.navLinks.classList.toggle('active');
                this.mobileToggle.classList.toggle('active');
            });
        }
    }

    handleSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(anchor.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }
}

// Animations au scroll
class ScrollAnimations {
    constructor() {
        this.elements = document.querySelectorAll('.feature-card, .format-category, .tech-card');
        this.init();
    }

    init() {
        this.createObserver();
    }

    createObserver() {
        const options = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in');
                    observer.unobserve(entry.target);
                }
            });
        }, options);

        this.elements.forEach(el => {
            observer.observe(el);
        });
    }
}

// Système de téléchargement
class DownloadSystem {
    constructor() {
        this.init();
    }

    init() {
        this.detectPlatform();
        this.handleDownloadButtons();
    }

    detectPlatform() {
        const platform = this.getPlatform();
        const buttons = document.querySelectorAll('.download-btn');
        
        buttons.forEach(btn => {
            const btnPlatform = btn.getAttribute('data-platform');
            if (btnPlatform === platform) {
                btn.classList.add('recommended');
                btn.style.border = '2px solid var(--primary)';
                btn.style.background = 'rgba(74, 222, 128, 0.1)';
                
                // Ajouter un badge "Recommandé"
                const badge = document.createElement('span');
                badge.textContent = 'Recommandé';
                badge.style.cssText = `
                    position: absolute;
                    top: -8px;
                    right: 10px;
                    background: var(--primary);
                    color: var(--background);
                    padding: 4px 8px;
                    border-radius: 4px;
                    font-size: 0.7rem;
                    font-weight: 600;
                `;
                btn.style.position = 'relative';
                btn.appendChild(badge);
            }
        });
    }

    getPlatform() {
        const userAgent = navigator.userAgent.toLowerCase();
        if (userAgent.includes('mac')) return 'macos';
        if (userAgent.includes('win')) return 'windows';
        return 'windows'; // Par défaut
    }

    handleDownloadButtons() {
        document.querySelectorAll('.download-btn, .cta-primary').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                this.simulateDownload(btn);
            });
        });
    }

    simulateDownload(button) {
        const originalText = button.innerHTML;
        
        // Animation de téléchargement
        button.innerHTML = `
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" class="download-spinner">
                <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2" stroke-dasharray="60" stroke-dashoffset="60" opacity="0.3"/>
                <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2" stroke-dasharray="60" stroke-dashoffset="0" stroke-linecap="round">
                    <animate attributeName="stroke-dashoffset" values="60;0" dur="2s" repeatCount="indefinite"/>
                </circle>
            </svg>
            <span>Téléchargement...</span>
        `;
        
        button.disabled = true;
        
        // Simuler le téléchargement
        setTimeout(() => {
            button.innerHTML = `
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                </svg>
                <span>Téléchargé !</span>
            `;
            
            setTimeout(() => {
                button.innerHTML = originalText;
                button.disabled = false;
            }, 2000);
        }, 3000);
    }
}

// Effets visuels avancés
class VisualEffects {
    constructor() {
        this.init();
    }

    init() {
        this.handleMouseEffects();
        this.handleProgressAnimation();
        this.handleTypewriterEffect();
    }

    handleMouseEffects() {
        document.querySelectorAll('.feature-card, .tech-card, .format-category').forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                
                const rotateX = (y - centerY) / 10;
                const rotateY = (centerX - x) / 10;
                
                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = '';
            });
        });
    }

    handleProgressAnimation() {
        const progressBars = document.querySelectorAll('.progress-fill');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animation = 'progress 3s ease-in-out infinite';
                }
            });
        });
        
        progressBars.forEach(bar => observer.observe(bar));
    }

    handleTypewriterEffect() {
        const title = document.querySelector('.hero-title');
        if (!title) return;
        
        const lines = title.querySelectorAll('.title-line');
        let delay = 0;
        
        lines.forEach((line, index) => {
            line.style.opacity = '0';
            line.style.transform = 'translateY(20px)';
            
            setTimeout(() => {
                line.style.transition = 'all 0.8s ease';
                line.style.opacity = '1';
                line.style.transform = 'translateY(0)';
            }, delay);
            
            delay += 200;
        });
    }
}

// Système de comparaison interactif
class ComparisonTable {
    constructor() {
        this.table = document.querySelector('.comparison-table');
        this.init();
    }

    init() {
        if (!this.table) return;
        this.addInteractivity();
    }

    addInteractivity() {
        const rows = this.table.querySelectorAll('.comparison-row');
        
        rows.forEach(row => {
            row.addEventListener('mouseenter', () => {
                this.highlightRow(row);
            });
            
            row.addEventListener('mouseleave', () => {
                this.removeHighlight(row);
            });
        });
    }

    highlightRow(row) {
        row.style.background = 'rgba(74, 222, 128, 0.1)';
        row.style.transform = 'scale(1.02)';
        row.style.zIndex = '10';
        row.style.boxShadow = '0 4px 20px rgba(74, 222, 128, 0.2)';
    }

    removeHighlight(row) {
        row.style.background = '';
        row.style.transform = '';
        row.style.zIndex = '';
        row.style.boxShadow = '';
    }
}

// Gestion du mode sombre/clair (optionnel)
class ThemeManager {
    constructor() {
        this.currentTheme = 'dark';
        this.init();
    }

    init() {
        this.loadTheme();
        this.createThemeToggle();
    }

    loadTheme() {
        const savedTheme = localStorage.getItem('unifile-theme') || 'dark';
        this.setTheme(savedTheme);
    }

    setTheme(theme) {
        this.currentTheme = theme;
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('unifile-theme', theme);
    }

    createThemeToggle() {
        // Optionnel : ajouter un bouton de basculement de thème
        const toggle = document.createElement('button');
        toggle.innerHTML = '🌓';
        toggle.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: var(--surface);
            border: 1px solid var(--border);
            border-radius: 50%;
            width: 50px;
            height: 50px;
            font-size: 1.5rem;
            cursor: pointer;
            z-index: 1001;
            transition: var(--transition);
        `;
        
        toggle.addEventListener('click', () => {
            const newTheme = this.currentTheme === 'dark' ? 'light' : 'dark';
            this.setTheme(newTheme);
        });
        
        // document.body.appendChild(toggle);
    }
}

// Performance et optimisations
class PerformanceOptimizer {
    constructor() {
        this.init();
    }

    init() {
        this.lazyLoadImages();
        this.preloadCriticalResources();
        this.optimizeAnimations();
    }

    lazyLoadImages() {
        const images = document.querySelectorAll('img[data-src]');
        
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        images.forEach(img => imageObserver.observe(img));
    }

    preloadCriticalResources() {
        // Précharger les icônes et ressources critiques
        const criticalResources = ['icon.svg', 'icon.png'];
        
        criticalResources.forEach(resource => {
            const link = document.createElement('link');
            link.rel = 'preload';
            link.href = resource;
            link.as = 'image';
            document.head.appendChild(link);
        });
    }

    optimizeAnimations() {
        // Réduire les animations sur les appareils à faible performance
        if (navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4) {
            document.documentElement.style.setProperty('--transition', 'all 0.2s ease');
        }
        
        // Pause des animations quand l'onglet n'est pas visible
        document.addEventListener('visibilitychange', () => {
            if (document.hidden) {
                document.body.style.animationPlayState = 'paused';
            } else {
                document.body.style.animationPlayState = 'running';
            }
        });
    }
}

// Analytics et tracking (sans violation de la vie privée)
class Analytics {
    constructor() {
        this.events = [];
        this.init();
    }

    init() {
        this.trackBasicInteractions();
        this.trackPerformance();
    }

    trackBasicInteractions() {
        // Tracking local uniquement, aucune donnée envoyée
        document.addEventListener('click', (e) => {
            if (e.target.matches('.cta-primary, .cta-secondary, .download-btn')) {
                this.logEvent('button_click', {
                    element: e.target.className,
                    timestamp: Date.now()
                });
            }
        });
    }

    trackPerformance() {
        // Mesurer les performances de chargement
        window.addEventListener('load', () => {
            const perfData = performance.getEntriesByType('navigation')[0];
            this.logEvent('page_load', {
                loadTime: perfData.loadEventEnd - perfData.loadEventStart,
                domContentLoaded: perfData.domContentLoadedEventEnd - perfData.domContentLoadedEventStart
            });
        });
    }

    logEvent(eventName, data) {
        // Stockage local uniquement
        this.events.push({
            event: eventName,
            data: data,
            timestamp: Date.now()
        });
        
        // Garder seulement les 100 derniers événements
        if (this.events.length > 100) {
            this.events = this.events.slice(-100);
        }
        
        console.log(`[Unifile Analytics] ${eventName}:`, data);
    }
}

// Initialisation de l'application
class UnifileLandingPage {
    constructor() {
        this.init();
    }

    init() {
        // Attendre que le DOM soit prêt
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => {
                this.initializeComponents();
            });
        } else {
            this.initializeComponents();
        }
    }

    initializeComponents() {
        // Initialiser tous les composants
        new ParticleSystem();
        new Navigation();
        new ScrollAnimations();
        new DownloadSystem();
        new VisualEffects();
        new ComparisonTable();
        new ThemeManager();
        new PerformanceOptimizer();
        new Analytics();
        
        // Ajouter des événements globaux
        this.addGlobalEventListeners();
        
        console.log('🚀 Unifile Landing Page initialisée avec succès !');
    }

    addGlobalEventListeners() {
        // Gestion des erreurs globales
        window.addEventListener('error', (e) => {
            console.error('Erreur détectée:', e.error);
        });
        
        // Gestion du redimensionnement
        window.addEventListener('resize', this.debounce(() => {
            this.handleResize();
        }, 250));
        
        // Gestion des raccourcis clavier
        document.addEventListener('keydown', (e) => {
            // Ctrl/Cmd + D pour télécharger
            if ((e.ctrlKey || e.metaKey) && e.key === 'd') {
                e.preventDefault();
                document.querySelector('.cta-primary')?.click();
            }
        });
    }

    handleResize() {
        // Recalculer les animations si nécessaire
        const particles = document.querySelectorAll('.particle');
        particles.forEach(particle => {
            particle.style.left = `${Math.random() * 100}%`;
        });
    }

    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }
}

// Démarrer l'application
document.addEventListener('DOMContentLoaded', () => {
    new UnifileLandingPage();
    new FileExplorer();
});

// File Explorer System
class FileExplorer {
    constructor() {
        this.currentView = 'folders';
        this.currentCategory = null;
        this.formats = {
            images: {
                title: 'Images',
                icon: '🖼️',
                description: 'Optimisation web et traitement professionnel',
                speed: 'Jusqu\'à 100 fichiers/min',
                formats: [
                    { ext: 'JPG', icon: '🖼️', color: '#FF6B6B', description: 'Format photo standard' },
                    { ext: 'PNG', icon: '🖼️', color: '#4ECDC4', description: 'Transparence supportée' },
                    { ext: 'WebP', icon: '🌐', color: '#45B7D1', description: 'Optimisé pour le web' },
                    { ext: 'AVIF', icon: '🚀', color: '#96CEB4', description: 'Nouvelle génération' },
                    { ext: 'TIFF', icon: '📐', color: '#FECA57', description: 'Qualité professionnelle' },
                    { ext: 'BMP', icon: '🖼️', color: '#FF9FF3', description: 'Format bitmap Windows' },
                    { ext: 'ICO', icon: '🏠', color: '#54A0FF', description: 'Icônes système' },
                    { ext: 'GIF', icon: '🎬', color: '#5F27CD', description: 'Images animées' },
                    { ext: 'PSD', icon: '🎨', color: '#FC427B', description: 'Photoshop (lecture)' }
                ]
            },
            documents: {
                title: 'Documents',
                icon: '📄',
                description: 'Conversion inter-bureautique seamless',
                speed: 'Conversion instantanée < 5MB',
                formats: [
                    { ext: 'PDF', icon: '📄', color: '#DC3545', description: 'Document portable' },
                    { ext: 'DOCX', icon: '📝', color: '#2E5BFF', description: 'Microsoft Word' },
                    { ext: 'XLSX', icon: '📊', color: '#00D084', description: 'Microsoft Excel' },
                    { ext: 'PPTX', icon: '📽️', color: '#D63384', description: 'Microsoft PowerPoint' },
                    { ext: 'ODT', icon: '📄', color: '#0F6FFF', description: 'OpenDocument Text' },
                    { ext: 'TXT', icon: '📄', color: '#6C757D', description: 'Texte simple' },
                    { ext: 'HTML', icon: '🌐', color: '#FD7E14', description: 'Page web' }
                ]
            },
            videos: {
                title: 'Vidéos',
                icon: '🎬',
                description: 'Formats professionnels et cinéma',
                speed: 'Traitement temps réel',
                formats: [
                    { ext: 'MP4', icon: '🎬', color: '#FF6B6B', description: 'Standard universel' },
                    { ext: 'MOV', icon: '🎬', color: '#4ECDC4', description: 'QuickTime Apple' },
                    { ext: 'WebM', icon: '🌐', color: '#45B7D1', description: 'Optimisé web' },
                    { ext: 'AVI', icon: '🎬', color: '#96CEB4', description: 'Audio Video Interleave' },
                    { ext: 'MKV', icon: '🎬', color: '#FECA57', description: 'Matroska Video' },
                    { ext: 'R3D', icon: '🎥', color: '#FC427B', description: 'RED Camera (Pro)' },
                    { ext: 'MXF', icon: '🎥', color: '#5F27CD', description: 'Material Exchange (Pro)' },
                    { ext: 'GIF', icon: '🎞️', color: '#FF9FF3', description: 'Animation courte' }
                ]
            },
            audio: {
                title: 'Audio',
                icon: '🎵',
                description: 'Qualité audiophile et streaming',
                speed: 'Batch processing ultra-rapide',
                formats: [
                    { ext: 'MP3', icon: '🎵', color: '#FF6B6B', description: 'Standard universel' },
                    { ext: 'WAV', icon: '🎵', color: '#4ECDC4', description: 'Non compressé' },
                    { ext: 'FLAC', icon: '🎵', color: '#45B7D1', description: 'Lossless audiophile' },
                    { ext: 'AAC', icon: '🎵', color: '#96CEB4', description: 'Advanced Audio Coding' },
                    { ext: 'OGG', icon: '🎵', color: '#FECA57', description: 'Open source' },
                    { ext: 'M4A', icon: '🎵', color: '#FC427B', description: 'iTunes compatible' }
                ]
            }
        };
        
        this.init();
    }

    init() {
        this.bindEvents();
        this.updateAddressBar();
    }    bindEvents() {
        // Folder clicks
        document.querySelectorAll('.file-item.folder').forEach(folder => {
            folder.addEventListener('click', (e) => {
                const category = e.currentTarget.dataset.category;
                this.openCategory(category);
            });
        });

        // Back button
        document.addEventListener('click', (e) => {
            if (e.target.closest('.back-to-folders')) {
                this.backToFolders();
            }
        });

        // Navigation buttons
        document.getElementById('back-btn').addEventListener('click', () => {
            if (this.currentView === 'formats') {
                this.backToFolders();
            }
        });

        // View options
        document.querySelectorAll('.view-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const view = e.currentTarget.dataset.view;
                this.changeView(view);
            });
        });
    }

    openCategory(category) {
        this.currentCategory = category;
        this.currentView = 'formats';
        
        // Hide folders view
        document.getElementById('folders-view').classList.remove('active');
        
        // Show formats view
        document.getElementById('formats-view').classList.add('active');
          // Update title
        const categoryData = this.formats[category];
        const titleElement = document.getElementById('format-title');
        const countElement = document.getElementById('format-count');
        
        if (titleElement) {
            titleElement.textContent = categoryData.title;
        }
        if (countElement) {
            countElement.textContent = `${categoryData.formats.length} formats`;
        }
        
        // Generate format files
        this.generateFormatFiles(category);
        
        // Update address bar
        this.updateAddressBar();
        
        // Animate entrance
        this.animateFormatEntrance();
    }    generateFormatFiles(category) {
        const categoryData = this.formats[category];
        const grid = document.getElementById('format-files');
        
        if (!grid) {
            console.error('Format files grid not found');
            return;
        }
        
        grid.innerHTML = '';
        
        categoryData.formats.forEach((format, index) => {
            const fileItem = document.createElement('div');
            fileItem.className = 'format-file-item';
            
            // Initial state for bounce animation
            fileItem.style.opacity = '0';
            fileItem.style.transform = 'translateY(50px) scale(0.8)';
            fileItem.style.transition = 'all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
            
            fileItem.innerHTML = `
                <div class="format-file-icon" style="background: linear-gradient(135deg, ${format.color}, ${this.lightenColor(format.color, 20)});">
                    <span class="file-type-icon">${format.icon}</span>
                    <span class="file-extension">.${format.ext.toLowerCase()}</span>
                </div>
                <div class="format-file-info">
                    <div class="format-name">${format.ext}</div>
                    <div class="format-description">${format.description}</div>
                </div>
            `;
            
            // Add click event for conversion demo
            fileItem.addEventListener('click', () => {
                this.showConversionDemo(format, categoryData);
            });
            
            grid.appendChild(fileItem);
            
            // Trigger bounce animation with progressive delay
            setTimeout(() => {
                fileItem.style.opacity = '1';
                fileItem.style.transform = 'translateY(0) scale(1)';
                
                // Add a bounce effect
                setTimeout(() => {
                    fileItem.style.transform = 'translateY(-10px) scale(1.05)';
                    setTimeout(() => {
                        fileItem.style.transform = 'translateY(0) scale(1)';
                    }, 150);
                }, 200);
                
            }, index * 120 + 200); // Progressive delay: 200ms base + 120ms per item
        });
    }

    showConversionDemo(sourceFormat, categoryData) {
        const demo = document.getElementById('conversion-demo');
        const sourcePreview = document.getElementById('source-preview');
        const targetPreview = document.getElementById('target-preview');
        const conversionInfo = document.getElementById('conversion-info');
        const speedElement = document.getElementById('conversion-speed');
        
        // Source file preview
        sourcePreview.innerHTML = `
            <div class="demo-file-icon" style="background: linear-gradient(135deg, ${sourceFormat.color}, ${this.lightenColor(sourceFormat.color, 20)});">
                <span class="demo-file-type">${sourceFormat.icon}</span>
                <span class="demo-file-ext">.${sourceFormat.ext.toLowerCase()}</span>
            </div>
        `;
        
        // Get a random target format from the same category
        const otherFormats = categoryData.formats.filter(f => f.ext !== sourceFormat.ext);
        const targetFormat = otherFormats[Math.floor(Math.random() * otherFormats.length)];
        
        // Target file preview
        targetPreview.innerHTML = `
            <div class="demo-file-icon" style="background: linear-gradient(135deg, ${targetFormat.color}, ${this.lightenColor(targetFormat.color, 20)});">
                <span class="demo-file-type">${targetFormat.icon}</span>
                <span class="demo-file-ext">.${targetFormat.ext.toLowerCase()}</span>
            </div>
        `;
        
        // Update speed info
        speedElement.textContent = categoryData.speed;
        
        // Show demo with animation
        demo.classList.add('active');
        
        // Animate conversion
        this.animateConversion();
    }

    animateConversion() {
        const arrow = document.querySelector('.conversion-arrow svg');
        arrow.style.transform = 'scale(1.2)';
        arrow.style.color = '#4ECDC4';
        
        setTimeout(() => {
            arrow.style.transform = 'scale(1)';
            arrow.style.color = '';
        }, 300);
    }

    backToFolders() {
        this.currentView = 'folders';
        this.currentCategory = null;
        
        // Hide formats view
        document.getElementById('formats-view').classList.remove('active');
        
        // Show folders view
        document.getElementById('folders-view').classList.add('active');
        
        // Hide conversion demo
        document.getElementById('conversion-demo').classList.remove('active');
        
        // Update address bar
        this.updateAddressBar();
    }

    changeView(viewType) {
        document.querySelectorAll('.view-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        
        document.querySelector(`[data-view="${viewType}"]`).classList.add('active');
        
        // Change grid layout
        const grid = document.querySelector('.file-grid, .format-files-grid');
        if (grid) {
            grid.classList.toggle('list-view', viewType === 'list');
        }
    }    updateAddressBar() {
        const currentPathElement = document.getElementById('current-path');
        
        if (!currentPathElement) return;
        
        if (this.currentView === 'folders') {
            currentPathElement.textContent = 'Formats Supportés';
        } else if (this.currentCategory && this.formats[this.currentCategory]) {
            currentPathElement.textContent = `Formats Supportés > ${this.formats[this.currentCategory].title}`;
        }
    }animateFormatEntrance() {
        const grid = document.getElementById('format-files');
        
        if (!grid) return;
        
        // Add entrance animation to the entire grid
        grid.style.transform = 'scale(0.9) translateY(20px)';
        grid.style.opacity = '0.8';
        grid.style.transition = 'all 0.6s ease-out';
        
        setTimeout(() => {
            grid.style.transform = 'scale(1) translateY(0)';
            grid.style.opacity = '1';
        }, 100);
    }

    lightenColor(hex, percent) {
        const num = parseInt(hex.replace("#", ""), 16);
        const amt = Math.round(2.55 * percent);
        const R = (num >> 16) + amt;
        const G = (num >> 8 & 0x00FF) + amt;
        const B = (num & 0x0000FF) + amt;
        return "#" + (0x1000000 + (R < 255 ? R < 1 ? 0 : R : 255) * 0x10000 +
            (G < 255 ? G < 1 ? 0 : G : 255) * 0x100 +
            (B < 255 ? B < 1 ? 0 : B : 255))
            .toString(16).slice(1);
    }
}
