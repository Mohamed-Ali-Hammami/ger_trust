export default function MentionsLegales() {
  return (
    <main className="min-h-screen pt-20 px-4">
      <div className="max-w-4xl mx-auto py-12">
        <h1 className="text-3xl font-bold mb-8">Mentions légales - Gresham Trust Ltd</h1>

        <div className="space-y-8 text-justify">
          {/* Éditeur */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Éditeur du site</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Dénomination sociale : Gresham Trust Ltd</li>
              <li>Forme juridique : Société à responsabilité limitée (SARL)</li>
              <li>RCS Luxembourg : B 987654</li>
              <li>Numéro TVA : LU12345678</li>
              <li>Siège social : 20 Boulevard Royal, L-2449 Luxembourg</li>
              <li>Téléphone : +352 27 123 456</li>
              <li>Email légal : legal@greshamtrust.lu</li>
            </ul>
          </div>

          {/* Directeur de publication */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Directeur de publication</h2>
            <p>M. Jean-Marc Lefèvre, Managing Director</p>
          </div>

          {/* Hébergement */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Hébergement</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Fournisseur : LuxConnect S.A.</li>
              <li>Adresse : 2 rue Albert Borschette, L-1246 Luxembourg</li>
              <li>Certifications : ISO 27001, PCI DSS</li>
              <li>Localisation des données : Centre de données Bissen (Luxembourg)</li>
            </ul>
          </div>

          {/* Propriété intellectuelle */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Propriété intellectuelle</h2>
            <p>
              L'ensemble des contenus (textes, images, logos) est la propriété exclusive de Gresham Trust Ltd 
              ou de ses concédants. Toute reproduction nécessite une autorisation écrite préalable 
              (article L.122-4 du Code de la propriété intellectuelle).
            </p>
          </div>

          {/* Données personnelles */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Protection des données</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Délégué à la protection des données : dpd@greshamtrust.lu</li>
              <li>Finalités du traitement : exécution contractuelle et prospection ciblée</li>
              <li>Destinataires : services internes et prestataires certifiés</li>
              <li>Durée de conservation : 5 ans après la fin de la relation commerciale</li>
              <li>Droits : accès, rectification, opposition via <a href="/rgpd" className="text-blue-600">notre formulaire dédié</a></li>
            </ul>
          </div>

          {/* Réglementation */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Réglementation</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Inscrit au registre de la CSSF (Commission de Surveillance du Secteur Financier)</li>
              <li>Membre de l'Ordre des Experts-Comptables Luxembourg (OEC) n°12345</li>
              <li>Assurance responsabilité civile professionnelle : AXA XL Policy n°GB12345678</li>
            </ul>
          </div>

          {/* Médiation */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Médiation</h2>
            <p>
              En cas de litige, vous pouvez recourir au médiateur de la consommation :<br/>
              Centre de Médiation de la Consommation - 14 rue Saint Esprit, L-1475 Luxembourg
            </p>
          </div>

          {/* Copyright */}
          <div className="border-t pt-8 mt-8">
            <p className="text-sm text-gray-600">
              © 1999-2024 Gresham Trust Ltd - Tous droits réservés<br/>
              Dernière mise à jour : 1er juillet 2024
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}