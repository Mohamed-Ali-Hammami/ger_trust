

export default function CompteBancaireProfessionnel() {
  return (
    <main className="min-h-screen pt-20 px-4">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Compte Bancaire Professionnel</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Description */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Pourquoi choisir un compte bancaire professionnel ?</h2>
            <p className="text-gray-600 mb-4">
              Un compte bancaire professionnel est essentiel pour toute entreprise. Il offre de nombreux avantages par rapport à un compte personnel :
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Séparation des flux</h3>
                  <p className="text-gray-600">Une gestion claire et professionnelle de vos finances</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Crédibilité</h3>
                  <p className="text-gray-600">Une image professionnelle pour vos clients et partenaires</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Services professionnels</h3>
                  <p className="text-gray-600">Accès à des services bancaires adaptés aux besoins des entreprises</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Features */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Nos services</h2>
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Ouverture de compte</h3>
                <p className="text-gray-600 mb-4">
                  Nous vous accompagnons dans l&apos;ouverture de votre compte bancaire professionnel, en France et à l&apos;international.
                </p>
                <ul className="list-disc list-inside text-gray-600">
                  <li>Choix du pays et de la banque adaptés à votre activité</li>
                  <li>Assistance dans la constitution du dossier</li>
                  <li>Suivi jusqu&apos;à l&apos;ouverture effective du compte</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Gestion quotidienne</h3>
                <p className="text-gray-600 mb-4">
                  Nous vous aidons à optimiser la gestion de votre compte bancaire professionnel.
                </p>
                <ul className="list-disc list-inside text-gray-600">
                  <li>Optimisation des frais bancaires</li>
                  <li>Conseils sur les solutions de paiement</li>
                  <li>Assistance aux problèmes de trésorerie</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
