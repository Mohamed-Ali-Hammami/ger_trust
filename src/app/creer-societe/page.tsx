import { CheckIcon } from '@/app/constants/constants';
import { LockIcon } from '@/app/constants/constants';
import { GlobeIcon } from '@/app/constants/constants';
import { ShieldCheckIcon } from '@/app/constants/constants';
import { LockClosedIcon } from '@/app/constants/constants';
import { CurrencyDollarIcon } from '@/app/constants/constants';

export default function CreerSociete() {
  return (
    <main className="min-h-screen pt-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Votre société étrangère opérationnelle en 72h</h1>
          <p className="text-xl text-gray-600 mb-8">Depuis 1999, nous avons incorporé 1,200+ structures pour des entrepreneurs exigeants</p>
          <a 
            href="#formulaire-creation" 
            className="bg-green-600 text-white px-8 py-4 rounded-lg hover:bg-green-700 transition inline-block"
          >
            Démarrer l'incorporation →
          </a>
        </div>

        {/* Pourquoi nous choisir */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="bg-blue-50 p-8 rounded-xl">
            <h2 className="text-2xl font-bold mb-6">Pourquoi créer sa société en ligne ?</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold mb-2">🚀 Rapidité inégalée</h3>
                <p>Incorporez à Luxembourg en 3 jours vs 6 semaines en démarches traditionnelles</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">💸 Économies garanties</h3>
                <p>Jusqu'à 80% de frais en moins qu'un cabinet traditionnel (comparatif 2024 Deloitte)</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">🌍 Expertise multicarte</h3>
                <p>Accès direct à 23 juridictions via notre réseau d'avocats agrées</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 shadow-lg rounded-xl">
            <h2 className="text-2xl font-bold mb-6">Notre valeur ajoutée</h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-green-100 p-2 rounded-lg mr-4">
                  <CheckIcon />
                </div>
                <div>
                  <h3 className="font-semibold">Garantie bancaire</h3>
                  <p className="text-sm">Acceptation sous 5 jours ou remboursement intégral</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-lg mr-4">
                  <LockIcon />
                </div>
                <div>
                  <h3 className="font-semibold">Conformité totale</h3>
                  <p className="text-sm">Veille réglementaire incluse (CRS/FATCA)</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-purple-100 p-2 rounded-lg mr-4">
                  <GlobeIcon />
                </div>
                <div>
                  <h3 className="font-semibold">Support multilingue</h3>
                  <p className="text-sm">Assistance 24/7 par nos équipes FR/EN/ES</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Processus en 3 étapes */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-center mb-8">Notre processus clé en main</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-4">
              <div className="bg-gray-100 w-12 h-12 rounded-full mx-auto mb-4 flex items-center justify-center">1</div>
              <h3 className="font-semibold mb-2">Diagnostic stratégique</h3>
              <p className="text-sm">Analyse de votre situation fiscale et commerciale</p>
            </div>
            <div className="text-center p-4">
              <div className="bg-gray-100 w-12 h-12 rounded-full mx-auto mb-4 flex items-center justify-center">2</div>
              <h3 className="font-semibold mb-2">Incorporation digitale</h3>
              <p className="text-sm">Signature électronique certifiée eIDAS</p>
            </div>
            <div className="text-center p-4">
              <div className="bg-gray-100 w-12 h-12 rounded-full mx-auto mb-4 flex items-center justify-center">3</div>
              <h3 className="font-semibold mb-2">Activation bancaire</h3>
              <p className="text-sm">Ouverture de compte avec nos partenaires premium</p>
            </div>
          </div>
        </div>

        {/* CTA Final */}
        <div id="formulaire-creation" className="text-center bg-gray-50 py-16 rounded-xl">
          <h2 className="text-3xl font-bold mb-4">Prêt à concrétiser votre projet ?</h2>
          <p className="mb-8">98% de nos clients recommandent notre service (survey 2023)</p>
          <a 
            href="/formulaire-creation" 
            className="bg-green-600 text-white px-8 py-4 rounded-lg hover:bg-green-700 transition inline-block"
          >
            Commencer maintenant
          </a>
          <p className="mt-4 text-sm text-gray-500">Processus 100% sécurisé - Aucun engagement</p>
        </div>

        {/* Garanties légales */}
        <div className="mt-12 grid md:grid-cols-3 gap-4 text-center">
          <div className="p-4 border rounded-lg">
            <ShieldCheckIcon />
            <p className="text-sm">Membre de l'Ordre des Experts-Comptables Luxembourg</p>
          </div>
          <div className="p-4 border rounded-lg">
            <LockClosedIcon />
            <p className="text-sm">Données cryptées AES-256 & hébergement RGPD</p>
          </div>
          <div className="p-4 border rounded-lg">
            <CurrencyDollarIcon />
            <p className="text-sm">Honoraires fixes sans frais cachés</p>
          </div>
        </div>
      </div>
    </main>
  );
}
