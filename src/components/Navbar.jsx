import { useState, useEffect } from 'react'
import './Navbar.css'

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [os, setOs] = useState('mac')

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)

        // Detect OS
        const userAgent = navigator.userAgent.toLowerCase()
        if (userAgent.includes('win')) {
            setOs('windows')
        } else {
            setOs('mac')
        }

        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen)
    }

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false)
    }

    const scrollToSection = (e, sectionId) => {
        e.preventDefault()
        closeMobileMenu()

        const section = document.getElementById(sectionId)
        if (section) {
            // Get the section's position relative to the content
            const rect = section.getBoundingClientRect()
            const scrollTop = window.scrollY
            // Calculate target scroll position (accounting for the parallax effect)
            const targetScroll = scrollTop + rect.top - window.innerHeight

            window.scrollTo({
                top: Math.max(0, targetScroll + window.innerHeight),
                behavior: 'smooth'
            })
        }
    }

    return (
        <>
            <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
                <div className="navbar-container">
                    <a href="#" className="navbar-logo" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}>
                        <img src="/assets/Unifile.svg" alt="Unifile" className="logo-icon" />
                        <span className="logo-text">Unifile</span>
                    </a>

                    <div className="navbar-links">
                        <a href="#features" onClick={(e) => scrollToSection(e, 'features')}>Fonctionnalités</a>
                        <a href="#how-it-works" onClick={(e) => scrollToSection(e, 'how-it-works')}>Comment ça marche</a>
                    </div>

                    <div className="navbar-actions">
                        <a href={os === 'windows'
                            ? 'https://github.com/Thomazlb/Unifile/releases/latest/download/Unifile.exe'
                            : 'https://github.com/Thomazlb/Unifile/releases/latest/download/Unifile.dmg'}
                            className="btn btn-primary">
                            {os === 'windows' ? (
                                <>
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801" />
                                    </svg>
                                    Télécharger pour Windows
                                </>
                            ) : (
                                <>
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                                    </svg>
                                    Télécharger pour macOS
                                </>
                            )}
                        </a>
                    </div>

                    <button
                        className={`mobile-menu-toggle ${isMobileMenuOpen ? 'active' : ''}`}
                        onClick={toggleMobileMenu}
                        aria-label="Toggle menu"
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <div
                className={`mobile-menu-overlay ${isMobileMenuOpen ? 'active' : ''}`}
                onClick={closeMobileMenu}
            />

            {/* Mobile Menu Drawer */}
            <div className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}>
                <div className="mobile-menu-header">
                    <a href="#" className="navbar-logo" onClick={(e) => { e.preventDefault(); closeMobileMenu(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}>
                        <img src="/assets/Unifile.svg" alt="Unifile" className="logo-icon" />
                        <span className="logo-text">Unifile</span>
                    </a>
                </div>
                <div className="mobile-menu-links">
                    <a href="#features" onClick={(e) => scrollToSection(e, 'features')}>Fonctionnalités</a>
                    <a href="#how-it-works" onClick={(e) => scrollToSection(e, 'how-it-works')}>Comment ça marche</a>
                </div>
                <div className="mobile-menu-actions">
                    <a
                        href={os === 'windows'
                            ? 'https://github.com/Thomazlb/Unifile/releases/latest/download/Unifile.exe'
                            : 'https://github.com/Thomazlb/Unifile/releases/latest/download/Unifile.dmg'}
                        className="btn btn-primary btn-lg"
                        onClick={closeMobileMenu}
                    >
                        {os === 'windows' ? 'Télécharger pour Windows' : 'Télécharger pour macOS'}
                    </a>
                </div>
            </div>
        </>
    )
}

export default Navbar

