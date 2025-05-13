import Image from 'next/image';
import NewsletterWrapper from '../components/NewsletterWrapper';
import Article1 from './10-raisons-pour-creer-une-societe-ltd';
import Article2 from './creer-son-entreprise-etrangere-tout-en-travaillant-ailleurs-une-opportunite-a-saisir';

export default function Actualite() {
  return (
    <main className="min-h-screen pt-20 px-4">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Actualité</h1>
        <p className="text-lg text-gray-600 mb-12">Retrouvez ici nos derniers articles et informations sur la création d'entreprise à l'étranger.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <article className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="relative h-48">
              <Image
                src="/images/actualite1.jpg"
                alt="Créer une entreprise LTD"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <Article1 />
            </div>
          </article>

          <article className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="relative h-48">
              <Image
                src="/images/actualite2.jpg"
                alt="Créer une entreprise à Londres"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <Article2 />
            </div>
          </article>

        </div>

        <NewsletterWrapper />
      </div>
    </main>
  );
}
