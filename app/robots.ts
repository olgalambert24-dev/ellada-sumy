import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/admin/'],
    },
    sitemap: 'https://ellada-sumy.com.ua/sitemap.xml',
    host: 'https://ellada-sumy.com.ua',
  };
}