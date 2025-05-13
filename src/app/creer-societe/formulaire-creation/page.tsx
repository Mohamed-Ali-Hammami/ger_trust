export default function FormulaireCreation() {
  return (
    <main className="min-h-screen pt-20 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Questionnaire d&apos;incorporation</h1>
        <p className="mb-8 text-gray-600">Informations requises pour une constitution optimale de votre société (Art. 5 RGPD)</p>

        <form className="bg-white p-8 rounded-xl shadow-lg">
          {/* Section 1 - Informations personnelles */}
          <div className="mb-10">
            <h2 className="text-xl font-semibold mb-6 border-b pb-2">1. Identité du bénéficiaire effectif</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block mb-2 font-medium">Nom complet*</label>
                <input 
                  type="text" 
                  className="w-full border rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-blue-500" 
                  placeholder="Prénom(s) NOM" 
                  required 
                />
              </div>
              <div>
                <label className="block mb-2 font-medium">Nationalité*</label>
                <select className="w-full border rounded-lg px-4 py-2.5 bg-white">
                  <option value="">Sélectionner</option>
                  <option>Française</option>
                  <option>Suisse</option>
                  <option>UE/EEE</option>
                  <option>Autre</option>
                </select>
              </div>
              <div>
                <label className="block mb-2 font-medium">Date de naissance*</label>
                <input type="date" className="w-full border rounded-lg px-4 py-2.5" required />
              </div>
              <div>
                <label className="block mb-2 font-medium">Adresse actuelle*</label>
                <input 
                  type="text" 
                  className="w-full border rounded-lg px-4 py-2.5" 
                  placeholder="Rue, Code postal, Pays" 
                  required 
                />
              </div>
            </div>
          </div>

          {/* Section 2 - Structure projetée */}
          <div className="mb-10">
            <h2 className="text-xl font-semibold mb-6 border-b pb-2">2. Caractéristiques de la société</h2>
            <div className="space-y-6">
              <div>
                <label className="block mb-2 font-medium">Juridiction cible*</label>
                <select className="w-full border rounded-lg px-4 py-2.5 bg-white" required>
                  <option value="">Sélectionner</option>
                  <option>Dubai (SA)</option>
                  <option>Gibraltar (LTD)</option>
                  <option>Hong Kong (HKBC)</option>
                  <option>Luxembourg (SARL)</option>
                  <option>Singapour (Pte Ltd)</option>
                  <option>Suisse (GmbH/SA)</option>
                </select>
              </div>
              
              <div>
                <label className="block mb-2 font-medium">Nom provisoire de la société*</label>
                <input 
                  type="text" 
                  className="w-full border rounded-lg px-4 py-2.5" 
                  placeholder="Ex: Global Ventures Ltd" 
                  required 
                />
                <p className="text-sm text-gray-500 mt-1">Vérification de disponibilité incluse</p>
              </div>

              <div>
                <label className="block mb-2 font-medium">Activité principale*</label>
                <textarea 
                  className="w-full border rounded-lg px-4 py-2.5" 
                  rows={2}
                  placeholder="Décrire précisément l'activité (codes NACE/ISIC)" 
                  required 
                />
              </div>

              <div>
                <label className="block mb-2 font-medium">Structure de détention*</label>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input type="radio" name="structure" value="individuelle" className="mr-2" required />
                    Détention individuelle
                  </label>
                  <label className="flex items-center">
                    <input type="radio" name="structure" value="holding" className="mr-2" />
                    Structure holding
                  </label>
                  <label className="flex items-center">
                    <input type="radio" name="structure" value="trust" className="mr-2" />
                    Fiducie/Trust
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Section 3 - Conformité */}
          <div className="mb-10">
            <h2 className="text-xl font-semibold mb-6 border-b pb-2">3. Informations réglementaires</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block mb-2 font-medium">Résidence fiscale actuelle*</label>
                <input 
                  type="text" 
                  className="w-full border rounded-lg px-4 py-2.5" 
                  placeholder="Pays de résidence fiscale" 
                  required 
                />
              </div>
              <div>
                <label className="block mb-2 font-medium">Statut UBO*</label>
                <select className="w-full border rounded-lg px-4 py-2.5 bg-white" required>
                  <option value="">Sélectionner</option>
                  <option>Personne physique</option>
                  <option>Personne morale (déclarer la chaîne de détention)</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <label className="block mb-2 font-medium">Chiffre d&apos;affaires estimé (année 1)*</label>
                <select className="w-full border rounded-lg px-4 py-2.5 bg-white" required>
                  <option value="">Fourchette</option>
                  <option>&lt; 100k €</option>
                  <option>100k - 500k €</option>
                  <option>500k - 2M €</option>
                  <option>&gt; 2M €</option>
                </select>
              </div>
            </div>
          </div>

          {/* Section 4 - Documents */}
          <div className="mb-10">
            <h2 className="text-xl font-semibold mb-6 border-b pb-2">4. Pièces justificatives</h2>
            <div className="space-y-4">
              <div className="border-2 border-dashed rounded-lg p-8 text-center">
                <p className="font-medium mb-2">Déposer vos documents ici</p>
                <p className="text-sm text-gray-500 mb-4">Formats acceptés : PDF, JPG, PNG (max. 10MB par fichier)</p>
                <button type="button" className="bg-blue-50 text-blue-600 px-4 py-2 rounded-lg">
                  Parcourir les fichiers
                </button>
                <input type="file" multiple className="hidden" />
              </div>
              <div className="text-sm">
                <p className="font-medium">Documents obligatoires :</p>
                <ul className="list-disc pl-6 mt-2">
                  <li>Passeport certifié (traduction assermentée si nécessaire)</li>
                  <li>Justificatif de domicile (-3 mois)</li>
                  <li>CV professionnel ou références bancaires</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Section 5 - Validation */}
          <div className="space-y-6">
            <div className="flex items-start">
              <input 
                type="checkbox" 
                id="terms" 
                className="mt-1 mr-2" 
                required 
              />
              <label htmlFor="terms" className="text-sm">
                Je certifie l&apos;exactitude des informations fournies et accepte la 
                <a href="/politique-de-confidentialite" className="text-blue-600 hover:underline ml-1">
                  politique de confidentialité*
                </a>
              </label>
            </div>

            <div className="flex items-start">
              <input 
                type="checkbox" 
                id="compliance" 
                className="mt-1 mr-2" 
                required 
              />
              <label htmlFor="compliance" className="text-sm">
                J&apos;atteste n&apos;être soumis à aucune procédure judiciaire ou sanction internationale
                <a href="/mentions-legales" className="text-blue-600 hover:underline ml-1">
                  mentions légales*
                </a>
              </label>
            </div>

            <button 
              type="submit" 
              className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition"
            >
              Soumettre pour vérification préalable
            </button>

            <p className="text-center text-sm text-gray-500 mt-4">
              Notre équipe vous contactera sous 24h ouvrables pour finaliser l&apos;incorporation
            </p>
          </div>
        </form>
      </div>
    </main>
  );
}