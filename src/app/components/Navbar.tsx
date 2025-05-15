// Navbar.tsx
'use client';

import Link from "next/link";
import Image from 'next/image';
import { ChevronDownIcon, MenuIcon, XIcon } from 'lucide-react';
import { Button } from "../components/ui/Button";
import { useState, useEffect, useRef } from "react";

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
  const navRef = useRef<HTMLDivElement>(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setDropdownStates({
          quickActions: false,
          services: false,
          actualite: false,
          pays: false,
          contact: false
        });
      }
    }

    // Add event listener when component mounts
    document.addEventListener('mousedown', handleClickOutside);
    
    // Clean up event listener when component unmounts
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const closeAllDropdowns = () => {
    setDropdownStates({
      quickActions: false,
      services: false,
      actualite: false,
      pays: false,
      contact: false
    });
  };

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
        { name: "Boutique", href: "/boutique" },
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
        { name: "Newsletter", href: "/newsletter" }
      ]
    }
  };

  const toggleDropdown = (dropdown: keyof typeof dropdownStates) => {
    // Close all dropdowns first
    const newState = {
      quickActions: false,
      services: false,
      actualite: false,
      pays: false,
      contact: false,
      [dropdown]: !dropdownStates[dropdown] // Toggle the clicked dropdown
    };
    
    setDropdownStates(newState);
  };

  return (
    <nav className="navbar" ref={navRef}>
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
              <span className="text-2xl font-bold text-blue-800">Gresham Trust</span>
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-8">
            {Object.entries(menuItems).map(([key, { name, items }]) => (
              <div className="relative" key={key}>
                <button
                  className="text-sm font-semibold text-black hover:text-royal transition flex items-center focus-visible:outline-none"
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleDropdown(key as keyof typeof dropdownStates);
                  }}
                  aria-expanded={dropdownStates[key as keyof typeof dropdownStates]}
                  aria-haspopup="true"
                >
                  {name}
                  <ChevronDownIcon 
                    className={`w-4 h-4 ml-2 transition-transform ${dropdownStates[key as keyof typeof dropdownStates] ? 'rotate-180' : ''}`} 
                    aria-hidden="true"
                  />
                </button>
                {dropdownStates[key as keyof typeof dropdownStates] && (
                  <div 
                    className="absolute left-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-blue-100 transition card-hover z-20"
                    onClick={(e) => e.stopPropagation()}
                  >
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
            <Button 
              as="a" 
              href="/contact" 
              variant="outline"
              onClick={() => closeAllDropdowns()}
            >
              Prendre rendez-vous
            </Button>

          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsMobileMenuOpen(!isMobileMenuOpen);
                if (!isMobileMenuOpen) {
                  closeAllDropdowns();
                }
              }}
              className="p-2 text-black hover:text-royal transition focus-visible:outline-none"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMobileMenuOpen ? (
                <XIcon className="h-6 w-6" aria-hidden="true" />
              ) : (
                <MenuIcon className="h-6 w-6" aria-hidden="true" />
              )}
              <span className="sr-only">{isMobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}</span>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div 
            id="mobile-menu"
            className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {Object.entries(menuItems).map(([key, { name, items }]) => (
                <div key={`mobile-${key}`}>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleDropdown(key as keyof typeof dropdownStates);
                    }}
                    className="w-full flex justify-between items-center px-3 py-2 text-base font-medium text-black hover:bg-blue-50 rounded-md"
                    aria-expanded={dropdownStates[key as keyof typeof dropdownStates]}
                    aria-haspopup="true"
                  >
                    {name}
                    <ChevronDownIcon 
                      className={`w-4 h-4 transition-transform ${dropdownStates[key as keyof typeof dropdownStates] ? 'rotate-180' : ''}`} 
                      aria-hidden="true"
                    />
                  </button>
                  {dropdownStates[key as keyof typeof dropdownStates] && (
                    <div className="pl-4">
                      {items.map((item) => (
                        <Link
                          key={`mobile-${key}-${item.href}`}
                          href={item.href}
                          className="block px-3 py-2 text-base font-medium text-gray-600 hover:bg-blue-50 rounded-md"
                          onClick={() => {
                            setIsMobileMenuOpen(false);
                            closeAllDropdowns();
                          }}
                        >
                          {item.flag && <span className="mr-2">{item.flag}</span>}
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-2">
                <Button 
                  as="a" 
                  href="/contact" 
                  variant="outline"
                  className="w-full justify-center"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    closeAllDropdowns();
                  }}
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