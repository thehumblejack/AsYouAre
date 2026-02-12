import React from 'react';

export default function SEOContent() {
    return (
        <>
            {/* Hidden SEO Content - Visible to search engines */}
            <div className="seo-content" style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px', overflow: 'hidden' }}>
                <h2>Agence Design Site Web Tunisie - Services Professionnels</h2>
                <p>
                    AsYouAre est la meilleure agence de design site web en Tunisie, spécialisée dans le développement site web,
                    la création site internet, et les solutions digitales sur mesure. Basés à Tunis, nous servons toute la Tunisie
                    incluant Sfax, Sousse, et toutes les régions.
                </p>

                <h3>Services de Design Site Web en Tunisie</h3>
                <ul>
                    <li>Design site web professionnel Tunisie</li>
                    <li>Développement site web sur mesure Tunis</li>
                    <li>Création site internet moderne Tunisie</li>
                    <li>UX/UI Design Tunisie</li>
                    <li>Design graphique professionnel</li>
                    <li>Conception site web responsive</li>
                    <li>Agence digitale Tunisie</li>
                </ul>

                <h3>Développement Site Web Tunisie</h3>
                <p>
                    Notre agence web en Tunisie offre des services complets de développement site web incluant la conception,
                    le design, et le développement de sites internet professionnels. Nous sommes l'agence de développement web
                    leader en Tunisie avec une expertise reconnue dans tout le pays.
                </p>

                <h3>Pourquoi Choisir AsYouAre pour le Design de Votre Site Web?</h3>
                <ul>
                    <li>Agence N°1 en Tunisie pour design site web</li>
                    <li>Expertise en développement site web professionnel</li>
                    <li>Services de création site internet sur mesure</li>
                    <li>Design graphique et UX/UI design de qualité</li>
                    <li>Agence web présente à Tunis, Sfax, Sousse</li>
                    <li>Solutions digitales complètes pour entreprises tunisiennes</li>
                </ul>

                <h3>Zones d'Intervention - Design & Développement Web</h3>
                <p>
                    Design site web Tunis, Développement site web Sfax, Création site internet Sousse, Agence web Tunisie,
                    Conception site web Monastir, Design graphique Bizerte, Développement web Nabeul, Agence digitale Gabès,
                    Site web professionnel Kairouan, Création site web Ariana.
                </p>

                <h3>Technologies & Expertise</h3>
                <p>
                    Notre agence de design et développement site web en Tunisie maîtrise les dernières technologies:
                    React, Next.js, WordPress, Shopify, design responsive, UX/UI design, développement mobile,
                    e-commerce, et solutions web sur mesure.
                </p>

                <h3>Contact - Agence Design Site Web Tunisie</h3>
                <p>
                    Contactez la meilleure agence de design site web et développement web en Tunisie. Devis gratuit
                    pour votre projet de création site internet. Services professionnels à Tunis, Sfax, Sousse et
                    partout en Tunisie.
                </p>

                <address>
                    <strong>AsYouAre - Agence Design & Développement Site Web</strong><br />
                    Tunisie - Tunis, Sfax, Sousse<br />
                    Email: contact@asyouare.club<br />
                    Services: Design Site Web, Développement Site Web, Création Site Internet, UX/UI Design
                </address>
            </div>

            {/* Visible SEO-friendly footer content */}
            <section className="seo-footer-section" style={{
                background: '#f8f9fa',
                padding: '60px 20px',
                marginTop: '80px',
                borderTop: '1px solid #e9ecef'
            }}>
                <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                        gap: '40px',
                        marginBottom: '40px'
                    }}>
                        <div>
                            <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '20px', color: '#1a1a1a' }}>
                                🏆 Agence Design Site Web Tunisie
                            </h3>
                            <p style={{ fontSize: '14px', lineHeight: '1.8', color: '#666' }}>
                                AsYouAre est l'agence leader en Tunisie pour le design site web, développement site web,
                                et création site internet. Services professionnels à Tunis, Sfax, Sousse.
                            </p>
                        </div>

                        <div>
                            <h4 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '15px', color: '#1a1a1a' }}>
                                Nos Services
                            </h4>
                            <ul style={{ listStyle: 'none', padding: 0, fontSize: '14px', lineHeight: '2', color: '#666' }}>
                                <li>✓ Design Site Web Tunisie</li>
                                <li>✓ Développement Site Web</li>
                                <li>✓ Création Site Internet</li>
                                <li>✓ UX/UI Design</li>
                                <li>✓ Design Graphique</li>
                            </ul>
                        </div>

                        <div>
                            <h4 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '15px', color: '#1a1a1a' }}>
                                Zones d'Intervention
                            </h4>
                            <ul style={{ listStyle: 'none', padding: 0, fontSize: '14px', lineHeight: '2', color: '#666' }}>
                                <li>📍 Tunis - Design & Développement Web</li>
                                <li>📍 Sfax - Agence Web</li>
                                <li>📍 Sousse - Création Sites</li>
                                <li>📍 Toute la Tunisie</li>
                            </ul>
                        </div>
                    </div>

                    <div style={{
                        textAlign: 'center',
                        paddingTop: '30px',
                        borderTop: '1px solid #dee2e6',
                        fontSize: '13px',
                        color: '#888'
                    }}>
                        <p>
                            <strong>AsYouAre</strong> - Meilleure Agence Design & Développement Site Web en Tunisie |
                            Design Site Web Tunis | Développement Web Sfax | Création Site Internet Sousse |
                            Agence Digitale Tunisie | UX/UI Design Professionnel
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}
