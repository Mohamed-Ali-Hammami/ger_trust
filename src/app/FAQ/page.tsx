"use client";
import { useState } from 'react';

export default function FAQPage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Depuis combien de temps exercez-vous ?",
      answer: "Notre cabinet accompagne les investisseurs depuis 1999. Forts de cette expérience, nous avons guidé plus de 20 000 clients dans des environnements juridiques et fiscaux complexes, au Luxembourg et à l’international."
    },
    {
      question: "Quelles sont vos qualifications ?",
      answer: "Nos conseillers sont diplômés des meilleures institutions et membres d’ordres professionnels reconnus (CSSF, OEC, etc.). Nous nous engageons à suivre +30h de formation annuelle par consultant pour rester à la pointe."
    },
    {
      question: "Comment garantissez-vous la confidentialité ?",
      answer: `La discrétion est notre ADN. Nous appliquons :
      - Des protocoles de chiffrement bancaire
      - Une stricte politique de "need-to-know" en interne
      - Aucune conservation de données sensibles sur cloud public`
    },
    {
      question: "Travaillez-vous avec des banques partenaires ?",
      answer: "Oui, nous entretenons des relations privilégiées avec des établissements de premier plan au Luxembourg, en Suisse et à Singapour. Ces partenariats nous permettent de négocier des conditions avantageuses pour nos clients."
    },
    {
      question: "Quel est votre positionnement sur les crypto-actifs ?",
      answer: "Nous adoptons une approche pragmatique : après audit de votre situation, nous vous indiquons si l’exposition aux cryptos correspond à votre profil de risque. Pour les clients intéressés, nous proposons des solutions régulées (PSAN agréés, fonds institutionnels)."
    },
    {
      question: "Facturez-vous des commissions cachées ?",
      answer: `Absolument pas. Nos honoraires sont toujours :
      - Fixés par écrit avant toute collaboration
      - Transparents (forfait ou % clairement indiqué)
      - Sans rétrocommissions de partenaires`
    },
    {
      question: "Pouvez-vous aider à régulariser une situation fiscale ?",
      answer: "Oui, via notre département dédié. Nous collaborons avec des avocats fiscalistes pour des régularisations en bonne et due forme, en privilégiant toujours le dialogue avec les administrations."
    },
    {
      question: "Quelle différence avec un grand groupe bancaire ?",
      answer: `Contrairement aux banques, nous :
      - Ne vendons pas de produits maison
      - N’avons pas de quotas à remplir
      - Vous conseillons en toute neutralité`
    },
    {
      question: "Comment gérez-vous les conflits d’intérêts ?",
      answer: `Par une charte stricte :
      - Aucune rémunération liée à des produits financiers
      - Déclaration immédiate de tout potentiel conflit
      - Transparence totale sur nos partenariats`
    },
    {
      question: "Quel est votre taux de satisfaction client ?",
      answer: "94% de nos clients renouvellent leur confiance année après année (enquête 2023). Notre meilleure publicité reste leurs recommandations."
    }
  ];

  return (
    <main className="min-h-screen pt-20 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto py-12">
        <div className="text-center mb-16">
          <h1 className="text-3xl font-bold mb-4">FAQ - Cabinet Gresham Trust Ltd.</h1>
          <p className="text-gray-600">Vos questions, nos réponses transparentes</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="border rounded-lg bg-white transition-all"
              onClick={() => setActiveIndex(activeIndex === index ? null : index)}
            >
              <button
                className="w-full text-left px-6 py-4 flex justify-between items-center hover:bg-gray-50"
                aria-expanded={activeIndex === index}
                aria-controls={`faq-${index}`}
              >
                <span className="font-semibold pr-4">{faq.question}</span>
                <span className="shrink-0 ml-4">
                  {activeIndex === index ? (
                    <ChevronUpIcon className="h-5 w-5 text-blue-600" />
                  ) : (
                    <ChevronDownIcon className="h-5 w-5 text-gray-400" />
                  )}
                </span>
              </button>
              
              {activeIndex === index && (
                <div 
                  id={`faq-${index}`}
                  className="px-6 pb-4 pt-2 border-t"
                  role="region"
                >
                  {faq.answer.includes('-') ? (
                    <ul className="list-disc pl-6 space-y-2">
                      {faq.answer.split('\n').map((line, i) => (
                        <li key={i} className="text-gray-700">{line.trim().replace(/^- /, '')}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-gray-700">{faq.answer}</p>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 text-center bg-blue-50 p-8 rounded-xl">
          <h2 className="text-xl font-semibold mb-4">Question non résolue ?</h2>
          <p className="mb-4">Notre équipe se tient à votre disposition pour toute précision</p>
          <a 
            href="mailto:contact@greshamtrust.lu" 
            className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Nous contacter
          </a>
        </div>
      </div>
    </main>
  );
}

function ChevronUpIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
    </svg>
  );
}

function ChevronDownIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
  );
}