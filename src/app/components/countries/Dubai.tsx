import React from 'react';
import { Country } from './Country';

export const Dubai = () => {
  const data = {
    title: "Dubai (DIFC/RAK)",
    emoji: "🇦🇪",
    image: "Dubai.jpg",
    description: "Dubai, cette métropole futuriste à la croisée des continents, a bâti en quelques décennies seulement une réputation de paradis fiscal sans égal. Entre le dynamisme du DIFC (Dubai International Financial Centre) et la flexibilité des zones franches comme RAK, l'émirat offre des solutions sur-mesure pour chaque profil d'investisseur. Avec son absence totale d'impôts sur les sociétés et les particuliers, ses infrastructures ultra-modernes et sa position de gateway vers les marchés du Moyen-Orient, d'Afrique et d'Asie du Sud, Dubai attire comme un aimant les entrepreneurs visionnaires. Ses zones franches spécialisées, hébergeant plus de 30 000 entreprises, proposent des packages clé en main alliant licence commerciale, visa résidence et accès à un réseau bancaire de premier plan - le cocktail parfait pour une expansion internationale fulgurante.",
    benefits: [
      "0% d'impôt sur les sociétés et les particuliers",
      "Zone franche internationale (DIFC) avec statut résidentiel",
      "100% de propriété étrangère autorisée",
      "Pas de contrôle des changes ni de restrictions sur les bénéfices",
      "Visa résidence de 10 ans pour les entrepreneurs",
      "Fiscalité zero : pas d'impôt sur les sociétés, les revenus ou les plus-values (hors secteur bancaire et pétrolier)",
      "100% de propriété étrangère autorisée dans toutes les zones franches",
      "Confidentialité maximale (certaines juridictions n'appliquent pas l'échange automatique CRS)",
      "Pas d'exigence de capital minimum ni d'audit comptable obligatoire pour les Free Zones",
      "Visa résidence premium facilement obtenu pour dirigeants et actionnaires",
      "Cadre juridique basé sur le Common Law pour sécurité juridique optimale",
      "Réseau bancaire robuste (Emirates NBD, ADCB) avec services 100% en anglais",
      "Écosystème complet incluant sièges sociaux virtuels et services administratifs premium",
      "Solution intégrée : Package corporate incluant compte bancaire business avec assistance prioritaire"
    ],
    cta: "Commencer maintenant"
  };

  return <Country {...data} />;
};
