import Script from 'next/script';

export default function SchemaOrg() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Видавничий будинок «Еллада»',
    url: 'https://ellada-sumy.com.ua',
    logo: 'https://ellada-sumy.com.ua/logo.png',
    description: 'Книжне видавництво, дизайн-студія та друкарня повного циклу в Сумах',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Суми',
      addressCountry: 'UA',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+380-XXX-XXX-XXX',
      contactType: 'sales',
      availableLanguage: ['Ukrainian', 'Russian'],
    },
    sameAs: [
      'https://facebook.com/ellada.sumy',
      'https://instagram.com/ellada.sumy',
    ],
  };

  return (
    <Script
      id="schema-org"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}