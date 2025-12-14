import { useScrollAnimation, useStaggerAnimation } from '../hooks/useScrollAnimation'
import './Features.css'

const features = [
    {
        id: 'convert',
        icon: '/assets/feature-convert.png',
        title: 'Convertir',
        tagline: 'Transformez n\'importe quel format instantanément',
        description: 'Convertissez entre des centaines de formats par simple glisser-déposer. Images, vidéos, audio, documents - tout est géré avec précision.',
        capabilities: [
            { label: 'Images', formats: ['PNG', 'JPG', 'WEBP', 'GIF', 'TIFF', 'BMP', 'ICO'] },
            { label: 'Vidéos', formats: ['MP4', 'MOV', 'AVI', 'MKV', 'WEBM'] },
            { label: 'Audio', formats: ['MP3', 'WAV', 'AAC', 'FLAC', 'OGG'] },
            { label: 'Documents', formats: ['PDF', 'DOCX', 'TXT', 'RTF'] }
        ],
        gradient: 'linear-gradient(135deg, #007AFF 0%, #5AC8FA 100%)'
    },
    {
        id: 'compress',
        icon: '/assets/feature-compress.png',
        title: 'Compresser',
        tagline: 'Réduisez la taille sans perdre en qualité',
        description: 'Des algorithmes intelligents analysent vos fichiers et réduisent leur taille tout en maintenant la qualité souhaitée. Parfait pour le partage et le stockage.',
        capabilities: [
            { label: 'Jusqu\'\u00e0 90%', formats: ['de réduction'] },
            { label: 'Sans perte', formats: ['option qualité'] },
            { label: 'Par lot', formats: ['traitement'] },
            { label: 'Aperçu', formats: ['avant export'] }
        ],
        gradient: 'linear-gradient(135deg, #30D158 0%, #34C759 100%)'
    },
    {
        id: 'crop',
        icon: '/assets/feature-crop.png',
        title: 'Recadrer',
        tagline: 'Recadrage précis pour images et vidéos',
        description: 'Éditeur visuel avec ratios prédéfinis et dimensions personnalisées. Recadrez vos médias au pixel près pour toute plateforme.',
        capabilities: [
            { label: 'Préréglages', formats: ['1:1', '16:9', '4:3', '9:16'] },
            { label: 'Personnalisé', formats: ['tout ratio'] },
            { label: 'Vidéos', formats: ['image par image'] },
            { label: 'Aperçu', formats: ['en direct'] }
        ],
        gradient: 'linear-gradient(135deg, #FF9F0A 0%, #FFD60A 100%)'
    },
    {
        id: 'zip',
        icon: '/assets/feature-zip.png',
        title: 'Archiver',
        tagline: 'Créez et extrayez des archives facilement',
        description: 'Regroupez plusieurs fichiers en une seule archive ou extrayez le contenu d\'archives existantes. Support de tous les formats populaires.',
        capabilities: [
            { label: 'Créer', formats: ['ZIP', 'TAR', 'GZ'] },
            { label: 'Extraire', formats: ['tous formats'] },
            { label: 'Mot de passe', formats: ['protection'] },
            { label: 'Découper', formats: ['gros fichiers'] }
        ],
        gradient: 'linear-gradient(135deg, #BF5AF2 0%, #AF52DE 100%)'
    }
]

const FeatureBlock = ({ feature, index, isVisible }) => {
    const animationClass = index % 2 === 0 ? 'animate-fade-left' : 'animate-fade-right'

    return (
        <div
            className={`feature-block ${index % 2 === 1 ? 'reverse' : ''} ${animationClass} ${isVisible ? 'visible' : ''}`}
            style={{ transitionDelay: `${index * 150}ms` }}
        >
            <div className="feature-visual">
                <div
                    className="feature-icon-large"
                    style={{ background: feature.gradient }}
                >
                    <img
                        src={feature.icon}
                        alt={feature.title}
                        className="feature-icon-img"
                    />
                </div>
                <div className="feature-glow" style={{ background: feature.gradient }}></div>
            </div>

            <div className="feature-info">
                <span className="feature-number">0{index + 1}</span>
                <h3 className="feature-title-large">{feature.title}</h3>
                <p className="feature-tagline">{feature.tagline}</p>
                <p className="feature-description">{feature.description}</p>

                <div className="feature-capabilities">
                    {feature.capabilities.map((cap, i) => (
                        <div key={i} className="capability-item">
                            <span className="capability-label">{cap.label}</span>
                            <div className="capability-formats">
                                {cap.formats.map((format, j) => (
                                    <span key={j} className="format-pill">{format}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

const Features = () => {
    const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation()
    const { ref: listRef, isVisible: listVisible } = useScrollAnimation({ threshold: 0.05 })

    return (
        <section className="features section" id="features">
            <div className="container">
                <div
                    ref={headerRef}
                    className={`features-header animate-fade-up ${headerVisible ? 'visible' : ''}`}
                >
                    <span className="features-badge">Fonctionnalités</span>
                    <h2 className="features-title">
                        Quatre outils puissants,{' '}
                        <span className="gradient-text">une seule app</span>
                    </h2>
                    <p className="features-subtitle">
                        Tout ce qu'il vous faut pour gérer vos fichiers. Pas d'abonnement, pas de cloud,
                        pas de complexité. Glissez, déposez, c'est fait.
                    </p>
                </div>

                <div className="features-list" ref={listRef}>
                    {features.map((feature, index) => (
                        <FeatureBlock
                            key={feature.id}
                            feature={feature}
                            index={index}
                            isVisible={listVisible}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Features

