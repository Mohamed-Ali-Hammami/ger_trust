export default function Article2() {
  return (
    <main className="min-h-screen pt-20 px-4">
      <h1 className="text-3xl font-bold mb-6">Créer son entreprise étrangère tout en travaillant ailleurs : une opportunité à saisir</h1>
      
      <div className="bg-gray-200 rounded-lg h-64 mb-8 flex items-center justify-center text-gray-500">
        <span>Digital nomade travaillant sur ordinateur portable avec documents juridiques</span>
      </div>

      <div className="max-w-2xl mx-auto">
        <p className="mb-6 text-lg">Avec 35% des travailleurs indépendants opérant désormais hors de leur pays d&apos;origine (Statista 2023), la création d&apos;entreprise à l&apos;étranger pendant une activité salariée devient une stratégie courante. Décryptage d&apos;une tendance en plein essor.</p>

        <div className="space-y-8">
          <div>
            <h2 className="text-xl font-semibold mb-2">Les avantages clés</h2>
            <ul className="list-disc pl-6 space-y-4">
              <li>
                <strong>Optimisation fiscale légale :</strong> 
                <ul className="list-[circle] pl-4 mt-2">
                  <li>Régime forfaitaire suisse à partir de CHF 150,000/an (Loi fédérale sur l&apos;imposition des entreprises)</li>
                  <li>Imposition territoriale à Dubaï (0% sur les revenus hors Émirats)</li>
                  <li>Crédit d&apos;impôt foreign tax credit aux États-Unis pour éviter la double imposition</li>
                </ul>
              </li>
              
              <li>
                <strong>Protection patrimoniale :</strong> 
                <p>Les structures offshore à Singapour (Variable Capital Company) séparent légalement l'actif personnel et professionnel</p>
              </li>

              <li>
                <strong>Accès à des marchés spécifiques :</strong>
                <p>Une société estonienne (e-Residency) donne accès à l'UE sans résidence physique - 100,000 entreprises créées depuis 2014</p>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Cadre juridique</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-blue-50 rounded-lg">
                <h3 className="font-semibold mb-2">Respect des obligations</h3>
                <p>En France : Déclaration n°2065 pour les comptes à l&apos;étranger (amende jusqu&apos;à 750€ par compte non déclaré)</p>
              </div>
              <div className="p-4 bg-blue-50 rounded-lg">
                <h3 className="font-semibold mb-2">Conflits de juridiction</h3>
                <p>L'article 4 de la Convention de Vienne interdit la double imposition entre 100+ pays signataires</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Étapes pratiques</h2>
            <ol className="list-decimal pl-6 space-y-4">
              <li>Choisir une juridiction alignée avec son activité (ex: Chypre pour le shipping, Malte pour le gaming)</li>
              <li>Vérifier les clauses de non-concurrence dans son contrat de travail actuel (illégales dans 43% des pays selon l&apos;OIT)</li>
              <li>Utiliser des plateformes d&apos;incorporation digitales :
                <ul className="list-[circle] pl-4 mt-2">
                  <li>Stripe Atlas (Delaware) : 500€ de frais d&apos;incorporation</li>
                  <li>Osome (Singapour) : gestion complète pour 290€/mois</li>
                </ul>
              </li>
            </ol>
          </div>

          <div className="p-4 bg-green-50 rounded-lg">
            <h3 className="font-semibold mb-2">Cas réel : Success Story</h3>
            <p>Marie, développeuse française salariée à Berlin :</p>
            <ul className="list-[circle] pl-4 mt-2">
              <li>Création d&#39;une OÜ estonienne en 3 jours</li>
              <li>CA 2023 : 320k€ (taux d&#39;imposition effectif : 14% vs 42% en Allemagne)</li>
              <li>Maintien de son CDI initial avec accord employeur (20h/semaine)</li>
            </ul>
          </div>

          <div className="p-4 bg-red-50 rounded-lg">
            <h3 className="font-semibold mb-2">Pièges à éviter</h3>
            <ul className="list-disc pl-6">
              <li>Contrôle fiscal sur les "Transfer Pricing" (règles OECD BEPS)</li>
              <li>Exigences de substance économique : minimum 1-3 employés locaux à Singapour</li>
              <li>Interdiction des nominee directors en Suisse (art. 697 CO)</li>
            </ul>
          </div>
        </div>

        <p className="mt-8 p-4 bg-blue-50 rounded-lg">
          💡 Bonne pratique : Les banques néobanques (Revolut Business, Wise) acceptent 87% des ouvertures de compte à distance contre 35% pour les banques traditionnelles (Juniper Research 2024).
        </p>
      </div>
    </main>
  );
}