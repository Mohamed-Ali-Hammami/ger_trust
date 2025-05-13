import React from 'react';
import { Country } from './Country';

export const Gibraltar = () => {
  const data = {
    title: "Gibraltar",
    emoji: "🇬🇮",
    image: "Gibraltar.jpg",
    description: "Gibraltar, ce rocher stratégique entre deux mers et deux continents, a su transformer sa position géographique en atout économique majeur. Territoire britannique doté d'un régime fiscal avantageux, il combine les standards juridiques du Common Law avec une fiscalité ultra-compétitive (10% d'impôt sur les sociétés). Sa proximité avec l'Espagne et l'Afrique en fait un pont naturel entre l'Europe et les marchés émergents. Avec ses infrastructures numériques de pointe et son cadre réglementaire simplifié, Gibraltar séduit particulièrement les entreprises de gaming, fintech et services financiers.",
    benefits: [
      "Imposition corporate fixe à 10% (l'une des plus basses d'Europe)",
      "Pas de TVA ni de taxe sur les plus-values",
      "Droit britannique avec sécurité juridique absolue",
      "Création de société en 48h avec capital minimum de £100",
      "Possibilité de structure avec actionnaires nominees",
      "Accès privilégié au marché britannique post-Brexit",
      "Réseau bancaire solide avec banques internationales présentes",
      "Option stratégique : Package incluant compte bancaire et licence financière si nécessaire"
    ],
    cta: "Découvrir les opportunités à Gibraltar",
  };

  return <Country {...data} />;
};