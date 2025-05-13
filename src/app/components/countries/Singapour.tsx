import React from 'react';
import { Country } from './Country';

export const Singapour = () => {
  const data = {
    title: "Singapour 🇸🇬",
    emoji: "🇸🇬",
    image: "Singapour.jpg",
    description: "Singapour, ce dragon asiatique à l'économie florissante, a magistralement su transformer sa position géographique en un avantage stratégique incomparable. Classée première mondiale pour la facilité à faire des affaires depuis dix années consécutives, la cité-État offre un environnement réglementaire d'une clarté exceptionnelle, doublé d'une fiscalité parmi les plus attractives au monde. Avec ses infrastructures technologiques de pointe, son cadre juridique inspiré du Common Law et son statut de hub maritime et aérien global, Singapour s'est imposée comme la porte d'entrée incontournable vers les marchés asiatiques en plein boom. Son écosystème financier, regroupant plus de 200 banques internationales et 700 fonds d'investissement, en fait le terrain de jeu privilégié des entreprises high-tech, des sociétés de trading et des family offices les plus exigeants.",
    benefits: [
      "Régime territorial avantageux (exonération totale des revenus générés hors de Singapour)",
      "Taux d'imposition corporate plafonné à 17% avec multiples exemptions possibles",
      "Absence de TVA (remplacée par une GST à taux unique de 9% sur consommation locale uniquement)",
      "Création d'entreprise express (délai record de 48 heures) avec capital symbolique de 1 SGD",
      "Structure à actionnariat anonyme possible via nominee shareholders",
      "Réseau de plus de 80 conventions de non-double imposition avec les principales économies mondiales",
      "Place bancaire réputée (DBS, UOB, OCBC) pour transactions multi-devises optimales",
      "Environnement 100% anglophone avec main-d'œuvre hautement qualifiée",
      "Option premium : Introduction bancaire accélérée auprès des établissements partenaires les plus sélectifs"
    ],
    cta: "Découvrir les opportunités à Singapour"
  };

  return <Country {...data} />;
};