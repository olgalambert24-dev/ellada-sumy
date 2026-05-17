import { createClient } from '@sanity/client'

export const sanityClient = createClient({
  projectId: '3k5drimj',        // ✅ Має співпадати з sanity.config.ts!
  dataset: 'production',
  apiVersion: '2026-05-13',
  useCdn: false,                // Рекомендовано для development
})