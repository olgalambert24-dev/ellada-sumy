import {defineField, defineType} from 'sanity'
import {BookIcon} from '@sanity/icons'

export const bookType = defineType({
  name: 'book',
  title: 'Книги',
  type: 'document',
  icon: BookIcon,
  groups: [
    {name: 'content', title: 'Контент', default: true},
    {name: 'media', title: 'Медіа'},
    {name: 'specs', title: 'Специфікація'},
    {name: 'seo', title: 'SEO'},
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Назва книги',
      type: 'string',
      validation: (Rule) => Rule.required().min(2).max(200),
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
      name: 'author',
      title: 'Автор',
      type: 'reference',
      to: [{type: 'author'}],
      validation: (Rule) => Rule.required(),
      group: 'content',
    }),
    defineField({
      name: 'description',
      title: 'Опис книги',
      type: 'text',
      rows: 5,
      group: 'content',
    }),
    defineField({
      name: 'cover',
      title: 'Обкладинка',
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
      group: 'media',
    }),
    defineField({
      name: 'price',
      title: 'Ціна (грн)',
      type: 'number',
      validation: (Rule) => Rule.min(0),
      group: 'content',
    }),
    defineField({
      name: 'isbn',
      title: 'ISBN',
      type: 'string',
      group: 'specs',
    }),
    defineField({
      name: 'pages',
      title: 'Кількість сторінок',
      type: 'number',
      validation: (Rule) => Rule.min(1),
      group: 'specs',
    }),
    defineField({
      name: 'year',
      title: 'Рік видання',
      type: 'number',
      validation: (Rule) => Rule.min(1900).max(2030),
      group: 'specs',
    }),
    defineField({
      name: 'category',
      title: 'Категорія',
      type: 'reference',
      to: [{type: 'category'}],
      group: 'content',
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'seoFields',
      group: 'seo',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'cover',
    },
    prepare({title, author, media}) {
      return {
        title: title || 'Без назви',
        subtitle: author || 'Без автора',
        media,
      }
    },
  },
})