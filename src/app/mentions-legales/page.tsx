import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: "Mentions légales — Maître Erwan Prély Avocat",
}

export default function MentionsLegales() {
  return (
    <>
      <Navbar />
      <main style={{ background: '#f2f4f6', minHeight: '100vh', paddingTop: '6rem' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto', padding: '5rem 1.5rem 8rem' }}>

          <h1 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', fontWeight: 400, color: '#1c2b3a', lineHeight: 1.2, margin: '0 0 3.5rem' }}>
            Mentions légales
          </h1>

          {[
            {
              titre: "Éditeur du site",
              contenu: "Maître Erwan Prély\n5 rue Duplessy, 33000 Bordeaux\nTéléphone : 06 35 31 99 54\nEmail : erwan.prely@avocat.fr\nMembre du Barreau de Bordeaux — N° 814",
            },
            {
              titre: "Qualité professionnelle",
              contenu: "Avocat inscrit au Barreau de Paris depuis juin 2020, puis au Barreau de Bordeaux depuis 2022.\nAssurance responsabilité civile professionnelle souscrite auprès d'un assureur agréé pour l'exercice de la profession d'avocat en France.\nRègles professionnelles applicables : Règlement Intérieur National (RIN) et règlement intérieur du Barreau de Bordeaux.",
            },
            {
              titre: "Hébergement",
              contenu: "Ce site est hébergé par Vercel Inc., 340 Pine Street Suite 701, San Francisco, CA 94104, États-Unis.",
            },
            {
              titre: "Propriété intellectuelle",
              contenu: "L'ensemble des contenus présents sur ce site (textes, images, logos) est protégé par le droit d'auteur. Toute reproduction, même partielle, est interdite sans autorisation préalable écrite.",
            },
            {
              titre: "Responsabilité",
              contenu: "Les informations publiées sur ce site ont un caractère général et ne constituent pas un conseil juridique. Pour toute question relative à votre situation personnelle, veuillez prendre contact avec le cabinet.",
            },
            {
              titre: "Données personnelles",
              contenu: "Les données collectées via ce site sont traitées conformément au Règlement Général sur la Protection des Données (RGPD). Vous disposez d'un droit d'accès, de rectification et de suppression de vos données en contactant : erwan.prely@avocat.fr.",
            },
          ].map(({ titre, contenu }) => (
            <div key={titre} style={{ marginBottom: '2.8rem' }}>
              <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: '1.1rem', fontWeight: 400, color: '#1c2b3a', margin: '0 0 0.9rem', paddingBottom: '0.7rem', borderBottom: '1px solid rgba(28,43,58,0.10)' }}>
                {titre}
              </h2>
              <p style={{ fontSize: '0.84rem', lineHeight: 1.85, color: 'rgba(28,43,58,0.60)', margin: 0, whiteSpace: 'pre-line' }}>
                {contenu}
              </p>
            </div>
          ))}

        </div>
      </main>
      <Footer />
    </>
  )
}
