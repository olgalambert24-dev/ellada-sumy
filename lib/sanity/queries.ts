import { groq } from 'next-sanity'

// Все услуги
export const servicesQuery = groq`*[_type == "service"] | order(order asc) {
  _id,
  title,
  slug,
  description,
  icon,
  "image": image.asset->url,
  features,
  priceFrom
}`
// Одна услуга по slug
export const serviceBySlugQuery = (slug: string) => groq`*[_type == "service" && slug.current == "${slug}"][0] {
  _id,
  title,
  slug,
  description,
  icon,
  "image": image.asset->url,
  features,
  priceFrom
}`