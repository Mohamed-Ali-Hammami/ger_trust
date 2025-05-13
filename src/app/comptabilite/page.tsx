

export default function Comptabilite() {
  return (
    <main className="min-h-screen pt-20 px-4">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Service Comptabilité</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Description */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Notre service comptabilité</h2>
            <p className="text-gray-600 mb-4">
              Nous offrons des services comptables professionnels adaptés aux besoins spécifiques de votre entreprise, que vous soyez en France ou à l'international.
            </p>
            
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Gestion comptable complète</h3>
                <ul className="list-disc list-inside text-gray-600">
                  <li>Tenue de la comptabilité</li>
                  <li>Établissement des déclarations fiscales</li>
                  <li>Établissement des bilans et comptes de résultat</li>
                  <li>Conseils en optimisation fiscale</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Services internationaux</h3>
                <ul className="list-disc list-inside text-gray-600">
                  <li>Gestion comptable multi-pays</li>
                  <li>Conformité aux réglementations locales</li>
                  <li>Optimisation fiscale internationale</li>
                  <li>Support en plusieurs langues</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right Column - Features */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Pourquoi nous choisir ?</h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Expertise internationale</h3>
                  <p className="text-gray-600">Notre équipe maîtrise les réglementations comptables et fiscales de nombreux pays</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Service personnalisé</h3>
                  <p className="text-gray-600">Une approche sur mesure adaptée à vos besoins spécifiques</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Support continu</h3>
                  <p className="text-gray-600">Accompagnement tout au long de l'année</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
