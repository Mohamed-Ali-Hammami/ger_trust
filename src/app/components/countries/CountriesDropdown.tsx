'use client';

import { useState } from "react";
import Link from "next/link";
import { ChevronDownIcon, ChevronRightIcon } from "lucide-react";
import { countries } from "./data";
import { Country } from "./Country";

interface Country {
  title: string;
  emoji: string;
  description: string;
  benefits: string[];
  cta: string;
}

export function CountriesDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState<string>("" as string);

  const handleCountryClick = (country: string) => {
    setSelectedCountry(country);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 text-sm font-medium hover:text-blue-600 transition-colors"
      >
        <span className="flex items-center space-x-1">
          <span className="text-xl">🌍</span>
          <span>Pays</span>
        </span>
        <ChevronDownIcon className="w-4 h-4" />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-72 bg-white rounded-lg shadow-lg border border-gray-100">
          <div className="p-2">
            {countries.map((country) => (
              <Link
                key={country.title}
                href={`/pays/${country.title.toLowerCase().replace(/\s+/g, '-')}`}
                className={`flex items-center space-x-3 p-4 hover:bg-gray-50 rounded-md transition-colors cursor-pointer ${
                  selectedCountry === country.title ? "bg-gray-50" : ""
                }`}
                onClick={() => handleCountryClick(country.title)}
              >
                <span className="text-xl">{country.emoji}</span>
                <div className="flex-1">
                  <span className="font-medium">{country.title}</span>
                  <p className="text-sm text-gray-500 mt-1">{country.description}</p>
                </div>
                <ChevronRightIcon className="w-4 h-4 text-gray-400" />
              </Link>
            ))}
          </div>
        </div>
      )}

      {selectedCountry && (
        <div className="mt-4">
          <Country
            title={selectedCountry}
            emoji={countries.find(c => c.title === selectedCountry)?.emoji || ''}
            description={countries.find(c => c.title === selectedCountry)?.description || ''}
            benefits={countries.find(c => c.title === selectedCountry)?.benefits || []}
            cta={countries.find(c => c.title === selectedCountry)?.cta || ''}
            image={countries.find(c => c.title === selectedCountry)?.image || 'default.jpg'}
          />
        </div>
      )}
    </div>
  );
};
