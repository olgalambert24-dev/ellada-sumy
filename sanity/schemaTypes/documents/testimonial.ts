import {defineField, defineType} from 'sanity'
import {CommentIcon} from '@sanity/icons'

export const testimonialType = defineType({
  name: 'testimonial',
  title: 'Відгуки',
  type: 'document',
  icon: CommentIcon,
  fields: [
    defineField({
      name: 'author',
      title: 'Автор відгуку',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'role',
      title: 'Посада',
      type: 'string',
    }),
    defineField({
      name: 'company',
      title: 'Компанія',
      type: 'string',
    }),
    defineField({
      name: 'content',
      title: 'Текст відгуку',
      type: 'text',
      rows: 5,
      validation: (Rule) => Rule.required().min(20),
    }),
    defineField({
      name: 'rating',
      title: 'Рейтинг',
      type: 'number',
      validation: (Rule) => Rule.required().min(1).max(5),
      initialValue: 5,
    }),
    defineField({
      name: 'image',
      title: 'Фото автора',
      type: 'image',
      options: {hotspot: true},
    }),
  ],
  preview: {
    select: {
      title: 'author',
      company: 'company',
      rating: 'rating',
    },
    prepare({title, company, rating}) {
      return {
        title: title || 'Анонім',
        subtitle: `${company || 'Приватна особа'} • ${'★'.repeat(rating || 0)}`,
      }
    },
  },
})