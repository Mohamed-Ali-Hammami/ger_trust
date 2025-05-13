import { Metadata } from 'next';

import Image from 'next/image';
import NewsletterWrapper from '../components/NewsletterWrapper';

export const metadata: Metadata = {
  title: 'Guide du business à Dubaï | Gresham Trust',
  description: 'Explorez notre guide complet pour faire des affaires à Dubaï : zones franches, avantages fiscaux, et opportunités pour les entrepreneurs internationaux.',
  keywords: ['business Dubaï', 'zones franches', 'création entreprise', 'investissement Émirats'],
};

export default function BusinessGuideDubai() {
  return (
    <main className="min-h-screen bg-grey-900">
      {/* HERO SECTION */}
      <section className="section-hero">
        <div className="relative z-10 w-full flex flex-col items-center justify-center text-center px-4 py-24 md:py-32">
          <h1 className="headline-premium fade-in">Guide du business à Dubaï</h1>
          <div className="divider-premium" />
          <p className="subheadline-premium max-w-2xl mx-auto mb-6 fade-in text-gray-300">
            Découvrez pourquoi Dubaï est un hub incontournable pour les entrepreneurs mondiaux
          </p>
        </div>
      </section>

      {/* ARTICLE CONTENT */}
      <article className="section bg-grey-800">
        <div className="container">
          <div className="max-w-4xl mx-auto space-y-12 text-grey">
            {/* INTRODUCTION */}
            <section className="fade-in">
              <h2 className="text-3xl font-semibold text-marine-400 mb-4">Pourquoi choisir Dubaï pour votre entreprise ?</h2>
              <p className="text-white leading-relaxed">
                Dubaï, l’une des sept Émirats des Émirats Arabes Unis, est devenue un centre économique mondial grâce à son environnement favorable aux affaires, ses infrastructures modernes, et sa position stratégique entre l’Europe, l’Asie, et l’Afrique. Que vous soyez un entrepreneur ou une multinationale, Dubaï offre des opportunités uniques pour la croissance et l’innovation.
              </p>
            </section>

            {/* KEY ADVANTAGES */}
            <section className="fade-in">
              <h2 className="text-3xl font-semibold text-marine-400 mb-4">Avantages clés pour les entreprises</h2>
              <ul className="space-y-6 text-white">
                <li className="flex items-start gap-4">
                  <span className="text-2xl text-marine-400">💰</span>
                  <div>
                    <h3 className="font-semibold text-xl text-white">Exemptions fiscales</h3>
                    <p>
                      Les zones franches de Dubaï offrent une exonération totale de l’impôt sur les sociétés et sur les revenus personnels, ainsi que l’absence de taxes sur les importations et exportations.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-2xl text-marine-400">🌐</span>
                  <div>
                    <h3 className="font-semibold text-xl text-white">Propriété étrangère à 100 %</h3>
                    <p>
                      Dans les zones franches, les investisseurs étrangers peuvent détenir 100 % de leur entreprise, sans obligation de partenaire local.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-2xl text-marine-400">📍</span>
                  <div>
                    <h3 className="font-semibold text-xl text-white">Position stratégique</h3>
                    <p>
                      Dubaï est un carrefour mondial, avec un accès facile aux marchés émergents et développés grâce à son port et son aéroport de classe mondiale.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-2xl text-marine-400">🏢</span>
                  <div>
                    <h3 className="font-semibold text-xl text-white">Infrastructures modernes</h3>
                    <p>
                      Dubaï dispose d’infrastructures de pointe, incluant des bureaux high-tech, des réseaux logistiques, et des technologies avancées.
                    </p>
                  </div>
                </li>
              </ul>
            </section>

            {/* IMAGE SECTION */}
            <section className="fade-in">
              <div className="relative w-full h-64 md:h-96 rounded-2xl overflow-hidden shadow-marine-lg">
                <Image
                  src="/images/countries/Dubai.jpg"
                  alt="Dubaï skyline"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-2xl"
                />
              </div>
              <p className="text-center text-white text-sm mt-4">
                Skyline de Dubaï, symbole de l’innovation et de la croissance
              </p>
            </section>

            {/* FREE ZONES */}
            <section className="fade-in">
              <h2 className="text-3xl font-semibold text-marine-400 mb-4">Les zones franches de Dubaï</h2>
              <p className="text-white leading-relaxed mb-4">
                Les zones franches sont des zones économiques spéciales conçues pour attirer les investisseurs étrangers. Voici quelques-unes des plus populaires :
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="card-premium">
                  <h3 className="font-bold text-xl mb-2 text-marine-400">Dubai Multi Commodities Centre (DMCC)</h3>
                  <p className="text-white">Idéal pour le commerce, les matières premières, et les services financiers.</p>
                </div>
                <div className="card-premium">
                  <h3 className="font-bold text-xl mb-2 text-marine-400">Jebel Ali Free Zone (JAFZA)</h3>
                  <p className="text-white">Parfait pour la logistique, le commerce, et l’industrie.</p>
                </div>
                <div className="card-premium">
                  <h3 className="font-bold text-xl mb-2 text-marine-400">Dubai Internet City (DIC)</h3>
                  <p className="text-white">Conçu pour les entreprises technologiques et numériques.</p>
                </div>
                <div className="card-premium">
                  <h3 className="font-bold text-xl mb-2 text-marine-400">Dubai Media City (DMC)</h3>
                  <p className="text-white">Dédié aux médias, à la publicité, et à la communication.</p>
                </div>
              </div>
            </section>

            {/* STEPS TO START */}
            <section className="fade-in">
              <h2 className="text-3xl font-semibold text-marine-400 mb-4">Comment démarrer une entreprise à Dubaï</h2>
              <p className="text-white leading-relaxed mb-4">
                Créer une entreprise à Dubaï est un processus structuré. Voici les étapes clés :
              </p>
              <ol className="list-decimal list-inside text-white space-y-4">
                <li>
                  <strong>Choisir le type d’activité :</strong> Déterminez votre secteur (commerce, services, industrie) et sélectionnez une licence appropriée (commerciale, professionnelle, industrielle).
                </li>
                <li>
                  <strong>Sélectionner une zone franche ou mainland :</strong> Les zones franches offrent plus de flexibilité, tandis que le mainland permet de commercer directement avec le marché local.
                </li>
                <li>
                  <strong>Enregistrer la société :</strong> Soumettez les documents requis, tels que le plan d’affaires, les passeports, et les formulaires d’enregistrement.
                </li>
                <li>
                  <strong>Ouvrir un compte bancaire :</strong> Choisissez une banque locale ou internationale pour gérer vos finances.
                </li>
                <li>
                  <strong>Obtenir des visas :</strong> Demandez des visas pour vous et vos employés, facilités dans les zones franches.
                </li>
              </ol>
            </section>

            {/* CONCLUSION */}
            <section className="fade-in">
              <h2 className="text-3xl font-semibold text-marine-400 mb-4">Votre succès à Dubaï avec Gresham Trust</h2>
              <p className="text-white leading-relaxed">
                Dubaï offre un environnement idéal pour les entrepreneurs visionnaires, avec des avantages fiscaux, une infrastructure de pointe, et un accès mondial. Gresham Trust vous guide à travers chaque étape, de la sélection de la zone franche à la conformité légale, pour assurer le succès de votre entreprise. Contactez-nous pour démarrer votre aventure à Dubaï.
              </p>
            </section>
          </div>
        </div>
      </article>

      {/* CTA SECTION */}
      <section className="section-hero">
        <div className="relative z-10 w-full flex flex-col items-center justify-center text-center px-4 py-20 md:py-28">
          <h2 className="headline-premium fade-in">Prêt à lancer votre business à Dubaï ?</h2>
          <div className="divider-premium" />
          <p className="text-grey mb-8 max-w-xl mx-auto text-lg fade-in">
            Contactez Gresham Trust pour une consultation gratuite et découvrez nos solutions pour votre entreprise à Dubaï.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <NewsletterWrapper />
          </div>
        </div>
      </section>
    </main>
  );
}