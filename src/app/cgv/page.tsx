import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: "Conditions générales de vente — Maître Erwan Prély Avocat",
}

export default function CGV() {
  return (
    <>
      <Navbar />
      <main style={{ background: '#f2f4f6', minHeight: '100vh', paddingTop: '6rem' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto', padding: '5rem 1.5rem 8rem' }}>

          <h1 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', fontWeight: 400, color: '#1c2b3a', lineHeight: 1.2, margin: '0 0 3.5rem' }}>
            Conditions générales de vente
          </h1>

          {[
            {
              titre: "Objet",
              contenu: "Les présentes conditions générales de vente régissent les relations entre le Cabinet Erwan Prély, avocat inscrit au Barreau de Bordeaux, et ses clients dans le cadre de la fourniture de prestations juridiques.",
            },
            {
              titre: "Convention d'honoraires",
              contenu: "Conformément à l'article 10 de la loi du 31 décembre 1971, une convention d'honoraires est établie par écrit avant toute intervention. Elle précise la nature de la mission, le mode de calcul des honoraires et les conditions de règlement. Les honoraires sont fixés en considération de la complexité du dossier, du temps consacré, de l'expérience et des diligences accomplies.",
            },
            {
              titre: "Facturation et règlement",
              contenu: "Les prestations sont facturées selon les modalités prévues dans la convention d'honoraires. Les factures sont payables à réception, par virement bancaire ou chèque. Tout retard de paiement entraîne des pénalités de retard conformément à la réglementation en vigueur.",
            },
            {
              titre: "Confidentialité",
              contenu: "Maître Prély est soumis au secret professionnel dans les conditions définies par la loi et le Règlement Intérieur National. Toutes les informations communiquées par le client dans le cadre de la relation professionnelle sont traitées avec la plus stricte confidentialité.",
            },
            {
              titre: "Responsabilité professionnelle",
              contenu: "Maître Prély bénéficie d'une assurance responsabilité civile professionnelle couvrant les risques inhérents à l'exercice de la profession d'avocat. Sa responsabilité ne peut être engagée qu'en cas de faute prouvée et dans la limite du préjudice directement causé.",
            },
            {
              titre: "Réclamations",
              contenu: "Toute réclamation relative à une prestation doit être adressée par écrit au cabinet. En cas de litige, les parties s'engagent à rechercher une solution amiable avant tout recours judiciaire. Le Bâtonnier du Barreau de Bordeaux peut être saisi pour arbitrage.",
            },
            {
              titre: "Droit applicable",
              contenu: "Les présentes conditions sont soumises au droit français. Tout litige relevant de leur interprétation ou de leur exécution sera soumis aux juridictions compétentes du ressort de la Cour d'appel de Bordeaux.",
            },
          ].map(({ titre, contenu }) => (
            <div key={titre} style={{ marginBottom: '2.8rem' }}>
              <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: '1.1rem', fontWeight: 400, color: '#1c2b3a', margin: '0 0 0.9rem', paddingBottom: '0.7rem', borderBottom: '1px solid rgba(28,43,58,0.10)' }}>
                {titre}
              </h2>
              <p style={{ fontSize: '0.84rem', lineHeight: 1.85, color: 'rgba(28,43,58,0.60)', margin: 0 }}>
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
