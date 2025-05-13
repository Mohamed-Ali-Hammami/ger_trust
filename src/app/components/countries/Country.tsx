import { Button } from "../ui/Button";
import { ChevronRightIcon } from "lucide-react";
import { CountryProps } from './types';
import Image from 'next/image';

export function Country({ title, emoji, description, benefits, cta, image }: CountryProps) {
  return (
    <div className="bg-grey-800 rounded-xl shadow-lg overflow-hidden border border-grey-700">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Column - Image */}
        <div className="relative h-[400px] lg:h-[600px]">
          <Image
            src={`/images/countries/${image}`}
            alt={`${title} skyline`}
            fill
            className="object-cover rounded-lg"
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>

        {/* Right Column - Content */}
        <div className="space-y-8 p-6">
          <div className="flex items-center space-x-2">
            <span className="text-4xl text-marine-400">{emoji}</span>
            <h1 className="text-3xl font-bold text-white">{title}</h1>
          </div>

          <p className="text-lg text-gray-300 leading-relaxed mb-8">{description}</p>

          <div className="space-y-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  <svg className="w-5 h-5 text-marine-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-300">{benefit}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <Button 
              className="w-full md:w-auto text-lg font-semibold px-8 py-4 rounded-lg bg-marine-500 hover:bg-marine-600 text-white transition-colors duration-200 whitespace-normal"
              onClick={() => window.location.href = '/creer-societe/formulaire-creation'}
            >
              {cta}
              <ChevronRightIcon className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
