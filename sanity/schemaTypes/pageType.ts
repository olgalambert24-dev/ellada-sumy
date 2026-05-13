import {defineField, defineType} from 'sanity'

export const pageType = defineType({
  name: 'page',
  title: 'Сторінки',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Назва сторінки',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'URL',
      options: {source: 'title'},
    }),
    defineField({
      name: 'metaTitle',
      type: 'string',
      title: 'Meta Title (SEO)',
    }),
    defineField({
      name: 'metaDescription',
      type: 'text',
      title: 'Meta Description (SEO)',
    }),
    defineField({
      name: 'sections',
      type: 'array',
      title: 'Секції сторінки',
      of: [
        {
          type: 'object',
          name: 'heroSection',
          title: 'Hero секція',
          fields: [
            {name: 'title', type: 'string', title: 'Заголовок'},
            {name: 'subtitle', type: 'text', title: 'Підзаголовок'},
            {name: 'backgroundImage', type: 'image', title: 'Фонове зображення'},
            {name: 'buttonText', type: 'string', title: 'Текст кнопки'},
            {name: 'buttonLink', type: 'string', title: 'Посилання кнопки'},
          ],
        },
        {
          type: 'object',
          name: 'servicesSection',
          title: 'Секція послуг',
          fields: [
            {name: 'title', type: 'string', title: 'Заголовок'},
            {name: 'subtitle', type: 'text', title: 'Підзаголовок'},
          ],
        },
        {
          type: 'object',
          name: 'portfolioSection',
          title: 'Секція портфоліо',
          fields: [
            {name: 'title', type: 'string', title: 'Заголовок'},
            {name: 'subtitle', type: 'text', title: 'Підзаголовок'},
          ],
        },
        {
          type: 'object',
          name: 'testimonialsSection',
          title: 'Секція відгуків',
          fields: [
            {name: 'title', type: 'string', title: 'Заголовок'},
            {name: 'subtitle', type: 'text', title: 'Підзаголовок'},
          ],
        },
        {
          type: 'object',
          name: 'ctaSection',
          title: 'CTA секція',
          fields: [
            {name: 'title', type: 'string', title: 'Заголовок'},
            {name: 'subtitle', type: 'text', title: 'Підзаголовок'},
            {name: 'buttonText', type: 'string', title: 'Текст кнопки'},
            {name: 'buttonLink', type: 'string', title: 'Посилання кнопки'},
          ],
        },
      ],
    }),
  ],
})