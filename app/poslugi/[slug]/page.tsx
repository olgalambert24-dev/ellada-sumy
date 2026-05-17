import { sanityClient } from '@/lib/sanity/client';
import { serviceBySlugQuery } from '@/lib/sanity/queries';
import { notFound } from 'next/navigation';

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = await sanityClient.fetch(serviceBySlugQuery, { slug });

  if (!service) {
    notFound();
  }

  return (
    <div>
      <h1>{service.title}</h1>
      <p>{service.description}</p>
      <p>від {service.priceFrom} грн</p>
    </div>
  );
}