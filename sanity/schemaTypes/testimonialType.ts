import {defineField, defineType} from 'sanity'

export const testimonialType = defineType({
  name: 'testimonial',
  title: 'Відгуки',
  type: 'document',
  fields: [
    defineField({
      name: 'author',
      type: 'string',
      title: "Ім'я автора",
    }),
    defineField({
      name: 'role',
      type: 'string',
      title: 'Посада',
    }),
    defineField({
      name: 'company',
      type: 'string',
      title: 'Компанія',
    }),
    defineField({
      name: 'content',
      type: 'text',
      title: 'Текст відгуку',
    }),
    defineField({
      name: 'rating',
      type: 'number',
      title: 'Оцінка (1-5)',
      validation: (Rule) => Rule.min(1).max(5),
    }),
    defineField({
      name: 'image',
      type: 'image',
      title: 'Фото автора',
    }),
  ],
})