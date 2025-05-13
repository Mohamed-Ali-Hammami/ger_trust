import React from 'react';
import Image from 'next/image';
import { Metadata } from 'next';

import NewsletterWrapper from '../components/NewsletterWrapper';

export const metadata: Metadata = {
  title: 'Fiscalité au Luxembourg | Gresham Trust',
  description: 'Découvrez les avantages fiscaux du Luxembourg pour les entreprises, incluant les taux d’imposition, les traités fiscaux, et l’environnement économique stable.',
  keywords: ['fiscalité Luxembourg', 'impôts entreprises', 'tax haven', 'optimisation fiscale'],
};

export default function FiscaliteLuxembourg() {
  return (
    <main className="min-h-screen bg-grey-100">
      {/* HERO SECTION */}
      <section className="section-hero">
        <div className="relative z-10 w-full flex flex-col items-center justify-center text-center px-4 py-24 md:py-32">
          <h1 className="headline-premium fade-in">Fiscalité au Luxembourg</h1>
          <div className="divider-premium" />
          <p className="subheadline-premium max-w-2xl mx-auto mb-6 fade-in">
            Comprenez pourquoi le Luxembourg est une destination privilégiée pour l’optimisation fiscale des entreprises
          </p>
        </div>
      </section>

      {/* ARTICLE CONTENT */}
      <article className="section">
        <div className="container">
          <div className="max-w-4xl mx-auto space-y-12">
            {/* INTRODUCTION */}
            <section className="fade-in">
              <h2 className="text-3xl font-semibold text-royal-500 mb-4">Pourquoi le Luxembourg est-il attractif pour les entreprises ?</h2>
              <p className="text-grey-600 leading-relaxed">
                Le Luxembourg est renommé pour son environnement fiscal avantageux, qui attire les entreprises internationales grâce à des taux d’imposition compétitifs, une stabilité politique et économique, et un réseau étendu de traités fiscaux. Ce guide explore les aspects clés de la fiscalité luxembourgeoise pour les entreprises.
              </p>
            </section>

            {/* CORPORATE TAX RATES */}
            <section className="fade-in">
              <h2 className="text-3xl font-semibold text-royal-500 mb-4">Taux d’imposition sur les sociétés</h2>
              <p className="text-grey-600 leading-relaxed mb-4">
                Le Luxembourg applique un taux d’impôt sur les sociétés (CIT) progressif basé sur le revenu imposable :
              </p>
              <ul className="list-disc list-inside text-grey-600 space-y-2">
                <li>
                  <strong>Pour les revenus inférieurs à 175 000 € :</strong> 15 % en 2024, réduit à 14 % en 2025.
                </li>
                <li>
                  <strong>Pour les revenus entre 175 000 € et 200 001 € :</strong> Calculé comme suit : 26 250 € + 31 % du revenu au-delà de 175 000 € en 2024, et 24 500 € + 30 % du revenu au-delà de 175 000 € en 2025.
                </li>
                <li>
                  <strong>Pour les revenus supérieurs à 200 000 € :</strong> 17 % en 2024 (taux global de 24,94 % à Luxembourg-Ville, incluant une surtaxe de solidarité de 7 % et une taxe communale de 6,75 %), et 16 % en 2025 (taux global de 23,87 %).
                </li>
              </ul>
              <p className="text-grey-600 leading-relaxed mt-4">
                De plus, le Luxembourg n’impose pas de retenue à la source sur les paiements d’intérêts et de redevances, ce qui en fait une destination attractive pour les multinationales.
              </p>
            </section>

            {/* TAX TREATIES */}
            <section className="fade-in">
              <h2 className="text-3xl font-semibold text-royal-500 mb-4">Traités fiscaux</h2>
              <p className="text-grey-600 leading-relaxed">
                Le Luxembourg a signé plus de 80 traités fiscaux bilatéraux pour éviter la double imposition, facilitant ainsi les opérations transfrontalières et l’optimisation fiscale pour les entreprises.
              </p>
            </section>

            {/* BUSINESS ENVIRONMENT */}
            <section className="fade-in">
              <h2 className="text-3xl font-semibold text-royal-500 mb-4">Environnement économique</h2>
              <p className="text-grey-600 leading-relaxed">
                Avec une note de crédit AAA et une position stratégique en Europe, le Luxembourg offre une stabilité politique et économique exceptionnelle. Il est également un centre financier majeur, abritant des institutions financières mondiales et des entreprises technologiques.
              </p>
            </section>

            {/* SPECIAL TAX REGIMES */}
            <section className="fade-in">
              <h2 className="text-3xl font-semibold text-royal-500 mb-4">Régimes fiscaux spéciaux</h2>
              <p className="text-grey-600 leading-relaxed">
                Le Luxembourg propose des régimes fiscaux avantageux pour certaines structures, comme les sociétés de holding et les fonds d’investissement, permettant une optimisation fiscale supplémentaire.
              </p>
            </section>

            {/* IMAGE SECTION */}
            <section className="fade-in">
              <div className="relative w-full h-64 md:h-96 rounded-2xl overflow-hidden shadow-royal-lg">
                <Image
                  src="/images/countries/Luxembourg.jpg"
                  alt="Ville de Luxembourg"
                  fill
                  className="object-cover rounded-2xl"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <p className="text-center text-grey-500 text-sm mt-4">
                Luxembourg-Ville : un centre financier mondial
              </p>
            </section>

            {/* CONCLUSION */}
            <section className="fade-in">
              <h2 className="text-3xl font-semibold text-royal-500 mb-4">Optimisez votre fiscalité avec Gresham Trust</h2>
              <p className="text-grey-600 leading-relaxed">
                Le Luxembourg offre un cadre fiscal attractif pour les entreprises, avec des taux d’imposition compétitifs, une stabilité économique, et un réseau étendu de traités fiscaux. Gresham Trust vous accompagne dans la navigation des complexités fiscales luxembourgeoises, garantissant la conformité et l’optimisation de votre structure fiscale. Contactez-nous pour explorer les opportunités que le Luxembourg peut offrir à votre entreprise.
              </p>
            </section>
          </div>
        </div>
      </article>

      {/* CTA SECTION */}
      <section className="section-hero">
        <div className="relative z-10 w-full flex flex-col items-center justify-center text-center px-4 py-20 md:py-28">
          <h2 className="headline-premium fade-in">Prêt à optimiser votre fiscalité au Luxembourg ?</h2>
          <div className="divider-premium" />
          <p className="text-grey-100 mb-8 max-w-xl mx-auto text-lg fade-in">
            Contactez Gresham Trust pour une consultation gratuite et découvrez nos solutions pour votre entreprise au Luxembourg.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <NewsletterWrapper />
          </div>
        </div>
      </section>
    </main>
  );
}