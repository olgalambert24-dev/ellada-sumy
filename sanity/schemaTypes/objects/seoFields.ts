import {defineField, defineType} from 'sanity'

export const seoFieldsType = defineType({
  name: 'seoFields',
  title: 'SEO поля',
  type: 'object',
  fields: [
    defineField({
      name: 'metaTitle',
      title: 'Meta Title',
      type: 'string',
      description: 'Рекомендовано до 60 символів',
      validation: (Rule) => Rule.max(60).warning('Довжина має бути до 60 символів'),
    }),
    defineField({
      name: 'metaDescription',
      title: 'Meta Description',
      type: 'text',
      rows: 3,
      description: 'Рекомендовано до 160 символів',
      validation: (Rule) => Rule.max(160).warning('Довжина має бути до 160 символів'),
    }),
    defineField({
      name: 'keywords',
      title: 'Keywords',
      type: 'array',
      of: [{type: 'string'}],
      options: {layout: 'tags'},
    }),
    defineField({
      name: 'ogImage',
      title: 'Open Graph зображення',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'noIndex',
      title: 'Не індексувати',
      type: 'boolean',
      initialValue: false,
      description: 'Заборонити індексацію цієї сторінки',
    }),
  ],
})
