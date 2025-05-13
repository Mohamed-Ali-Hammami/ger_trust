export default function PolitiqueConfidentialite() {
  return (
    <main className="min-h-screen pt-20 px-4">
      <div className="max-w-4xl mx-auto py-12">
        <h1 className="text-3xl font-bold mb-8">Politique de Confidentialité - Gresham Trust Ltd</h1>

        <div className="space-y-8 text-justify">
          <div>
            <h2 className="text-xl font-semibold mb-4">1. Responsable du traitement</h2>
            <p>
              Gresham Trust Ltd (ci-après &quot;le Cabinet&quot;), immatriculée au RCS Luxembourg B 987654,
              agit en qualité de responsable de traitement au sens du RGPD (Règlement UE 2016/679).
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">2. Finalités légales</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Exécution contractuelle (Art. 6.1.b RGPD)</li>
              <li>Obligations légales (Art. 6.1.c RGPD - Loi du 12 novembre 2004 relative à la lutte contre le blanchiment)</li>
              <li>Intérêt légitime (Art. 6.1.f RGPD - Sécurité des systèmes)</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">3. Données traitées</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-2">Catégorie</th>
                    <th className="text-left p-2">Exemples</th>
                    <th className="text-left p-2">Base légale</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-2">Identifiants réglementaires</td>
                    <td className="p-2">KYC, historique bancaire</td>
                    <td className="p-2">Obligation légale</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">Données techniques</td>
                    <td className="p-2">Adresse IP, logs</td>
                    <td className="p-2">Intérêt légitime</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">Données sensibles</td>
                    <td className="p-2">Origine des fonds</td>
                    <td className="p-2">Art. 9.2.b RGPD</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">4. Destinataires</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Banques partenaires (sous accord préalable)</li>
              <li>Autorités de régulation (CSSF, CELL)</li>
              <li>Sous-traitants certifiés ISO 27001</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">5. Transferts internationaux</h2>
            <p>Les données restent dans l&apos;EEE sauf nécessité contractuelle. Transferts hors UE encadrés par :</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Clauses contractuelles types (Décision UE 2021/914)</li>
              <li>Certification Privacy Shield (États-Unis)</li>
              <li>Art. 49.1.b RGPD (exécution contractuelle)</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">6. Sécurité</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Chiffrement AES-256 + TLS 1.3</li>
              <li>Contrôle d&apos;accès biométrique</li>
              <li>Audits pentest trimestriels</li>
              <li>Segmentation réseau de niveau MILS</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">7. Conservation</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Données clients : 10 ans post-fin de relation (Directive 2014/56/UE)</li>
              <li>Preuves de transaction : 15 ans</li>
              <li>Cookies analytiques : 13 mois (Art. 82 Loi Informatique et Libertés)</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">8. Droits des personnes</h2>
            <p>
              Vous pouvez exercer vos droits via notre <a href="/rgpd-request" className="text-blue-600">formulaire dédié</a> :
            </p>
            <div className="grid md:grid-cols-2 gap-4 mt-2">
              <div className="p-3 border rounded">
                <h3 className="font-semibold">Accès & Portabilité</h3>
                <p className="text-sm">Réponse sous 30 jours (Art. 15 RGPD)</p>
              </div>
              <div className="p-3 border rounded">
                <h3 className="font-semibold">Oubli & Restriction</h3>
                <p className="text-sm">Sous réserve des obligations légales</p>
              </div>
            </div>
          </div>

          <div className="bg-red-50 p-4 rounded-lg">
            <h2 className="text-xl font-semibold mb-2">Avertissement légal</h2>
            <p className="text-sm">
              Toute fausse déclaration ou tentative d&apos;accès illicite sera signalée aux autorités compétentes 
              (Art. 226-1 du Code pénal luxembourgeois).
            </p>
          </div>

          <div className="border-t pt-8 mt-8">
            <p className="text-sm text-gray-600">
              Version consolidée au 1er juillet 2024<br/>
              © Gresham Trust Ltd - Toute reproduction constitue un délit (Art. 2 Loi du 18 avril 2001)
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}