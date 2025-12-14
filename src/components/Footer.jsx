import { useState, useEffect } from 'react'
import './Footer.css'

const Footer = () => {
    const [os, setOs] = useState('mac')

    useEffect(() => {
        const userAgent = navigator.userAgent.toLowerCase()
        if (userAgent.includes('win')) {
            setOs('windows')
        } else {
            setOs('mac')
        }
    }, [])

    const macIcon = (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
        </svg>
    )

    const windowsIcon = (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801" />
        </svg>
    )

    return (
        <footer className="footer" id="download">
            <div className="footer-bg"></div>
            <div className="container">
                <div className="footer-cta">
                    <h2 className="footer-cta-title">
                        Prêt à simplifier votre workflow ?
                    </h2>
                    <p className="footer-cta-subtitle">
                        Téléchargez Unifile gratuitement et commencez à convertir, compresser et plus.
                        Fonctionne 100% hors ligne. Vos fichiers ne quittent jamais votre appareil.
                    </p>

                    <div className="footer-download-grid">
                        {/* Primary download based on OS */}
                        <a
                            href={os === 'windows'
                                ? 'https://github.com/Thomazlb/Unifile/releases/latest/download/Unifile.exe'
                                : 'https://github.com/Thomazlb/Unifile/releases/latest/download/Unifile.dmg'}
                            className={`download-card primary ${os}`}
                        >
                            <div className="download-card-icon">
                                {os === 'windows' ? windowsIcon : macIcon}
                            </div>
                            <div className="download-card-info">
                                <span className="download-card-label">Télécharger pour</span>
                                <span className="download-card-platform">
                                    {os === 'windows' ? 'Windows' : 'macOS'}
                                </span>
                            </div>
                            <div className="download-card-arrow">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </div>
                        </a>

                        {/* Secondary download for other OS */}
                        <a
                            href={os === 'windows'
                                ? 'https://github.com/Thomazlb/Unifile/releases/latest/download/Unifile.dmg'
                                : 'https://github.com/Thomazlb/Unifile/releases/latest/download/Unifile.exe'}
                            className={`download-card secondary ${os === 'windows' ? 'mac' : 'windows'}`}
                        >
                            <div className="download-card-icon">
                                {os === 'windows' ? macIcon : windowsIcon}
                            </div>
                            <div className="download-card-info">
                                <span className="download-card-label">Également disponible pour</span>
                                <span className="download-card-platform">
                                    {os === 'windows' ? 'macOS' : 'Windows'}
                                </span>
                            </div>
                        </a>
                    </div>

                    <div className="footer-features">
                        <div className="footer-feature">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <polyline points="20,6 9,17 4,12" />
                            </svg>
                            <span>100% Gratuit</span>
                        </div>
                        <div className="footer-feature">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <polyline points="20,6 9,17 4,12" />
                            </svg>
                            <span>Fonctionne hors ligne</span>
                        </div>
                        <div className="footer-feature">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <polyline points="20,6 9,17 4,12" />
                            </svg>
                            <span>Pas de compte requis</span>
                        </div>
                    </div>
                </div>

                <div className="footer-divider"></div>

                <div className="footer-bottom">
                    <div className="footer-brand">
                        <img src="/assets/Unifile.svg" alt="Unifile" className="footer-logo" />
                        <span className="footer-brand-text">Unifile</span>
                    </div>

                    <div className="footer-copyright">
                        © {new Date().getFullYear()} Unifile par Thomas ALZIB. Tous droits réservés.
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
