export interface NewsletterFormData {
  email: string;
  name?: string;
}

export interface NewsletterFormData {
  email: string;
  name?: string;
}

export interface NewsletterProps {
  guideTitle: string;
  onSubmit: (data: NewsletterFormData) => void;
}
