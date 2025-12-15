import { useState, useEffect } from 'react'
import './Hero.css'

const Hero = () => {
    const [os, setOs] = useState('mac')

    useEffect(() => {
        const userAgent = navigator.userAgent.toLowerCase()
        if (userAgent.includes('win')) {
            setOs('windows')
        }
    }, [])

    return (
        <div className="hero">
            {/* Background Image */}
            <div className="hero-bg-image">
                <img
                    src="/assets/hero.png"
                    alt=""
                    className="hero-bg-img"
                />
                <div className="hero-bg-overlay"></div>
            </div>

            <div className="hero-container">
                <div className="hero-content">
                    <div className="hero-badge">
                        <span className="hero-badge-dot"></span>
                        Disponible sur macOS & Windows
                    </div>

                    <h1 className="hero-title">
                        Tous vos fichiers,
                        <br />
                        <span className="gradient-text">une seule app</span>
                    </h1>

                    <p className="hero-subtitle">
                        Convertissez, compressez, recadrez et archivez vos fichiers facilement.
                        Unifile fonctionne 100% hors ligne et protège vos données.
                    </p>

                    <div className="hero-actions">
                        <a href={os === 'windows'
                            ? 'https://github.com/Thomazlb/Unifile/releases/latest/download/Unifile.exe'
                            : 'https://github.com/Thomazlb/Unifile/releases/latest/download/Unifile.dmg'
                        } className="hero-btn primary">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                                <polyline points="7,10 12,15 17,10" />
                                <line x1="12" y1="15" x2="12" y2="3" />
                            </svg>
                            Télécharger gratuitement
                        </a>
                        <a
                            href="#features"
                            className="hero-btn secondary"
                            onClick={(e) => {
                                e.preventDefault()
                                window.scrollTo({
                                    top: window.innerHeight,
                                    behavior: 'auto'
                                })
                            }}
                        >
                            Voir les fonctionnalités
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M6 9l6 6 6-6" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="hero-scroll-indicator">
                <div className="scroll-mouse">
                    <div className="scroll-wheel"></div>
                </div>
                <span>Défiler pour explorer</span>
            </div>
        </div>
    )
}

export default Hero
