import React from 'react';
import { Country } from './Country';

export const Suisse = () => {
  const data = {
    title: "Suisse 🇨🇭",
    emoji: "🇨🇭",
    image: "Suisse.jpg",
    description: "La Suisse, symbole intemporel de stabilité financière et d'excellence bancaire, continue de briller comme l'un des écosystèmes les plus fiables au monde pour les entreprises exigeantes. Avec son cadre juridique d'une précision horlogère, ses accords fiscaux avantageux avec l'UE et sa neutralité politique légendaire, la Confédération helvétique offre un havre unique pour les sociétés de trading, les family offices et les holdings internationales. Zurich et Genève, classées parmi les villes les plus attractives pour les sièges sociaux européens, combinent infrastructures de pointe, main-d'œuvre ultra-qualifiée et accès privilégié aux marchés mondiaux. Un environnement où tradition et innovation créent un équilibre parfait pour les ambitions pérennes.",
    benefits: [
      "Fiscalité compétitive avec taux d'imposition dégressifs selon les cantons (pratiques avantageuses pour holdings)",
      "Stabilité juridique et politique inégalée en Europe (neutralité historique)",
      "Réseau bancaire le plus sécurisé au monde avec stricte confidentialité",
      "Accès au marché européen via les accords bilatéraux sans adhésion à l'UE",
      "Structures de société flexibles (SA, SARL) avec capital minimum raisonnable",
      "Possibilité de domiciliation virtuelle pour siège social prestigieux",
      "Convention de double imposition avec plus de 100 pays pour optimisation fiscale",
      "Environnement multilingue (allemand, français, italien, anglais) opérationnel",
      "Option exclusive : Accès prioritaire aux banques privées suisses pour ouverture de compte corporate avec conditions privilégiées"
    ],
    cta: "Découvrir les opportunités en Suisse",
  };

  return <Country {...data} />;
};