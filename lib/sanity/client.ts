import { createClient } from '@sanity/client'

export const sanityClient = createClient({
  projectId: '26s1il5r',
  dataset: 'production',
  apiVersion: '2026-05-13',
  useCdn: true,
})