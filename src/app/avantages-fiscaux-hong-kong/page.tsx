import { Metadata } from 'next';

import Image from 'next/image';
import NewsletterWrapper from '../components/NewsletterWrapper';


export const metadata: Metadata = {
  title: 'Avantages fiscaux à Hong Kong | Gresham Trust',
  description: 'Découvrez les avantages fiscaux pour les entreprises à Hong Kong, incluant des taux d’imposition compétitifs et des exemptions pour les revenus étrangers.',
  keywords: ['Hong Kong', 'avantages fiscaux', 'création d’entreprise', 'fiscalité internationale'],
};

export default function HongKongTaxAdvantages() {
  return (
    <main className="min-h-screen bg-grey-900">
      {/* HERO SECTION */}
      <section className="section-hero">
        <div className="relative z-10 w-full flex flex-col items-center justify-center text-center px-4 py-24 md:py-32">
          <h1 className="headline-premium fade-in">Avantages fiscaux à Hong Kong</h1>
          <div className="divider-premium" />
          <p className="subheadline-premium max-w-2xl mx-auto mb-6 fade-in text-gray-300">
            Pourquoi Hong Kong est une destination incontournable pour optimiser la fiscalité de votre entreprise
          </p>
        </div>
      </section>

      {/* ARTICLE CONTENT */}
      <article className="section bg-grey-800">
        <div className="container">
          <div className="max-w-4xl mx-auto space-y-12 text-gray-300">
            {/* INTRODUCTION */}
            <section className="fade-in">
              <h2 className="text-3xl font-semibold text-marine-400 mb-4">Introduction à la fiscalité hongkongaise</h2>
              <p className="text-grey leading-relaxed">
                Hong Kong est reconnu mondialement comme un centre financier de premier plan, attirant entrepreneurs et entreprises grâce à son régime fiscal attractif. Avec des taux d’imposition parmi les plus bas au monde et un système fiscal territorial, Hong Kong offre des opportunités uniques pour optimiser la charge fiscale tout en opérant dans un environnement stable et moderne.
              </p>
            </section>

            {/* KEY BENEFITS */}
            <section className="fade-in">
              <h2 className="text-3xl font-semibold text-marine-400 mb-4">Les principaux avantages fiscaux</h2>
              <ul className="space-y-6 text-grey">
                <li className="flex items-start gap-4">
                  <span className="text-2xl text-accent">✔</span>
                  <div>
                    <h3 className="font-semibold text-xl text-grey">Taux d’imposition compétitifs</h3>
                    <p>
                      Les entreprises bénéficient d’un taux d’impôt sur les sociétés de 8,25 % sur les premiers 2 millions de HKD de bénéfices, et de 16,5 % au-delà. Les petites et moyennes entreprises trouvent ce système particulièrement avantageux.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-2xl text-accent">✔</span>
                  <div>
                    <h3 className="font-semibold text-xl text-grey">Exemption des revenus étrangers</h3>
                    <p>
                      Hong Kong applique un système fiscal territorial : les revenus générés à l’étranger ne sont pas imposables, ce qui est idéal pour les entreprises internationales.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-2xl text-accent">✔</span>
                  <div>
                    <h3 className="font-semibold text-xl text-grey">Aucune TVA ni taxe sur les plus-values</h3>
                    <p>
                      Contrairement à de nombreuses juridictions, Hong Kong n’impose ni TVA, ni taxe sur les plus-values, ni taxe sur les dividendes, simplifiant la gestion fiscale.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-2xl text-accent">✔</span>
                  <div>
                    <h3 className="font-semibold text-xl text-grey">Conventions fiscales internationales</h3>
                    <p>
                      Hong Kong a signé plus de 40 conventions fiscales pour éviter la double imposition, renforçant son attractivité pour les entreprises opérant à l’international.
                    </p>
                  </div>
                </li>
              </ul>
            </section>

            {/* IMAGE SECTION */}
            <section className="fade-in">
              <div className="relative w-full h-64 md:h-96 rounded-2xl overflow-hidden shadow-marine-lg">
                <Image
                  src="/images/countries/HongKong.jpg"
                  alt="Hong Kong skyline"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-2xl"
                />
              </div>
              <p className="text-center text-grey text-sm mt-4">
                Skyline de Hong Kong, un hub financier mondial
              </p>
            </section>

            {/* PRACTICAL CONSIDERATIONS */}
            <section className="fade-in">
              <h2 className="text-3xl font-semibold text-marine-400 mb-4">Considérations pratiques</h2>
              <p className="text-grey leading-relaxed mb-4">
                Pour tirer pleinement parti des avantages fiscaux de Hong Kong, il est essentiel de structurer correctement votre entreprise. Voici quelques points clés :
              </p>
              <ul className="list-disc list-inside text-grey space-y-2">
                <li>Constituer une société à Hong Kong est rapide et peu coûteux, avec des formalités simplifiées.</li>
                <li>Engager un cabinet spécialisé, comme Gresham Trust, garantit la conformité aux réglementations locales.</li>
                <li>Une planification fiscale préalable permet de maximiser les exemptions et minimiser les obligations.</li>
              </ul>
            </section>

            {/* CONCLUSION */}
            <section className="fade-in">
              <h2 className="text-3xl font-semibold text-marine-400 mb-4">Pourquoi choisir Hong Kong ?</h2>
              <p className="text-grey leading-relaxed">
                Avec son régime fiscal avantageux, son infrastructure de classe mondiale et sa position stratégique en Asie, Hong Kong reste une destination de choix pour les entrepreneurs souhaitant optimiser leur fiscalité tout en développant leur activité à l’international. Gresham Trust vous accompagne à chaque étape pour transformer ces opportunités en succès concrets.
              </p>
            </section>
          </div>
        </div>
      </article>

      {/* CTA SECTION */}
      <section className="section-hero">
        <div className="relative z-10 w-full flex flex-col items-center justify-center text-center px-4 py-20 md:py-28">
          <h2 className="headline-premium fade-in">Prêt à optimiser votre fiscalité à Hong Kong ?</h2>
          <div className="divider-premium" />
          <p className="text-grey mb-8 max-w-xl mx-auto text-lg fade-in">
            Contactez Gresham Trust pour une consultation gratuite et découvrez nos solutions sur-mesure pour votre entreprise.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <NewsletterWrapper />
          </div>
        </div>
      </section>
    </main>
  );
}

