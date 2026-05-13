import {defineField, defineType} from 'sanity'

export const serviceType = defineType({
  name: 'service',
  title: 'Послуги',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Назва послуги',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'URL',
      options: {source: 'title'},
    }),
    defineField({
      name: 'description',
      type: 'text',
      title: 'Опис послуги',
    }),
    defineField({
      name: 'icon',
      type: 'string',
      title: 'Іконка (назва з Lucide)',
    }),
    defineField({
      name: 'image',
      type: 'image',
      title: 'Зображення',
      options: {hotspot: true},
    }),
    defineField({
      name: 'features',
      type: 'array',
      title: 'Особливості',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'priceFrom',
      type: 'number',
      title: 'Ціна від (грн)',
    }),
    defineField({
      name: 'order',
      type: 'number',
      title: 'Порядок відображення',
    }),
  ],
})