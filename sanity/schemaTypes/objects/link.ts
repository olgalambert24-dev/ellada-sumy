import {defineField, defineType} from 'sanity'

export const linkType = defineType({
  name: 'link',
  title: 'Посилання',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Текст посилання',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'type',
      title: 'Тип посилання',
      type: 'string',
      options: {
        list: [
          {title: 'Внутрішня сторінка', value: 'internal'},
          {title: 'Зовнішнє посилання', value: 'external'},
        ],
        layout: 'radio',
      },
      initialValue: 'internal',
    }),
    defineField({
      name: 'page',
      title: 'Сторінка',
      type: 'reference',
      to: [
        {type: 'page'},
        {type: 'post'},
        {type: 'book'},
      ],
      hidden: ({parent}) => parent?.type !== 'internal',
    }),
    defineField({
      name: 'url',
      title: 'URL',
      type: 'url',
      hidden: ({parent}) => parent?.type !== 'external',
      validation: (Rule) => Rule.uri({allowRelative: true}),
    }),
    defineField({
      name: 'openInNewTab',
      title: 'Відкрити в новій вкладці',
      type: 'boolean',
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      type: 'type',
      url: 'url',
      slug: 'page.slug.current',
    },
    prepare({title, type, url, slug}) {
      return {
        title: title || 'Без назви',
        subtitle: type === 'external' ? url : `/${slug || ''}`,
      }
    },
  },
})
