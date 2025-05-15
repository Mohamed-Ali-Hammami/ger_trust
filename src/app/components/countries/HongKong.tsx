import React from 'react';
import { Country } from './Country';

export const HongKong = () => {
  const data = {
    title: "Hong Kong",
    emoji: "🇭🇰",
    image: "HongKong.jpg",
    description: "Hong Kong, cette métropole financière aux portes de la Chine, offre un mélange unique de stabilité juridique britannique et d'accès privilégié au marché chinois. Avec son régime fiscal avantageux (16.5% d'impôt sur les sociétés), son infrastructure financière de pointe et sa position de hub régional, Hong Kong est le choix idéal pour les entreprises souhaitant s'implanter en Asie. Sa zone franche internationale (QFII) et son statut de Special Administrative Region garantissent une sécurité juridique inégalée, tout en offrant des opportunités d'expansion vers les marchés émergents d'Asie.",
    benefits: [
      "16.5% d'impôt sur les sociétés (l'un des plus bas d'Asie)",
      "Pas de taxe sur les plus-values ni de TVA",
      "Droit britannique avec sécurité juridique absolue",
      "Création de société en 24h avec capital minimum de HK$1",
      "Possibilité de structure avec actionnaires nominees",
      "Accès privilégié au marché chinois via le QFII",
      "Réseau bancaire international avec présence des plus grandes banques",
      "Option stratégique : Package incluant compte bancaire et licence financière"
    ],
    cta: "Commencer maintenant",
  };

  return <Country {...data} />;
};