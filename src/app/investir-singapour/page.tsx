import { Metadata } from 'next';

import Image from 'next/image';
import NewsletterWrapper from '../components/NewsletterWrapper';
export const metadata: Metadata = {
  title: 'Investir à Singapour | Gresham Trust',
  description: 'Explorez les opportunités d’investissement à Singapour : un hub financier stable avec des options d’investissement diversifiées et des avantages fiscaux.',
  keywords: ['investir Singapour', 'opportunités d’investissement', 'hub financier', 'fiscalité Singapour'],
};

export default function InvestirSingapour() {
  return (
    <main className="min-h-screen bg-grey-100">
      {/* HERO SECTION */}
      <section className="section-hero">
        <div className="relative z-10 w-full flex flex-col items-center justify-center text-center px-4 py-24 md:py-32">
          <h1 className="headline-premium fade-in">Investir à Singapour</h1>
          <div className="divider-premium" />
          <p className="subheadline-premium max-w-2xl mx-auto mb-6 fade-in">
            Découvrez pourquoi Singapour est une destination de choix pour les investisseurs mondiaux
          </p>
        </div>
      </section>

      {/* ARTICLE CONTENT */}
      <article className="section">
        <div className="container">
          <div className="max-w-4xl mx-auto space-y-12">
            {/* INTRODUCTION */}
            <section className="fade-in">
              <h2 className="text-3xl font-semibold text-royal-500 mb-4">Pourquoi investir à Singapour ?</h2>
              <p className="text-grey-600 leading-relaxed">
                Singapour est reconnu comme l’un des meilleurs endroits au monde pour investir, grâce à son économie stable, son environnement favorable aux affaires, et sa position stratégique en Asie. Ce guide explore les opportunités d’investissement à Singapour et les avantages qu’il offre aux investisseurs.
              </p>
            </section>

            {/* ECONOMIC STABILITY */}
            <section className="fade-in">
              <h2 className="text-3xl font-semibold text-royal-500 mb-4">Stabilité économique</h2>
              <p className="text-grey-600 leading-relaxed">
                Singapour est souvent classé comme le meilleur pays d’Asie pour vivre et faire des affaires, avec un faible taux de criminalité et une haute qualité de vie. Son économie est diversifiée, avec des secteurs clés tels que la finance, la technologie, et les services.
              </p>
            </section>

            {/* INVESTMENT OPTIONS */}
            <section className="fade-in">
              <h2 className="text-3xl font-semibold text-royal-500 mb-4">Options d’investissement</h2>
              <p className="text-grey-600 leading-relaxed mb-4">
                Singapour offre une large gamme d’options d’investissement, y compris :
              </p>
              <ul className="list-disc list-inside text-grey-600 space-y-2">
                <li>
                  <strong>Schéma d’investissement du CPF (CPFIS) :</strong> Utilisez vos économies CPF pour investir dans divers produits financiers.
                </li>
                <li>
                  <strong>Schéma de retraite supplémentaire (SRS) :</strong> Un schéma volontaire pour l’épargne retraite avec des avantages fiscaux.
                </li>
                <li>
                  <strong>Obligations d’épargne de Singapour (SSBs) :</strong> Des obligations gouvernementales à faible risque avec des rendements compétitifs.
                </li>
                <li>
                  <strong>Bons du Trésor (T-bills) :</strong> Des titres publics à court terme avec des rendements garantis.
                </li>
                <li>
                  <strong>Plateformes de gestion de patrimoine :</strong> Des plateformes automatisées comme StashAway pour une gestion d’investissement simplifiée.
                </li>
                <li>
                  <strong>Comptes de gestion de liquidités :</strong> Investissez vos économies dans des actifs à faible risque avec des rendements plus élevés que les comptes d’épargne traditionnels.
                </li>
                <li>
                  <strong>Fonds d’investissement immobiliers (REITs) :</strong> Investissez dans des propriétés diversifiées avec des rendements de dividendes élevés (4 % à 8 %).
                </li>
                <li>
                  <strong>Fonds négociés en bourse (ETFs) :</strong> Diversifiez votre portefeuille à travers différents secteurs et classes d’actifs avec des frais de gestion faibles.
                </li>
                <li>
                  <strong>Actions :</strong> Investissez directement dans des entreprises cotées en bourse pour des rendements potentiels élevés.
                </li>
                <li>
                  <strong>Cryptomonnaies :</strong> Investissez dans des actifs numériques avec une volatilité élevée mais des rendements potentiels élevés.
                </li>
                <li>
                  <strong>Crowdfunding :</strong> Financez des projets ou des entreprises en échange de récompenses, d’équité ou de dettes.
                </li>
              </ul>
            </section>

            {/* TAX INCENTIVES */}
            <section className="fade-in">
              <h2 className="text-3xl font-semibold text-royal-500 mb-4">Avantages fiscaux</h2>
              <p className="text-grey-600 leading-relaxed">
                Singapour propose des incitations fiscales pour attirer les investisseurs, y compris des réductions d’impôts et des exonérations pour certains types d’investissements. De plus, le pays a un réseau étendu de traités fiscaux pour éviter la double imposition.
              </p>
            </section>

            {/* STRATEGIC LOCATION */}
            <section className="fade-in">
              <h2 className="text-3xl font-semibold text-royal-500 mb-4">Position stratégique</h2>
              <p className="text-grey-600 leading-relaxed">
                Situé au carrefour de l’Asie, Singapour est un hub financier majeur avec une infrastructure de classe mondiale et une connectivité excellente, facilitant les opérations commerciales et les investissements transfrontaliers.
              </p>
            </section>

            {/* RESIDENCE BY INVESTMENT */}
            <section className="fade-in">
              <h2 className="text-3xl font-semibold text-royal-500 mb-4">Résidence par investissement</h2>
              <p className="text-grey-600 leading-relaxed">
                Singapour offre un programme de résidence par investissement, permettant aux investisseurs de résider dans le pays en échange d’investissements substantiels, renforçant ainsi son attractivité pour les investisseurs internationaux.
              </p>
            </section>

            {/* IMAGE SECTION */}
            <section className="fade-in">
              <div className="relative w-full h-64 md:h-96 rounded-2xl overflow-hidden shadow-royal-lg">
                <Image
                  src="/images/countries/Singapour.jpg"
                  alt="Ville de Singapour"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-2xl"
                />
              </div>
              <p className="text-center text-grey-500 text-sm mt-4">
                Singapour : un hub financier mondial
              </p>
            </section>

            {/* CONCLUSION */}
            <section className="fade-in">
              <h2 className="text-3xl font-semibold text-royal-500 mb-4">Maximisez vos investissements avec Gresham Trust</h2>
              <p className="text-grey-600 leading-relaxed">
                Singapour offre un environnement propice aux investissements, avec une stabilité économique, des options d’investissement diversifiées, et des avantages fiscaux. Gresham Trust vous aide à naviguer les opportunités d’investissement à Singapour, en vous offrant des conseils personnalisés et des solutions adaptées à vos objectifs financiers. Contactez-nous pour explorer comment vous pouvez maximiser vos investissements à Singapour.
              </p>
            </section>
          </div>
        </div>
      </article>

      {/* CTA SECTION */}
      <section className="section-hero">
        <div className="relative z-10 w-full flex flex-col items-center justify-center text-center px-4 py-20 md:py-28">
          <h2 className="headline-premium fade-in">Prêt à investir à Singapour ?</h2>
          <div className="divider-premium" />
          <p className="text-grey-100 mb-8 max-w-xl mx-auto text-lg fade-in">
            Contactez Gresham Trust pour une consultation gratuite et découvrez nos solutions pour vos investissements à Singapour.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <NewsletterWrapper />
          </div>
        </div>
      </section>
    </main>
  );
}