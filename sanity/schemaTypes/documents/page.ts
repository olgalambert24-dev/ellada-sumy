import {defineField, defineType} from 'sanity'
import {DocumentTextIcon} from '@sanity/icons'

export const pageType = defineType({
  name: 'page',
  title: 'Сторінки',
  type: 'document',
  icon: DocumentTextIcon,
  groups: [
    {name: 'content', title: 'Контент', default: true},
    {name: 'seo', title: 'SEO'},
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Заголовок',
      type: 'string',
      validation: (Rule) => Rule.required().min(2).max(100),
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
      name: 'content',
      title: 'Контент сторінки',
      type: 'array',
      of: [{type: 'block'}],
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
      slug: 'slug.current',
    },
    prepare({title, slug}) {
      return {
        title: title || 'Без назви',
        subtitle: slug ? `/${slug}` : 'Без slug',
      }
    },
  },
})
