import { Button } from "./components/ui/Button";
import Image from "next/image";
import NewsletterWrapper from "./components/NewsletterWrapper";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* HERO SECTION */}
      <section className="section-hero">
        <div className="relative z-10 w-full flex flex-col items-center justify-center text-center px-4 py-24 md:py-32">
          <h1 className="headline-premium fade-in">Gresham Trust</h1>
          <div className="divider-premium" />
          <p className="subheadline-premium max-w-2xl mx-auto mb-6 fade-in">Votre Partenaire International pour la Création et la Gestion d’Entreprises Premium</p>
          <p className="max-w-2xl mx-auto mb-10 text-lg text-white/90 font-medium fade-in">Nous accompagnons les entrepreneurs ambitieux dans le monde entier avec des solutions sur-mesure, une expertise de haut niveau et une approche humaine.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <NewsletterWrapper />
          </div>
        </div>
      </section>

      {/* EXCELLENCE SECTION */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="headline-premium fade-in text-slate-500">« Excellence, Confiance, Croissance »</h2>
            <div className="divider-premium mx-auto" />
          </div>
          <div className="max-w-4xl mx-auto text-center text-gray-400 space-y-6 fade-in">
            <p>Depuis 1999, Gresham Trust Ltd. incarne l&apos;excellence dans le conseil en investissement et l&apos;accompagnement stratégique pour les entrepreneurs, investisseurs institutionnels et particuliers fortunés. Notre réputation repose sur une expertise rigoureuse, un réseau international et une éthique irréprochable.</p>
            <p>Notre cabinet se distingue par une approche personnalisée, alliant réactivité et discrétion. Contrairement aux acteurs généralistes, nous privilégions une relation de confiance à long terme, où votre succès devient notre référence. Nos clients bénéficient d&apos;un accès privilégié à des outils d&apos;analyse exclusifs et à un réseau bancaire trié sur le volet.</p>
            <p className="font-semibold">Engagés à transcender les simples conseils, nous transformons les complexités juridiques et financières en opportunités claires et maîtrisées. Parce que votre réussite mérite plus que des promesses, elle exige l&apos;excellence opérationnelle.</p>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card-premium fade-in">
              <h3 className="font-bold text-xl mb-2 text-slate-500">Stratégie sur-mesure</h3>
              <p className="text-gray-500">Solutions adaptées à chaque ambition, locale ou transnationale</p>
            </div>
            <div className="card-premium fade-in">
              <h3 className="font-bold text-xl mb-2 text-slate-500">Réseau exclusif</h3>
              <p className="text-gray-500">Partenariats bancaires et juridiques triés sur le volet</p>
            </div>
            <div className="card-premium fade-in">
              <h3 className="font-bold text-xl mb-2 text-slate-500">Expertise depuis 1999</h3>
              <p className="text-gray-500">Une expérience éprouvée au service de votre croissance</p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="section-alt">
        <div className="container">
          <h2 className="headline-premium text-center fade-in text-slate-500">Nos Services Premium</h2>
          <div className="divider-premium mx-auto" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="card-premium fade-in">
              <div className="text-5xl mb-6 text-accent">🌐</div>
              <h3 className="font-bold text-2xl mb-2 text-accent">Création Internationale</h3>
              <p className="text-gray-500">Constitution rapide et sécurisée de sociétés dans les juridictions les plus attractives du monde.</p>
            </div>
            <div className="card-premium fade-in">
              <div className="text-5xl mb-6 text-accent">📊</div>
              <h3 className="font-bold text-2xl mb-2 text-accent">Comptabilité & Fiscalité</h3>
              <p className="text-gray-500">Gestion comptable, fiscale et conformité avec optimisation sur-mesure pour chaque projet.</p>
            </div>
            <div className="card-premium fade-in">
              <div className="text-5xl mb-6 text-accent">💼</div>
              <h3 className="font-bold text-2xl mb-2 text-accent">Accompagnement Premium</h3>
              <p className="text-gray-500">Support stratégique, juridique et bancaire à chaque étape de votre développement.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="section-dark">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
            <div className="flex-1 text-center md:text-left fade-in">
              <h2 className="headline-premium">Gresham Trust : Votre Partenaire de Confiance</h2>
              <div className="divider-premium md:mx-0" />
              <p className="text-lg text-white/90 mb-6">Depuis notre création en 1999, Gresham Trust accompagne les entrepreneurs et les entreprises dans leur développement international. Notre expertise couvre les juridictions les plus attractives, offrant des solutions sur mesure pour chaque projet.</p>
              <ul className="space-y-4 text-white/90">
                <li className="flex items-start gap-4">
                  <span className="text-3xl text-accent">🎯</span>
                  <div>
                    <h3 className="font-semibold mb-1">Expertise Internationale</h3>
                    <p>Connaissance approfondie des juridictions les plus attractives pour votre activité.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-3xl text-accent">🤝</span>
                  <div>
                    <h3 className="font-semibold mb-1">Partenaires Locaux</h3>
                    <p>Réseau de partenaires locaux pour garantir la conformité et l&apos;efficacité de vos opérations.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-3xl text-accent">✔</span>
                  <div>
                    <h3 className="font-semibold mb-1">Approche Personnalisée</h3>
                    <p>Relation de confiance durable avec des solutions adaptées à vos besoins.</p>
                  </div>
                </li>
              </ul>
              <Button as="a" href="/about-us" variant="primary" size="lg" className="mt-8">EN SAVOIR PLUS SUR NOUS</Button>
            </div>
            <div className="flex-1 flex items-center justify-center fade-in">
              <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-primary-600 bg-gray-50 transform hover:scale-105 transition-transform duration-300">
                <Image src="/images/countries/Gibraltar.jpg" alt="Gresham Trust" width={400} height={400} className="object-cover w-80 h-80 md:w-96 md:h-96" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BANKING SECTION */}
      <section className="section">
        <div className="container">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1 fade-in">
              <h2 className="headline-premium mb-6">Accompagnement Bancaire International</h2>
              <p className="mb-6 text-gray-400">Nous facilitons l&apos;ouverture de comptes bancaires professionnels dans les juridictions choisies, en partenariat avec des établissements financiers de confiance.</p>
              <Button as="a" href="/compte-bancaire-professionnel" variant="primary" size="lg">EN SAVOIR PLUS</Button>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="section-alt">
        <div className="container">
          <div className="text-center mb-12 fade-in">
            <h2 className="headline-premium text-slate-500">Notre Processus en 4 Étapes</h2>
            <div className="divider-premium mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-12">
            <div className="card-premium fade-in">
              <div className="text-4xl text-accent font-black mb-4">1</div>
              <h3 className="font-bold text-xl mb-2 text-white">Consultation</h3>
              <p className="text-gray-400">Analyse personnalisée de votre projet et recommandations sur-mesure.</p>
            </div>
            <div className="card-premium fade-in">
              <div className="text-4xl text-accent font-black mb-4">2</div>
              <h3 className="font-bold text-xl mb-2 text-white">Préparation</h3>
              <p className="text-gray-400">Préparation complète des documents et formalités légales.</p>
            </div>
            <div className="card-premium fade-in">
              <div className="text-4xl text-accent font-black mb-4">3</div>
              <h3 className="font-bold text-xl mb-2 text-white">Création</h3>
              <p className="text-gray-400">Mise en place rapide et sécurisée de votre structure.</p>
            </div>
            <div className="card-premium fade-in">
              <div className="text-4xl text-accent font-black mb-4">4</div>
              <h3 className="font-bold text-xl mb-2 text-white">Accompagnement</h3>
              <p className="text-gray-400">Support continu et optimisation de votre développement.</p>
            </div>
          </div>
        </div>
      </section>
      {/* ARTICLES SECTION */}
      <section className="section-dark">
        <div className="container grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="card-premium bg-grey-800 text-white fade-in">
            <div className="h-48 bg-grey-900 flex items-center justify-center rounded-t-2xl overflow-hidden">
              <Image src="/images/creer-une-entreprise.png" alt="10 raisons pour créer une société LTD" width={400} height={200} className="w-full h-full object-cover" />
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <h3 className="font-bold text-xl mb-2">10 raisons pour créer une société LTD</h3>
              <Button as="a" href="/actualite" variant="primary" size="lg" className="cta-premium">LIRE L&apos;ARTICLE »</Button>
            </div>
          </div>
          <div className="card-premium bg-grey-800 text-white fade-in">
            <div className="h-48 bg-grey-900 flex items-center justify-center rounded-t-2xl overflow-hidden">
              <Image src="/images/business.png" alt="Créer une entreprise à l&apos;étranger" width={400} height={200} className="w-full h-full object-cover" />
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <h3 className="font-bold text-xl mb-2">Créer une entreprise à l&apos;étranger</h3>
              <Button as="a" href="/actualite/creer-son-entreprise-etrangere" variant="primary" size="lg" className="cta-premium">LIRE L&apos;ARTICLE »</Button>
            </div>
          </div>
          <div className="card-premium bg-grey-800 text-white fade-in">
            <div className="h-48 bg-grey-900 flex items-center justify-center rounded-t-2xl overflow-hidden">
              <Image src="/images/countries/Dubai.jpg" alt="Guide business à Dubai" width={400} height={200} className="w-full h-full object-cover" />
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <h3 className="font-bold text-xl mb-2">Guide business à Dubai</h3>
              <Button as="a" href="/actualite/guide-business-dubai" variant="primary" size="lg" className="cta-premium">LIRE L&apos;ARTICLE »</Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="section-hero">
        <div className="relative z-10 w-full flex flex-col items-center justify-center text-center px-4 py-20 md:py-28">
          <h2 className="headline-premium fade-in">Prêt à Développer Votre Activité Internationale ?</h2>
          <div className="divider-premium" />
          <p className="text-white/90 mb-8 max-w-xl mx-auto text-lg fade-in">Contactez-nous pour une consultation gratuite et découvrez les meilleures solutions pour votre entreprise.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button as="a" href="/creer-societe/formulaire-creation" variant="primary" size="lg" className="cta-premium">CRÉER MA SOCIÉTÉ</Button>
            <Button as="a" href="/contact" variant="secondary" size="lg" className="cta-premium">PRENDRE RENDEZ-VOUS</Button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer-premium w-full">
        <div className="mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-4 fade-in">
              <div className="mb-4 font-bold text-2xl text-white">Gresham Trust</div>
              <p className="text-gray-300 text-sm mb-4">Plateforme premium pour la création et la gestion de sociétés à l&apos;international.</p>
              <div className="flex gap-3 mt-2">
                <a href="#" aria-label="Facebook" className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center text-white text-sm hover:bg-blue-800 transition">F</a>
                <a href="#" aria-label="Instagram" className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center text-white text-sm hover:bg-blue-800 transition">I</a>
                <a href="#" aria-label="LinkedIn" className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center text-white text-sm hover:bg-blue-800 transition">L</a>
              </div>
            </div>
            <div className="md:col-span-3 fade-in">
              <div className="mb-4 font-bold text-white">Contact</div>
              <div className="text-gray-300 text-sm mb-2">+33 751 05 73 27</div>
              <div className="text-gray-300 text-sm">hello@greshamtrust.com</div>
            </div>
            <div className="md:col-span-3 fade-in">
              <div className="mb-4 font-bold text-white">Services</div>
              <ul className="text-sm space-y-2 text-gray-300">
                <li><a href="/creer-societe/formulaire-creation" className="hover:text-primary-600 transition">Création de société</a></li>
                <li><a href="/comptabilite" className="hover:text-primary-600 transition">Comptabilité</a></li>
                <li><a href="/fiscalite-luxembourg" className="hover:text-primary-600 transition">Fiscalité au Luxembourg</a></li>
                <li><a href="/investir-singapour" className="hover:text-primary-600 transition">Investir à Singapour</a></li>
              </ul>
            </div>
            <div className="md:col-span-2 fade-in">
              <div className="mb-4 font-bold text-white">Légal</div>
              <ul className="text-sm space-y-2 text-gray-300">
                <li><a href="/mentions-legales" className="hover:text-primary-600 transition">Mentions légales</a></li>
                <li><a href="/politique-de-confidentialite" className="hover:text-primary-600 transition">Confidentialité</a></li>
                <li><a href="/conditions-generales-de-vente" className="hover:text-primary-600 transition">CGV</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-xs text-gray-400 fade-in">
            {new Date().getFullYear()} Gresham Trust. Tous droits réservés.
          </div>
        </div>
      </footer>
    </main>
  );
}