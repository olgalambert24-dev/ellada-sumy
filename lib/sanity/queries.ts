import { groq } from 'next-sanity'

// ========== ПОСЛУГИ ==========
export const servicesQuery = groq`*[_type == "service"] | order(order asc) {
  _id,
  _createdAt,
  title,
  "slug": slug.current,
  description,
  icon,
  "image": image.asset->{
    _id,
    url,
    metadata {
      dimensions,
      palette,
      lqip
    }
  },
  "imageAlt": image.alt,
  features,
  priceFrom,
  order
}`

export const serviceBySlugQuery = groq`*[_type == "service" && slug.current == $slug][0] {
  _id,
  _createdAt,
  title,
  "slug": slug.current,
  description,
  icon,
  "image": image.asset->{
    _id,
    url,
    metadata {
      dimensions,
      palette,
      lqip
    }
  },
  "imageAlt": image.alt,
  features,
  priceFrom,
  order,
  "seo": seo {
    metaTitle,
    metaDescription,
    keywords,
    "ogImage": ogImage.asset->url
  }
}`

// ========== ВІДГУКИ ==========
export const testimonialsQuery = groq`*[_type == "testimonial"] | order(_createdAt desc) {
  _id,
  _createdAt,
  author,
  role,
  company,
  content,
  rating,
  "image": image.asset->{
    _id,
    url,
    metadata {
      dimensions,
      lqip
    }
  },
  "project": project-> {
    _id,
    title,
    "slug": slug.current
  }
}`

// ========== СТОРІНКИ (v3 Portable Text) ==========
export const pageQuery = groq`*[_type == "page" && slug.current == $slug][0] {
  _id,
  _createdAt,
  _updatedAt,
  title,
  "slug": slug.current,
  "seo": seo {
    metaTitle,
    metaDescription,
    keywords,
    "ogImage": ogImage.asset->url,
    noIndex
  },
  content[] {
    ...,
    _type == "image" => {
      ...,
      "asset": asset->{
        _id,
        url,
        metadata {
          dimensions,
          lqip
        }
      }
    },
    _type == "link" => {
      ...,
      "page": page->{
        _type,
        "slug": slug.current,
        title
      }
    }
  },
  sections[]-> {
    _type,
    _id,
    ...
  }
}`

// ========== БЛОГ (v3) ==========
export const postsQuery = groq`*[_type == "blogPost"] | order(publishedAt desc) {
  _id,
  _createdAt,
  title,
  "slug": slug.current,
  excerpt,
  "coverImage": coverImage.asset->{
    _id,
    url,
    metadata {
      dimensions,
      lqip
    }
  },
  "coverImageAlt": coverImage.alt,
  "category": category->{
    _id,
    title,
    "slug": slug.current
  },
  publishedAt,
  readingTime,
  "author": author-> {
    _id,
    name,
    "slug": slug.current,
    "photo": photo.asset->url
  }
}`

export const postBySlugQuery = groq`*[_type == "blogPost" && slug.current == $slug][0] {
  _id,
  _createdAt,
  _updatedAt,
  title,
  "slug": slug.current,
  excerpt,
  content[] {
    ...,
    _type == "image" => {
      ...,
      "asset": asset->{
        _id,
        url,
        metadata {
          dimensions,
          lqip
        }
      }
    },
    markDefs[] {
      ...,
      _type == "link" => {
        ...,
        "page": page->{
          _type,
          "slug": slug.current
        }
      }
    }
  },
  "coverImage": coverImage.asset->{
    _id,
    url,
    metadata {
      dimensions,
      lqip
    }
  },
  "coverImageAlt": coverImage.alt,
  "category": category->{
    _id,
    title,
    "slug": slug.current
  },
  tags,
  publishedAt,
  readingTime,
  "author": author-> {
    _id,
    name,
    "slug": slug.current,
    "photo": photo.asset->url,
    bio,
    position
  },
  "seo": seo {
    metaTitle,
    metaDescription,
    keywords,
    "ogImage": ogImage.asset->url
  }
}`

// ========== КНИГИ / ПОРТФОЛІО (v3) ==========
export const portfolioQuery = groq`*[_type == "portfolioItem"] | order(publishedAt desc) {
  _id,
  _createdAt,
  title,
  "slug": slug.current,
  client,
  description,
  "coverImage": images[0].asset->{
    _id,
    url,
    metadata {
      dimensions,
      lqip
    }
  },
  "coverImageAlt": images[0].alt,
  "category": category->{
    _id,
    title,
    "slug": slug.current
  },
  publishedAt,
  specs {
    format,
    paper,
    pages,
    circulation,
    binding,
    colors
  }
}`

export const portfolioItemBySlugQuery = groq`*[_type == "portfolioItem" && slug.current == $slug][0] {
  _id,
  _createdAt,
  _updatedAt,
  title,
  "slug": slug.current,
  "category": category->{
    _id,
    title,
    "slug": slug.current
  },
  client,
  description,
  images[] {
    _key,
    "asset": asset->{
      _id,
      url,
      metadata {
        dimensions,
        lqip
      }
    },
    alt,
    caption,
    hotspot
  },
  specs {
    format,
    paper,
    pages,
    circulation,
    binding,
    colors
  },
  "testimonial": testimonial-> {
    _id,
    author,
    role,
    company,
    content,
    rating
  },
  publishedAt,
  "seo": seo {
    metaTitle,
    metaDescription,
    keywords,
    "ogImage": ogImage.asset->url
  }
}`

// ========== КАТЕГОРІЇ ==========
export const categoriesQuery = groq`*[_type == "category" && type == $type] | order(title asc) {
  _id,
  _createdAt,
  title,
  "slug": slug.current,
  description,
  type
}`

// ========== АВТОРИ ==========
export const authorsQuery = groq`*[_type == "author"] | order(name asc) {
  _id,
  _createdAt,
  name,
  "slug": slug.current,
  "photo": photo.asset->{
    _id,
    url,
    metadata {
      dimensions,
      lqip
    }
  },
  bio,
  position
}`

// ========== НАВІГАЦІЯ ==========
export const navigationQuery = groq`*[_type == "navigation" && location == $location][0] {
  _id,
  title,
  location,
  items[] {
    _key,
    title,
    type,
    "page": page->{
      _type,
      "slug": slug.current,
      title
    },
    url,
    openInNewTab
  }
}`

// ========== НАЛАШТУВАННЯ САЙТУ (Singleton) ==========
export const settingsQuery = groq`*[_type == "settings" && _id == "settings"][0] {
  _id,
  _updatedAt,
  siteTitle,
  siteDescription,
  "logo": logo.asset->{
    _id,
    url,
    metadata {
      dimensions
    }
  },
  contacts {
    phone,
    email,
    address,
    workHours
  },
  social {
    facebook,
    instagram,
    telegram
  },
  "ogImage": ogImage.asset->{
    _id,
    url,
    metadata {
      dimensions
    }
  }
}`

// ========== SITEMAP ==========
export const sitemapQuery = groq`{
  "pages": *[_type == "page"] | order(title asc) {
    "url": "/" + slug.current,
    _updatedAt
  },
  "services": *[_type == "service"] | order(title asc) {
    "url": "/poslugi/" + slug.current,
    _updatedAt
  },
  "portfolio": *[_type == "portfolioItem"] | order(publishedAt desc) {
    "url": "/portfolio/" + slug.current,
    _updatedAt
  },
  "posts": *[_type == "blogPost"] | order(publishedAt desc) {
    "url": "/blog/" + slug.current,
    _updatedAt
  }
}`