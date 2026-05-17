import {defineField, defineType} from 'sanity'
import {ImagesIcon} from '@sanity/icons'

export const portfolioItemType = defineType({
  name: 'portfolioItem',
  title: 'Роботи портфоліо',
  type: 'document',
  icon: ImagesIcon,
  groups: [
    {name: 'content', title: 'Контент', default: true},
    {name: 'media', title: 'Медіа'},
    {name: 'seo', title: 'SEO'},
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Назва роботи',
      type: 'string',
      validation: (Rule) => Rule.required(),
      group: 'content',
    }),
    defineField({
      name: 'slug',
      title: 'URL-slug',
      type: 'slug',
      options: {source: 'title', maxLength: 96},
      validation: (Rule) => Rule.required(),
      group: 'content',
    }),
    defineField({
      name: 'client',
      title: 'Клієнт',
      type: 'string',
      group: 'content',
    }),
    defineField({
      name: 'description',
      title: 'Опис проєкту',
      type: 'text',
      rows: 5,
      group: 'content',
    }),
    defineField({
      name: 'images',
      title: 'Зображення',
      type: 'array',
      of: [{
        type: 'image',
        options: {hotspot: true},
        fields: [
          defineField({
            name: 'alt',
            title: 'Alt текст',
            type: 'string',
            validation: (Rule) => Rule.required(),
          }),
        ],
      }],
      group: 'media',
    }),
    defineField({
      name: 'category',
      title: 'Категорія',
      type: 'reference',
      to: [{type: 'category'}],
      group: 'content',
    }),
    defineField({
      name: 'publishedAt',
      title: 'Дата публікації',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      group: 'content',
    }),
    defineField({
      name: 'seo',
      title: 'SEO налаштування',
      type: 'seoFields',
      group: 'seo',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      client: 'client',
      media: 'images.0',
    },
    prepare({title, client, media}) {
      return {
        title: title || 'Без назви',
        subtitle: client || '',
        media,
      }
    },
  },
})