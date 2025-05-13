import { CheckIcon } from "@/app/constants/constants";
import { DocumentIcon } from "@/app/constants/constants";
import { GlobeIcon } from "@/app/constants/constants";
import { ScaleIcon } from "@/app/constants/constants";
import { UserIcon } from "@/app/constants/constants";

export default function Boutique() {
  return (
    <main className="min-h-screen pt-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Solutions Clés en Main</h1>
        <p className="mb-8 text-gray-600">Services 100% digitalisés avec garantie d'acceptation bancaire</p>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Pack Start-up */}
          <div className="border rounded-xl p-6 hover:shadow-lg transition-shadow">
            <div className="bg-blue-50 p-4 rounded-lg mb-4">
              <h2 className="text-xl font-bold mb-2">Starter Pack</h2>
              <p className="text-3xl font-bold">€2,490<span className="text-sm text-gray-500">/once</span></p>
            </div>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center">
                <CheckIcon />
                Incorporation UAE Free Zone (Licence commerciale)
              </li>
              <li className="flex items-center">
                <CheckIcon />
                Compte bancaire EMI (Revolut Business inclus)
              </li>
              <li className="flex items-center">
                <CheckIcon />
                Service address + Mail scanning 12 mois
              </li>
            </ul>
            <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
              Choisir ce pack
            </button>
          </div>

          {/* Pack Entreprise */}
          <div className="border rounded-xl p-6 hover:shadow-lg transition-shadow">
            <div className="bg-purple-50 p-4 rounded-lg mb-4">
              <h2 className="text-xl font-bold mb-2">Business Suite</h2>
              <p className="text-3xl font-bold">€4,990<span className="text-sm text-gray-500">/once</span></p>
            </div>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center">
                <CheckIcon />
                Société Hong Kong Limited + Secrétaire d'entreprise
              </li>
              <li className="flex items-center">
                <CheckIcon />
                Compte bancaire traditionnel (HSBC/Citi)
              </li>
              <li className="flex items-center">
                <CheckIcon />
                Audit de conformité fiscal initial
              </li>
              <li className="flex items-center">
                <CheckIcon />
                Certificat de résidence fiscale
              </li>
            </ul>
            <button className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition">
              Choisir ce pack
            </button>
          </div>

          {/* Abonnement */}
          <div className="border rounded-xl p-6 hover:shadow-lg transition-shadow">
            <div className="bg-green-50 p-4 rounded-lg mb-4">
              <h2 className="text-xl font-bold mb-2">Full Compliance</h2>
              <p className="text-3xl font-bold">€790<span className="text-sm text-gray-500">/mois</span></p>
            </div>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center">
                <CheckIcon />
                Gestion comptable complète (IFRS/GAAP)
              </li>
              <li className="flex items-center">
                <CheckIcon />
                Déclarations TVA intra-UE
              </li>
              <li className="flex items-center">
                <CheckIcon />
                Service de payroll international
              </li>
              <li className="flex items-center">
                <CheckIcon />
                Assurance responsabilité directoire
              </li>
            </ul>
            <button className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition">
              Souscrire
            </button>
          </div>
        </div>

        {/* Services à la carte */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Services Additionnels</h2>
          <div className="grid md:grid-cols-4 gap-4">
            <div className="p-4 border rounded-lg text-center">
              <DocumentIcon />
              <p className="font-semibold mt-2">Licence spécifique</p>
              <p className="text-sm text-gray-600">Crypto (Dubai VARA) - À partir de €6,500</p>
            </div>
            <div className="p-4 border rounded-lg text-center">
              <GlobeIcon />
              <p className="font-semibold mt-2">Substance physique</p>
              <p className="text-sm text-gray-600">Bureau virtuel UE - €150/mois</p>
            </div>
            <div className="p-4 border rounded-lg text-center">
              <ScaleIcon />
              <p className="font-semibold mt-2">Audit légal</p>
              <p className="text-sm text-gray-600">Check-up GDPR/CRS - €2,900</p>
            </div>
            <div className="p-4 border rounded-lg text-center">
              <UserIcon />
              <p className="font-semibold mt-2">Nominee services</p>
              <p className="text-sm text-gray-600">Conforme UK LLP Act - €3,200/an</p>
            </div>
          </div>
        </div>

        {/* Garanties */}
        <div className="bg-blue-50 p-8 rounded-xl mb-12">
          <h2 className="text-2xl font-bold mb-6">Notre engagement</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-semibold mb-2">✅ Acceptation bancaire</h3>
              <p className="text-sm">Garantie contrat ou remboursement sous 72h</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">⚖️ Conformité légale</h3>
              <p className="text-sm">Veille réglementaire incluse (MIFID/EMIR)</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">🌍 Support multilingue</h3>
              <p className="text-sm">Assistance 24/7 en FR/EN/ES/AR</p>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}

