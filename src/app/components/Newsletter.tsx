'use client';

import React, { useState } from 'react';
import { NewsletterFormData, NewsletterProps } from './types';

export const Newsletter: React.FC<NewsletterProps> = ({ guideTitle, onSubmit }) => {
  const [formData, setFormData] = useState<NewsletterFormData>({
    email: '',
    name: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await onSubmit(formData);
      setSuccessMessage('Merci ! Vous allez recevoir le guide par email.');
      setFormData({ email: '', name: '' });
    } catch (error) {
      console.error('Error submitting newsletter:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev: NewsletterFormData) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-lg">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
        Guide pratique pour anticiper et sécuriser son argent
        </h1>
        <p className="text-gray-600 leading-relaxed">
          En ces temps de transformation financière, certains perçoivent ce que la majorité ignore encore : une épargne bien protégée est la dernière véritable liberté. Ce guide confidentiel est dédié aux personnes avisées qui, comme vous, entendent préserver leur patrimoine avec discernement. Vous y découvrirez des solutions élégantes et parfaitement discrètes pour composer avec les évolutions monétaires tout en gardant le contrôle de votre argent.
        </p>
        <h2 className="text-2xl font-bold text-blue-600 my-4">
          {guideTitle}
        </h2>
        <p className="text-gray-600">
          En partageant simplement vos coordonnées ci-dessous, vous rejoindrez le cercle restreint de ceux qui anticipent. Parce qu&apos;en matière d&apos;épargne, la sagesse commence toujours par une longueur d&apos;avance.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
        <div>
          <input
            type="text"
            name="name"
            placeholder="Votre nom"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <input
            type="email"
            name="email"
            placeholder="Votre email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 disabled:opacity-50"
        >
          {isSubmitting ? 'Envoi en cours...' : 'Télécharger le guide'}
        </button>
      </form>

      {successMessage && (
        <div className="mt-4 text-center text-green-600">
          {successMessage}
        </div>
      )}
    </div>
  );
};