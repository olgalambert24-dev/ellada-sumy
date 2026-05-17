import {StructureBuilder} from 'sanity/structure'
import {
  CogIcon,
  ComposeIcon,
  BookIcon,
  DocumentTextIcon,
  TagIcon,
  UserIcon,
  LinkIcon,
  WrenchIcon,
  ImagesIcon,
  CommentIcon,
} from '@sanity/icons'

export const structure = (S: StructureBuilder) =>
  S.list()
    .title('Контент "Еллади"')
    .items([
      // Singleton: Налаштування
      S.listItem()
        .title('Налаштування сайту')
        .icon(CogIcon)
        .child(
          S.editor()
            .id('settings')
            .schemaType('settings')
            .documentId('settings'),
        ),
      S.divider(),
      // Сторінки
      S.listItem()
        .title('Сторінки')
        .icon(DocumentTextIcon)
        .child(S.documentTypeList('page')),
      // Книги
      S.listItem()
        .title('Книги')
        .icon(BookIcon)
        .child(S.documentTypeList('book')),
      // Послуги
      S.listItem()
        .title('Послуги')
        .icon(WrenchIcon)
        .child(S.documentTypeList('service')),
      // Портфоліо
      S.listItem()
        .title('Портфоліо')
        .icon(ImagesIcon)
        .child(S.documentTypeList('portfolioItem')),
      // Блог
      S.listItem()
        .title('Блог')
        .icon(ComposeIcon)
        .child(
          S.documentTypeList('post')
            .title('Статті')
            .defaultOrdering([{field: 'publishedAt', direction: 'desc'}]),
        ),
      S.divider(),
      // Відгуки
      S.listItem()
        .title('Відгуки')
        .icon(CommentIcon)
        .child(S.documentTypeList('testimonial')),
      // Довідники
      S.listItem()
        .title('Автори')
        .icon(UserIcon)
        .child(S.documentTypeList('author')),
      S.listItem()
        .title('Категорії')
        .icon(TagIcon)
        .child(S.documentTypeList('category')),
      S.listItem()
        .title('Навігація')
        .icon(LinkIcon)
        .child(S.documentTypeList('navigation')),
    ])