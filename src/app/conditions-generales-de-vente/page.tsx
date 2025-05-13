export default function ConditionsGeneralesDeVente() {
  return (
    <main className="min-h-screen pt-20 px-4 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Conditions Générales de Vente - Gresham Trust Ltd</h1>
      <p className="mb-6 text-sm text-gray-500">Dernière mise à jour : 1er juillet 2024</p>

      <div className="space-y-8 text-justify">
        {/* Article 1 - Objet */}
        <div>
          <h2 className="text-xl font-semibold mb-2">Article 1 - Objet</h2>
          <p>Les présentes CGV régissent exclusivement les relations entre Gresham Trust Ltd (immatriculée au RCS de Luxembourg N° B 987654) et ses clients, pour toutes prestations de conseil en structuration patrimoniale, incorporation internationale et gestion d'actifs.</p>
        </div>

        {/* Article 2 - Champ d'application */}
        <div>
          <h2 className="text-xl font-semibold mb-2">Article 2 - Champ d'application</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>S'appliquent à tout contrat conclu à distance via notre plateforme sécurisée</li>
            <li>Prévalent sur tout document contradictoire sauf accord écrit signé par un dirigeant</li>
            <li>Conformes aux directives MiFID II et AIFMD pour les services régulés</li>
          </ul>
        </div>

        {/* Article 3 - Prix et Paiement */}
        <div>
          <h2 className="text-xl font-semibold mb-2">Article 3 - Prix et Paiement</h2>
          <div className="space-y-2">
            <p><strong>3.1</strong> Les honoraires sont libellés en EUR sauf convention contraire. Taux de change appliqué : ECB + 0.5%.</p>
            <p><strong>3.2</strong> Modalités de paiement : virements SWIFT exclusivement sur comptes dédiés (IBAN LU00 0000 0000 0000). Les cryptomonnaies ne sont pas acceptées.</p>
            <p><strong>3.3</strong> Retard de paiement : pénalités de 1.5% par mois + frais de recouvrement (minimum 250€). Droit de suspension immédiate des services.</p>
          </div>
        </div>

        {/* Article 4 - Obligations des Parties */}
        <div>
          <h2 className="text-xl font-semibold mb-2">Article 4 - Obligations des Parties</h2>
          <div className="space-y-2">
            <p><strong>4.1 Client :</strong></p>
            <ul className="list-disc pl-6">
              <li>Fournir des informations KYC/AML à jour (directive UE 2015/849)</li>
              <li>Signaler tout changement de situation fiscale dans les 15 jours</li>
              <li>Coopérer aux due diligence périodiques</li>
            </ul>
            
            <p><strong>4.2 Prestataire :</strong></p>
            <ul className="list-disc pl-6">
              <li>Secret professionnel absolu (Art. 458 Code pénal lux.)</li>
              <li>Mise en œuvre des meilleurs efforts selon standards PROFEX</li>
              <li>Transmission des rapports trimestriels certifiés</li>
            </ul>
          </div>
        </div>

        {/* Article 5 - Responsabilités */}
        <div>
          <h2 className="text-xl font-semibold mb-2">Article 5 - Responsabilités</h2>
          <div className="space-y-2">
            <p><strong>5.1</strong> Exclusions de garantie :</p>
            <ul className="list-disc pl-6">
              <li>Modifications législatives imprévisibles</li>
              <li>Défaut de coopération client</li>
              <li>Risques de marché sur investissements</li>
            </ul>
            
            <p><strong>5.2</strong> Plafonnement de responsabilité :</p>
            <ul className="list-disc pl-6">
              <li>Limitée au montant des honoraires perçus sur les 12 derniers mois</li>
              <li>Exclusion des dommages indirects et perte d'exploitation</li>
            </ul>
          </div>
        </div>

        {/* Article 6 - Confidentialité */}
        <div>
          <h2 className="text-xl font-semibold mb-2">Article 6 - Confidentialité</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>NDA automatique pour toute relation commerciale (10 ans post-résiliation)</li>
            <li>Protocole GDPR : données hébergées en UE (certifié ISO 27001)</li>
            <li>Interdiction de reverse engineering des modèles d'analyse</li>
          </ul>
        </div>

        {/* Article 7 - Résiliation */}
        <div>
          <h2 className="text-xl font-semibold mb-2">Article 7 - Résiliation</h2>
          <div className="space-y-2">
            <p><strong>7.1</strong> Droit de retrait unilatéral : préavis de 90 jours par recommandé AR</p>
            <p><strong>7.2</strong> Résiliation immédiate pour :</p>
            <ul className="list-disc pl-6">
              <li>Manquement aux obligations réglementaires</li>
              <li>Ouverture de procédure collective</li>
              <li>Sanctions OFAC/UE activées</li>
            </ul>
          </div>
        </div>

        {/* Article 8 - Litiges */}
        <div>
          <h2 className="text-xl font-semibold mb-2">Article 8 - Litiges</h2>
          <div className="space-y-2">
            <p><strong>8.1</strong> Médiation préalable obligatoire (Chambre de Commerce Luxembourg)</p>
            <p><strong>8.2</strong> Tribunaux compétents : juridictions luxembourgeoises exclusives</p>
            <p><strong>8.3</strong> Application de la loi luxembourgeoise hors conflit de lois</p>
          </div>
        </div>

        {/* Clause de réserve */}
        <div className="p-4 bg-yellow-50 rounded-lg">
          <p className="text-sm">Les présentes CGV ne constituent pas une offre de services financiers réglementés. Certaines prestations peuvent nécessiter une approbation préalable conforme à la réglementation en vigueur dans votre juridiction de résidence.</p>
        </div>
      </div>
    </main>
  );
}