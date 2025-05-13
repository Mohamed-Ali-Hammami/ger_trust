import React from "react";

export default function AboutUs() {
  return (
    <main className="min-h-screen bg-gray-50 pt-20 px-4">
      <div className="container mx-auto max-w-4xl py-12">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">À propos de Gresham Trust</h1>
        <div className="divider-premium mx-auto mb-8" />
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Notre histoire</h2>
          <p className="text-gray-700 mb-4">
            Fondée en 1999, <strong>Gresham Trust Ltd.</strong> s’est imposée comme le partenaire international de référence pour la création et la gestion d’entreprises premium. Depuis plus de deux décennies, nous accompagnons les entrepreneurs ambitieux, les investisseurs institutionnels et les particuliers fortunés à travers le monde.
          </p>
          <p className="text-gray-700">
            Notre réputation repose sur une expertise rigoureuse, un réseau international d’excellence et une éthique irréprochable. Nous privilégions une approche humaine et personnalisée, où chaque client bénéficie d’un accompagnement sur-mesure et d’une relation de confiance à long terme.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Nos valeurs</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><strong>Excellence</strong> : Une exigence opérationnelle et stratégique, au service de votre réussite.</li>
            <li><strong>Confiance</strong> : Des relations durables, bâties sur la discrétion, la transparence et l’intégrité.</li>
            <li><strong>Croissance</strong> : Un accompagnement proactif pour transformer chaque complexité en opportunité.</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Notre mission</h2>
          <p className="text-gray-700">
            Offrir aux entrepreneurs et investisseurs un accès privilégié à des solutions de création d’entreprise, de gestion comptable et fiscale, et d’accompagnement stratégique dans les juridictions les plus attractives du monde. Nous transformons les défis juridiques et financiers en opportunités claires et maîtrisées.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Nos services premium</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><strong>Création internationale</strong> : Constitution rapide et sécurisée de sociétés (jusqu’à 23 juridictions, ex : Luxembourg en 3 jours).</li>
            <li><strong>Comptabilité & Fiscalité</strong> : Gestion comptable et fiscale sur-mesure, optimisation, conformité multi-pays.</li>
            <li><strong>Accompagnement stratégique</strong> : Support juridique, bancaire et opérationnel à chaque étape de votre développement.</li>
            <li><strong>Solutions clés en main</strong> : Packs digitaux avec garantie d’acceptation bancaire, gestion administrative et domiciliation.</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Pourquoi choisir Gresham Trust ?</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><strong>Expérience éprouvée</strong> : Plus de 1 200 structures créées depuis 1999.</li>
            <li><strong>Rapidité et économies</strong> : Incorporation en 3 jours, jusqu’à 80% de frais en moins qu’un cabinet traditionnel.</li>
            <li><strong>Réseau exclusif</strong> : Accès à des partenaires bancaires et juridiques triés sur le volet.</li>
            <li><strong>Expertise multilingue et multiculturelle</strong> : Support en plusieurs langues, connaissance approfondie des marchés internationaux.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Notre engagement</h2>
          <p className="text-gray-700">
            Chez Gresham Trust, votre succès est notre référence. Nous nous engageons à vous offrir bien plus que des promesses : une excellence opérationnelle, une confidentialité absolue et un accompagnement personnalisé à chaque étape de votre parcours entrepreneurial.
          </p>
        </section>
      </div>
    </main>
  );
}
