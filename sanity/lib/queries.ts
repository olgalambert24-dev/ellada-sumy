import {groq} from 'next-sanity'

// ========== КНИГИ ==========

export const booksQuery = groq`
  *[_type == "book"] | order(year desc) {
    _id,
    title,
    "slug": slug.current,
    "author": author->{name},
    description,
    "cover": cover.asset->url,
    price,
    year,
    isbn,
    pages
  }
`

export const bookBySlugQuery = groq`
  *[_type == "book" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    "author": author->{name, "photo": photo.asset->url, bio},
    description,
    "cover": cover.asset->url,
    price,
    year,
    isbn,
    pages,
    "category": category->{title}
  }
`

// ========== БЛОГ ==========

export const postsQuery = groq`
  *[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    "coverImage": coverImage.asset->url,
    "author": author->{name},
    publishedAt
  }
`

export const postBySlugQuery = groq`
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    content,
    "coverImage": coverImage.asset->url,
    "author": author->{name, "photo": photo.asset->url},
    publishedAt,
    "category": category->{title}
  }
`

// ========== СТОРІНКИ ==========

export const pageBySlugQuery = groq`
  *[_type == "page" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    content,
    "seo": seo {
      metaTitle,
      metaDescription
    }
  }
`

// ========== НАЛАШТУВАННЯ ==========

export const settingsQuery = groq`
  *[_type == "settings" && _id == "settings"][0] {
    siteTitle,
    siteDescription,
    "logo": logo.asset->url,
    contacts {phone, email, address, workHours},
    social {facebook, instagram, telegram}
  }
`

// ========== НАВІГАЦІЯ ==========

export const navigationQuery = groq`
  *[_type == "navigation" && location == $location][0] {
    title,
    items[] {
      title,
      type,
      "pageSlug": page->slug.current,
      url,
      openInNewTab
    }
  }
`

// ========== АВТОРИ ==========

export const authorsQuery = groq`
  *[_type == "author"] | order(name asc) {
    _id,
    name,
    "slug": slug.current,
    "photo": photo.asset->url,
    bio,
    position
  }
`
// ========== ПОСЛУГИ ==========

export const servicesQuery = groq`
  *[_type == "service"] | order(order asc) {
    _id,
    title,
    "slug": slug.current,
    description,
    icon,
    priceFrom,
    features,
    "seo": seo {metaTitle, metaDescription}
  }
`

export const serviceBySlugQuery = groq`
  *[_type == "service" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    description,
    icon,
    priceFrom,
    features,
    "seo": seo {metaTitle, metaDescription, keywords}
  }
`

// ========== ПОРТФОЛІО ==========

export const portfolioQuery = groq`
  *[_type == "portfolioItem"] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    client,
    description,
    "images": images[]{"url": asset->url, alt},
    "category": category->{title},
    publishedAt
  }
`

export const portfolioItemBySlugQuery = groq`
  *[_type == "portfolioItem" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    client,
    description,
    "images": images[]{"url": asset->url, alt, caption},
    "category": category->{title},
    publishedAt,
    "seo": seo {metaTitle, metaDescription}
  }
`

// ========== ВІДГУКИ ==========

export const testimonialsQuery = groq`
  *[_type == "testimonial"] | order(_createdAt desc) {
    _id,
    author,
    role,
    company,
    content,
    rating,
    "image": image.asset->url
  }
`