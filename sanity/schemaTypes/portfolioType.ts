import {defineField, defineType} from 'sanity'

export const portfolioType = defineType({
  name: 'portfolioItem',
  title: 'Портфоліо',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Назва роботи',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'URL',
      options: {source: 'title'},
    }),
    defineField({
      name: 'client',
      type: 'string',
      title: 'Клієнт',
    }),
    defineField({
      name: 'description',
      type: 'text',
      title: 'Опис',
    }),
    defineField({
      name: 'images',
      type: 'array',
      title: 'Зображення',
      of: [{type: 'image', options: {hotspot: true}}],
    }),
    defineField({
      name: 'category',
      type: 'string',
      title: 'Категорія',
      options: {
        list: [
          {title: 'Книги', value: 'books'},
          {title: 'Брошури', value: 'brochures'},
          {title: 'Каталоги', value: 'catalogs'},
          {title: 'Журнали', value: 'magazines'},
          {title: 'Реклама', value: 'advertising'},
        ],
      },
    }),
    defineField({
      name: 'publishedAt',
      type: 'datetime',
      title: 'Дата',
    }),
  ],
})