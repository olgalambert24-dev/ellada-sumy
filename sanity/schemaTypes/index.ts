import {authorType} from './authorType'
import {categoryType} from './categoryType'
import {postType} from './postType'
import {blockContentType} from './blockContentType'
import {pageType} from './documents/page'
import {bookType} from './documents/book'
import {settingsType} from './documents/settings'
import {navigationType} from './documents/navigation'
import {serviceType} from './documents/service'
import {portfolioItemType} from './documents/portfolioItem'
import {testimonialType} from './documents/testimonial'
import {seoFieldsType} from './objects/seoFields'
import {linkType} from './objects/link'

export const schemaTypes = [
  authorType,
  categoryType,
  postType,
  blockContentType,
  pageType,
  bookType,
  settingsType,
  navigationType,
  serviceType,
  portfolioItemType,
  testimonialType,
  seoFieldsType,
  linkType,
]