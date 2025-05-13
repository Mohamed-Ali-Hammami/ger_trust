import Image from 'next/image';

export default function GestionPatrimoine() {
  return (
    <main className="min-h-screen pt-20 px-4">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Gestion de Patrimoine</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Description */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Votre patrimoine mérite une gestion stratégique</h2>
            <p className="text-gray-600 mb-4">
              Nous vous accompagnons dans la construction et la protection de votre patrimoine, en France et à l&apos;international.
            </p>
            
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Services de gestion patrimoniale</h3>
                <ul className="list-disc list-inside text-gray-600">
                  <li>Analyse et optimisation de votre patrimoine</li>
                  <li>Stratégies de transmission</li>
                  <li>Gestion des risques patrimoniaux</li>
                  <li>Optimisation fiscale internationale</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Solutions internationales</h3>
                <ul className="list-disc list-inside text-gray-600">
                  <li>Structures patrimoniales offshore</li>
                  <li>Optimisation fiscale transfrontalière</li>
                  <li>Gestion de patrimoine multi-pays</li>
                  <li>Protection des actifs internationaux</li>
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
                  <p className="text-gray-600">Notre équipe maîtrise les réglementations patrimoniales de nombreux pays</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Approche personnalisée</h3>
                  <p className="text-gray-600">Stratégies adaptées à votre situation patrimoniale unique</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Accompagnement sur mesure</h3>
                  <p className="text-gray-600">Suivi personnalisé et conseil adapté à vos objectifs</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
