import {defineField, defineType} from 'sanity'
import {WrenchIcon} from '@sanity/icons'

export const serviceType = defineType({
  name: 'service',
  title: 'Послуги',
  type: 'document',
  icon: WrenchIcon,
  groups: [
    {name: 'content', title: 'Контент', default: true},
    {name: 'seo', title: 'SEO'},
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Назва послуги',
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
      name: 'description',
      title: 'Опис послуги',
      type: 'text',
      rows: 5,
      group: 'content',
    }),
    defineField({
      name: 'icon',
      title: 'Іконка',
      type: 'string',
      group: 'content',
    }),
    defineField({
      name: 'priceFrom',
      title: 'Ціна від (грн)',
      type: 'number',
      validation: (Rule) => Rule.min(0),
      group: 'content',
    }),
    defineField({
      name: 'features',
      title: 'Особливості',
      type: 'array',
      of: [{type: 'string'}],
      options: {layout: 'tags'},
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
      price: 'priceFrom',
    },
    prepare({title, price}) {
      return {
        title: title || 'Без назви',
        subtitle: price ? `від ${price} грн` : '',
      }
    },
  },
})