import {defineField, defineType} from 'sanity'
import {CogIcon} from '@sanity/icons'

export const settingsType = defineType({
  name: 'settings',
  title: 'Налаштування сайту',
  type: 'document',
  icon: CogIcon,
  fields: [
    defineField({
      name: 'siteTitle',
      title: 'Назва сайту',
      type: 'string',
      initialValue: 'Видавничий дім "Еллада"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'siteDescription',
      title: 'Опис сайту',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'logo',
      title: 'Логотип',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'contacts',
      title: 'Контакти',
      type: 'object',
      fields: [
        defineField({name: 'phone', title: 'Телефон', type: 'string'}),
        defineField({name: 'email', title: 'Email', type: 'string'}),
        defineField({name: 'address', title: 'Адреса', type: 'string'}),
        defineField({name: 'workHours', title: 'Години роботи', type: 'string'}),
      ],
    }),
    defineField({
      name: 'social',
      title: 'Соціальні мережі',
      type: 'object',
      fields: [
        defineField({name: 'facebook', title: 'Facebook', type: 'url'}),
        defineField({name: 'instagram', title: 'Instagram', type: 'url'}),
        defineField({name: 'telegram', title: 'Telegram', type: 'url'}),
      ],
    }),
    defineField({
      name: 'ogImage',
      title: 'Open Graph зображення (1200x630)',
      type: 'image',
      options: {hotspot: true},
      description: 'Зображення для шерінгу в соцмережах',
    }),
  ],
  preview: {
    select: {
      title: 'siteTitle',
      media: 'logo',
    },
  },
})
