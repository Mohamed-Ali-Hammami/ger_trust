import { Metadata } from 'next';
import Image from 'next/image';
import NewsletterWrapper from '../components/NewsletterWrapper';

export const metadata: Metadata = {
  title: 'Créer son entreprise à l’étranger | Gresham Trust',
  description: 'Découvrez comment créer une entreprise à l’étranger avec notre guide complet : choix de la juridiction, démarches légales, et avantages fiscaux.',
  keywords: ['créer entreprise étranger', 'internationalisation', 'juridictions offshore', 'fiscalité'],
};

export default function CreateBusinessAbroad() {
  return (
    <main className="min-h-screen bg-grey-100">
      {/* HERO SECTION */}
      <section className="section-hero">
        <div className="relative z-10 w-full flex flex-col items-center justify-center text-center px-4 py-24 md:py-32">
          <h1 className="headline-premium fade-in">Créer son entreprise à l’étranger</h1>
          <div className="divider-premium" />
          <p className="subheadline-premium max-w-2xl mx-auto mb-6 fade-in">
            Votre guide pour établir une entreprise à l’international avec succès
          </p>
        </div>
      </section>

      {/* ARTICLE CONTENT */}
      <article className="section">
        <div className="container">
          <div className="max-w-4xl mx-auto space-y-12">
            {/* INTRODUCTION */}
            <section className="fade-in">
              <h2 className="text-3xl font-semibold text-royal-500 mb-4">Pourquoi créer une entreprise à l’étranger ?</h2>
              <p className="text-grey-600 leading-relaxed">
                L’internationalisation des entreprises est une stratégie de plus en plus prisée par les entrepreneurs ambitieux. Créer une société à l’étranger permet d’accéder à des marchés dynamiques, de bénéficier d’avantages fiscaux, et de diversifier ses activités dans un environnement juridique et économique favorable. Que vous visiez une juridiction offshore comme les Seychelles ou un hub financier comme Singapour, ce guide vous éclaire sur les étapes et les opportunités.
              </p>
            </section>

            {/* KEY BENEFITS */}
            <section className="fade-in">
              <h2 className="text-3xl font-semibold text-royal-500 mb-4">Avantages de l’internationalisation</h2>
              <ul className="space-y-6 text-grey-600">
                <li className="flex items-start gap-4">
                  <span className="text-2xl text-accent">🌍</span>
                  <div>
                    <h3 className="font-semibold text-xl text-grey-900">Optimisation fiscale</h3>
                    <p>
                      De nombreuses juridictions offrent des régimes fiscaux attractifs, avec des taux d’imposition réduits ou des exemptions sur les revenus étrangers, comme à Hong Kong ou à Dubaï.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-2xl text-accent">🔒</span>
                  <div>
                    <h3 className="font-semibold text-xl text-grey-900">Confidentialité et protection des actifs</h3>
                    <p>
                      Certaines juridictions, comme les Îles Caïmans, garantissent une forte confidentialité et des structures juridiques robustes pour protéger vos actifs.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-2xl text-accent">📈</span>
                  <div>
                    <h3 className="font-semibold text-xl text-grey-900">Accès à de nouveaux marchés</h3>
                    <p>
                      Établir une présence à l’étranger facilite l’accès à des clients, partenaires, et opportunités dans des économies en croissance rapide.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-2xl text-accent">⚖</span>
                  <div>
                    <h3 className="font-semibold text-xl text-grey-900">Simplicité administrative</h3>
                    <p>
                      Des juridictions comme le Delaware (États-Unis) ou Gibraltar offrent des processus de création d’entreprise rapides et peu coûteux.
                    </p>
                  </div>
                </li>
              </ul>
            </section>

            {/* IMAGE SECTION */}
            <section className="fade-in">
              <div className="relative w-full h-64 md:h-96 rounded-2xl overflow-hidden shadow-royal-lg">
                <Image
                  src="/images/business.png"
                  alt="Global business expansion"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-2xl"
                />
              </div>
              <p className="text-center text-grey-500 text-sm mt-4">
                Expansion internationale : une stratégie pour la croissance
              </p>
            </section>

            {/* STEPS TO CREATE */}
            <section className="fade-in">
              <h2 className="text-3xl font-semibold text-royal-500 mb-4">Étapes pour créer une entreprise à l’étranger</h2>
              <p className="text-grey-600 leading-relaxed mb-4">
                La création d’une entreprise à l’étranger nécessite une planification rigoureuse. Voici les étapes essentielles :
              </p>
              <ol className="list-decimal list-inside text-grey-600 space-y-4">
                <li>
                  <strong>Choisir la juridiction adaptée :</strong> Évaluez les avantages fiscaux, la stabilité politique, et les exigences légales de chaque pays (par exemple, Hong Kong pour la fiscalité, Singapour pour l’innovation).
                </li>
                <li>
                  <strong>Définir la structure juridique :</strong> Optez pour une structure adaptée, comme une Limited Company (LTD) ou une LLC, en fonction de vos besoins.
                </li>
                <li>
                  <strong>Préparer les documents nécessaires :</strong> Cela inclut les statuts, l’enregistrement, et parfois une preuve d’adresse ou d’identité.
                </li>
                <li>
                  <strong>Ouvrir un compte bancaire professionnel :</strong> Sélectionnez une banque internationale fiable pour gérer vos transactions.
                </li>
                <li>
                  <strong>Assurer la conformité :</strong> Respectez les obligations fiscales et légales locales, souvent avec l’aide d’un cabinet spécialisé.
                </li>
              </ol>
            </section>

            {/* CHOOSING A JURISDICTION */}
            <section className="fade-in">
              <h2 className="text-3xl font-semibold text-royal-500 mb-4">Comment choisir la bonne juridiction ?</h2>
              <p className="text-grey-600 leading-relaxed">
                Le choix de la juridiction dépend de vos objectifs stratégiques. Voici quelques options populaires :
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div className="card-premium">
                  <h3 className="font-bold text-xl mb-2 text-royal-500">Hong Kong</h3>
                  <p className="text-grey-600">Idéal pour les faibles taxes et l’accès au marché asiatique.</p>
                </div>
                <div className="card-premium">
                  <h3 className="font-bold text-xl mb-2 text-royal-500">Dubaï</h3>
                  <p className="text-grey-600">Parfait pour les zones franches et l’exemption fiscale.</p>
                </div>
                <div className="card-premium">
                  <h3 className="font-bold text-xl mb-2 text-royal-500">Singapour</h3>
                  <p className="text-grey-600">Reconnu pour son innovation et sa stabilité économique.</p>
                </div>
                <div className="card-premium">
                  <h3 className="font-bold text-xl mb-2 text-royal-500">Luxembourg</h3>
                  <p className="text-grey-600">Favorisé pour les holdings et la gestion de patrimoine.</p>
                </div>
              </div>
            </section>

            {/* CONCLUSION */}
            <section className="fade-in">
              <h2 className="text-3xl font-semibold text-royal-500 mb-4">Lancez-vous avec Gresham Trust</h2>
              <p className="text-grey-600 leading-relaxed">
                Créer une entreprise à l’étranger est une opportunité stratégique, mais elle exige une expertise pour naviguer les complexités juridiques et fiscales. Gresham Trust vous accompagne dans le choix de la juridiction, la constitution de votre société, et l’optimisation de votre structure, garantissant un démarrage fluide et conforme. Contactez-nous dès aujourd’hui pour transformer vos ambitions internationales en réalité.
              </p>
            </section>
          </div>
        </div>
      </article>

      {/* CTA SECTION */}
      <section className="section-hero">
        <div className="relative z-10 w-full flex flex-col items-center justify-center text-center px-4 py-20 md:py-28">
          <h2 className="headline-premium fade-in">Prêt à créer votre entreprise à l’étranger ?</h2>
          <div className="divider-premium" />
          <p className="text-grey-100 mb-8 max-w-xl mx-auto text-lg fade-in">
            Contactez Gresham Trust pour une consultation gratuite et découvrez nos solutions sur-mesure pour votre expansion internationale.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <NewsletterWrapper />
          </div>
        </div>
      </section>
    </main>
  );
}