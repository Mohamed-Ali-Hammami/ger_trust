"use client";

import { useState } from "react";

export default function RgpdDemande() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    type: "Accès (Art. 15)",
    message: "",
    consent: false,
  });
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox"
        ? (e.target as HTMLInputElement).checked
        : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.type || !form.message || !form.consent) {
      setError("Veuillez remplir tous les champs et accepter la politique de confidentialité.");
      return;
    }
    setError("");
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-grey-100 px-4 py-16">
      <div className="max-w-xl w-full bg-white rounded-2xl shadow-royal-lg p-8">
        <h1 className="headline-premium mb-6 text-3xl md:text-4xl">Demande RGPD</h1>
        <p className="mb-6 text-gray-700 text-center text-base">Utilisez ce formulaire pour exercer vos droits d&apos;accès, de portabilité, d&apos;effacement ou de restriction conformément au RGPD.</p>
        {submitted ? (
          <div className="p-4 bg-green-100 rounded text-green-700 text-center font-semibold">
            Votre demande a été envoyée. Nous vous répondrons sous 30 jours.
          </div>
        ) : (
          <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <label className="block font-medium mb-1" htmlFor="name">Nom complet *</label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full border border-gray-300 rounded px-4 py-2 focus:ring-2 focus:ring-royal-500 focus:outline-none"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label className="block font-medium mb-1" htmlFor="email">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full border border-gray-300 rounded px-4 py-2 focus:ring-2 focus:ring-royal-500 focus:outline-none"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label className="block font-medium mb-1" htmlFor="type">Type de demande *</label>
              <select
                id="type"
                name="type"
                className="w-full border border-gray-300 rounded px-4 py-2 focus:ring-2 focus:ring-royal-500 focus:outline-none"
                value={form.type}
                onChange={handleChange}
                required
              >
                <option>Accès (Art. 15)</option>
                <option>Portabilité (Art. 20)</option>
                <option>Effacement (Art. 17)</option>
                <option>Restriction (Art. 18)</option>
                <option>Autre</option>
              </select>
            </div>
            <div>
              <label className="block font-medium mb-1" htmlFor="message">Détail de la demande *</label>
              <textarea
                id="message"
                name="message"
                className="w-full border border-gray-300 rounded px-4 py-2 focus:ring-2 focus:ring-royal-500 focus:outline-none"
                rows={4}
                value={form.message}
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="consent"
                name="consent"
                checked={form.consent}
                onChange={handleChange}
                className="mr-2"
                required
              />
              <label htmlFor="consent" className="text-sm">J&apos;accepte la <a href="/politique-de-confidentialite" className="text-blue-600 underline">politique de confidentialité</a> *</label>
            </div>
            {error && <div className="text-red-600 text-sm font-semibold">{error}</div>}
            <button
              type="submit"
              className="w-full bg-royal-600 hover:bg-royal-700 text-white font-bold py-2 px-4 rounded-xl shadow-royal transition-all duration-300"
            >
              Envoyer ma demande
            </button>
          </form>
        )}
      </div>
    </main>
  );
}
