import React from 'react';
import { Country } from './Country';

export const Luxembourg = () => {
  const data = {
    title: "Luxembourg",
    emoji: "🇱🇺",
    image: "Luxembourg.jpg",
    description: "Niché au cœur de l'Europe, le Luxembourg s'impose comme la plaque tournante financière la plus dynamique du continent, alliant tradition bancaire séculaire et innovations réglementaires audacieuses. Ce micro-État, véritable laboratoire de la finance moderne, offre une stabilité politique inégalée et un écosystème fiscal parmi les plus avantageux d'Europe. Avec ses 150 banques internationales, ses fonds d'investissement représentant près de 4 500 milliards d'euros d'actifs sous gestion et son cadre juridique constamment modernisé, le Grand-Duché s'affirme comme le partenaire incontournable pour toute entreprise ambitieuse. Son positionnement géographique stratégique, ses infrastructures de pointe et son multilinguisme institutionnel en font le hub idéal pour conjuguer rayonnement européen et envergure mondiale - une porte ouverte sur les marchés les plus exigeants.",
    benefits: [
      "Régime fiscal ultra-compétitif pour holdings (exonération quasi-totale sur plus-values et dividendes)",
      "Cadre juridique sur-mesure pour fonds d'investissement (SOPARFI, SICAR, RAIF) avec avantages spécifiques",
      "Confidentialité renforcée et absence totale de contrôle des changes",
      "Accès privilégié au marché unique européen via le passporting financier",
      "Processus de création simplifié (délais réduits à 3 semaines maximum) avec capital symbolique",
      "Possibilité de structure avec administrateurs et actionnaires nominees pour protection optimale",
      "Réseau bancaire d'exception (banques privées et institutional banking de premier rang)",
      "Environnement multilingue (français, anglais, allemand) pour une intégration aisée",
      "Option exclusive : Accompagnement personnalisé pour ouverture de compte bancaire corporate auprès des établissements les plus prestigieux"
    ],
    cta: "Commencer maintenant"
  };

  return <Country {...data} />;
};
