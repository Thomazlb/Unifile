import { useScrollAnimation } from '../hooks/useScrollAnimation'
import './HowItWorks.css'

const steps = [
    {
        number: '01',
        title: 'Glisser-Déposer',
        description: 'Glissez simplement vos fichiers dans Unifile ou cliquez pour parcourir. Nous supportons des centaines de formats : images, vidéos, audio et documents.',
        icon: (
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="17,8 12,3 7,8" />
                <line x1="12" y1="3" x2="12" y2="15" />
            </svg>
        )
    },
    {
        number: '02',
        title: 'Choisir l\'Action',
        description: 'Sélectionnez ce que vous voulez faire : convertir dans un nouveau format, compresser, recadrer ou archiver en ZIP.',
        icon: (
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="3" />
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
            </svg>
        )
    },
    {
        number: '03',
        title: 'Obtenir le Résultat',
        description: 'Cliquez sur le bouton et regardez la magie opérer. Vos fichiers sont traités localement et prêts en quelques secondes.',
        icon: (
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22,4 12,14.01 9,11.01" />
            </svg>
        )
    }
]

const HowItWorks = () => {
    const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation()
    const { ref: stepsRef, isVisible: stepsVisible } = useScrollAnimation({ threshold: 0.1 })

    return (
        <section className="how-it-works section" id="how-it-works">
            <div className="container">
                <div
                    ref={headerRef}
                    className={`how-header animate-fade-up ${headerVisible ? 'visible' : ''}`}
                >
                    <span className="how-badge">Comment ça marche</span>
                    <h2 className="how-title">
                        Simple comme{' '}
                        <span className="gradient-text">1, 2, 3</span>
                    </h2>
                    <p className="how-subtitle">
                        Pas de réglages compliqués, pas de courbe d'apprentissage. Juste des résultats.
                    </p>
                </div>

                <div className="how-steps" ref={stepsRef}>
                    {steps.map((step, index) => (
                        <div
                            key={step.number}
                            className={`step-card animate-scale ${stepsVisible ? 'visible' : ''}`}
                            style={{ transitionDelay: `${index * 150}ms` }}
                        >
                            <div className="step-icon-wrapper">
                                {step.icon}
                            </div>
                            <div className="step-number-badge">{step.number}</div>
                            <h3 className="step-title">{step.title}</h3>
                            <p className="step-description">{step.description}</p>

                            {index < steps.length - 1 && (
                                <div className="step-connector">
                                    <svg width="60" height="20" viewBox="0 0 60 20" fill="none">
                                        <path d="M0 10H50M50 10L42 4M50 10L42 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default HowItWorks

