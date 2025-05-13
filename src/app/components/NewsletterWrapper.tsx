'use client';

import { Newsletter } from '../components/Newsletter';
import { NewsletterFormData } from './types';

export default function NewsletterWrapper() {
  const handleSubmit = async (data: NewsletterFormData) => {
    console.log('Newsletter submitted:', data);
    // Here you would typically make an API call to submit the data
  };

  return (
    <Newsletter
      guideTitle="Guide de création d'entreprise étrangère"
      onSubmit={handleSubmit}
    />
  );
}
