import { useScrollAnimation } from '../hooks/useScrollAnimation'
import './Comparison.css'

const features = [
    {
        name: 'Vie privée (100% Hors ligne)',
        description: 'Vos fichiers ne quittent jamais votre appareil',
        unifile: true,
        online: false,
        handbrake: true
    },
    {
        name: 'Aucune limite de taille',
        description: 'Traitez des fichiers de n\'importe quelle taille',
        unifile: true,
        online: false,
        handbrake: true
    },
    {
        name: 'Solution tout-en-un',
        description: 'Convertir, compresser, recadrer & archiver en une app',
        unifile: true,
        online: false,
        handbrake: false
    },
    {
        name: 'Interface moderne',
        description: 'Design intuitif qui fonctionne',
        unifile: true,
        online: false,
        handbrake: false
    },
    {
        name: 'Complètement gratuit',
        description: 'Pas de coûts cachés ni d\'abonnements',
        unifile: true,
        online: false,
        handbrake: true
    },
    {
        name: 'Traitement par lot',
        description: 'Traitez plusieurs fichiers à la fois',
        unifile: true,
        online: 'limited',
        handbrake: true
    },
    {
        name: 'Aperçu instantané',
        description: 'Voyez le résultat avant d\'enregistrer',
        unifile: true,
        online: false,
        handbrake: false
    },
    {
        name: 'Performance native',
        description: 'Rapide, optimisé pour votre machine',
        unifile: true,
        online: false,
        handbrake: true
    }
]

const CheckIcon = () => (
    <svg className="check-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20,6 9,17 4,12" />
    </svg>
)

const XIcon = () => (
    <svg className="x-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="6" x2="6" y2="18" />
        <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
)

const PartialIcon = () => (
    <span className="partial-icon">~</span>
)

const FeatureCell = ({ value }) => {
    if (value === true) return <CheckIcon />
    if (value === false) return <XIcon />
    return <PartialIcon />
}

const Comparison = () => {
    const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation()
    const { ref: tableRef, isVisible: tableVisible } = useScrollAnimation({ threshold: 0.05 })

    return (
        <section className="comparison section" id="comparison">
            <div className="container">
                <div
                    ref={headerRef}
                    className={`comparison-header animate-fade-up ${headerVisible ? 'visible' : ''}`}
                >
                    <span className="comparison-badge">Comparaison</span>
                    <h2 className="comparison-title">
                        Pourquoi choisir{' '}
                        <span className="gradient-text">Unifile</span> ?
                    </h2>
                    <p className="comparison-subtitle">
                        Voyez comment Unifile se compare aux autres solutions populaires
                    </p>
                </div>

                <div
                    ref={tableRef}
                    className={`comparison-table-wrapper animate-fade-up ${tableVisible ? 'visible' : ''}`}
                    style={{ transitionDelay: '200ms' }}
                >
                    <table className="comparison-table">
                        <thead>
                            <tr>
                                <th className="feature-column">Fonctionnalité</th>
                                <th className="product-column unifile-column">
                                    <div className="product-header">
                                        <img src="/assets/icone.png" alt="Unifile" className="product-logo" />
                                        <span>Unifile</span>
                                    </div>
                                </th>
                                <th className="product-column">
                                    <div className="product-header">
                                        <svg className="product-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <circle cx="12" cy="12" r="10" />
                                            <line x1="2" y1="12" x2="22" y2="12" />
                                            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                                        </svg>
                                        <span>Outils en ligne</span>
                                    </div>
                                </th>
                                <th className="product-column">
                                    <div className="product-header">
                                        <svg className="product-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18" />
                                            <line x1="7" y1="2" x2="7" y2="22" />
                                            <line x1="17" y1="2" x2="17" y2="22" />
                                            <line x1="2" y1="12" x2="22" y2="12" />
                                            <line x1="2" y1="7" x2="7" y2="7" />
                                            <line x1="2" y1="17" x2="7" y2="17" />
                                            <line x1="17" y1="17" x2="22" y2="17" />
                                            <line x1="17" y1="7" x2="22" y2="7" />
                                        </svg>
                                        <span>Handbrake</span>
                                    </div>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {features.map((feature, index) => (
                                <tr
                                    key={feature.name}
                                    className={tableVisible ? 'visible' : ''}
                                    style={{ transitionDelay: `${(index + 1) * 50}ms` }}
                                >
                                    <td className="feature-cell">
                                        <span className="feature-name">{feature.name}</span>
                                        <span className="feature-desc">{feature.description}</span>
                                    </td>
                                    <td className="check-cell unifile-cell">
                                        <FeatureCell value={feature.unifile} />
                                    </td>
                                    <td className="check-cell">
                                        <FeatureCell value={feature.online} />
                                    </td>
                                    <td className="check-cell">
                                        <FeatureCell value={feature.handbrake} />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    )
}

export default Comparison
