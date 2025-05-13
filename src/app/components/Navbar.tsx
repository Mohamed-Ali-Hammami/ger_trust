// Navbar.tsx
'use client';

import Link from "next/link";
import Image from 'next/image';
import { ChevronDownIcon, MenuIcon, XIcon } from 'lucide-react';
import { Button } from "../components/ui/Button";
import { useState } from "react";

interface MenuItem {
  name: string;
  href: string;
  flag?: string;
}

interface MenuSection {
  name: string;
  items: MenuItem[];
}




export default function Navbar() {  // <-- This was missing
  const [dropdownStates, setDropdownStates] = useState({
    quickActions: false,
    services: false,
    actualite: false,
    pays: false,
    contact: false
  });

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Menu data
  const menuItems: Record<string, MenuSection> = {
    quickActions: {
      name: "Actions Rapides",
      items: [
        { name: "Créer une société", href: "/creer-societe/formulaire-creation" },
      ]
    },
    services: {
      name: "Services",
      items: [
        { name: "Créer une société", href: "/creer-societe" },
        { name: "Compte bancaire professionnel", href: "/compte-bancaire-professionnel" },
        { name: "Comptabilité", href: "/comptabilite" },
        { name: "Gestion de patrimoine", href: "/gestion-patrimoine" },
      ]
    },
    actualite: {
      name: "Actualité",
      items: [
        { name: "Tous les articles", href: "/actualite" },
        { name: "Avantages fiscaux à Hong Kong", href: "/avantages-fiscaux-hong-kong" },
        { name: "Créer son entreprise à l'étranger", href: "/creer-son-entreprise-etrangere" },
        { name: "Guide du business à Dubaï", href: "/guide-business-dubai" },
        { name: "Fiscalité au Luxembourg", href: "/fiscalite-luxembourg" },
        { name: "Investir à Singapour", href: "/investir-singapour" }
      ]
    },
    pays: {
      name: "Pays",
      items: [
        { name: "Dubai", flag: "🇦🇪", href: "/pays/dubai" },
        { name: "Gibraltar", flag: "🇬🇮", href: "/pays/gibraltar" },
        { name: "Hong Kong", flag: "🇭🇰", href: "/pays/hong-kong" },
        { name: "Luxembourg", flag: "🇱🇺", href: "/pays/luxembourg" },
        { name: "Singapour", flag: "🇸🇬", href: "/pays/singapour" },
        { name: "Suisse", flag: "🇨🇭", href: "/pays/suisse" },
      ]
    },
    contact: {
      name: "Contact",
      items: [
        { name: "Prendre rendez-vous", href: "/contact" },
      ]
    }
  };

  const toggleDropdown = (dropdown: keyof typeof dropdownStates) => {
    setDropdownStates(prev => ({
      ...prev,
      [dropdown]: !prev[dropdown]
    }));
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-4">

            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/logo.png"
                alt="Gresham Trust Logo"
                width={40}
                height={40}
                className="rounded-full"
              />
              <span className="text-2xl font-bold text-blue-600">Gresham Trust</span>
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-8">
            {Object.entries(menuItems).map(([key, { name, items }]) => (
              <div key={key} className="relative">
                <button
                  className="text-sm font-semibold text-black hover:text-royal transition flex items-center focus-visible:outline-none"
                  onClick={() => toggleDropdown(key as keyof typeof dropdownStates)}
                >
                  {name}
                  <ChevronDownIcon className={`w-4 h-4 ml-2 transition-transform ${dropdownStates[key as keyof typeof dropdownStates] ? 'rotate-180' : ''}`} />
                </button>
                {dropdownStates[key as keyof typeof dropdownStates] && (
                  <div className="absolute left-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-blue-100 transition card-hover z-20">
                    {items.map((item) => (
                      <Link
                        key={`${key}-${item.href}`}
                        href={item.href}
                        className="block px-4 py-2 text-sm text-black hover:bg-blue-50 hover:text-royal transition focus-visible:outline-none"
                      >
                        {item.flag && <span className="mr-2">{item.flag}</span>}
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline">Prendre rendez-vous</Button>

          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-black hover:text-royal transition focus-visible:outline-none"
            >
              {isMobileMenuOpen ? (
                <XIcon className="h-6 w-6" />
              ) : (
                <MenuIcon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-2">
            <div className="space-y-1 px-2 pb-3">
              {Object.entries(menuItems).map(([key, { name, items }]) => (
                <div key={key} className="space-y-1">
                  <button
                    className="w-full text-left px-3 py-2 text-base font-medium text-gray-900 flex justify-between items-center"
                    onClick={() => toggleDropdown(key as keyof typeof dropdownStates)}
                  >
                    {name}
                    <ChevronDownIcon className={`w-4 h-4 transition-transform ${dropdownStates[key as keyof typeof dropdownStates] ? 'rotate-180' : ''}`} />
                  </button>
                  {dropdownStates[key as keyof typeof dropdownStates] && (
                    <div className="ml-4 space-y-1">
                      {items.map((item) => (
                        <Link
                        key={`${key}-${item.href}`}
                          href={item.href}
                          className="block px-3 py-2 text-base text-black hover:bg-blue-50 hover:text-royal transition focus-visible:outline-none"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {item.flag && <span className="mr-2">{item.flag}</span>}
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="mt-4 space-y-2">
                <Button
                  variant="outline"
                  className="w-full justify-center"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Prendre rendez-vous
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}