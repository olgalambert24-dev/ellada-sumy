import {defineField, defineType} from 'sanity'
import {LinkIcon} from '@sanity/icons'

export const navigationType = defineType({
  name: 'navigation',
  title: 'Навігація',
  type: 'document',
  icon: LinkIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Назва меню',
      type: 'string',
      initialValue: 'Головне меню',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'location',
      title: 'Розташування',
      type: 'string',
      options: {
        list: [
          {title: 'Головне меню', value: 'header'},
          {title: 'Футер', value: 'footer'},
          {title: 'Мобільне меню', value: 'mobile'},
        ],
      },
      initialValue: 'header',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'items',
      title: 'Пункти меню',
      type: 'array',
      of: [{type: 'link'}],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      location: 'location',
    },
    prepare({title, location}) {
      const labels = {
        header: 'Головне меню',
        footer: 'Футер',
        mobile: 'Мобільне',
      } as const
      
      return {
        title: title || 'Без назви',
        subtitle: (location && labels[location as keyof typeof labels]) || location || 'Без назви',
      }
    },
  },
})