#!/usr/bin/env python3
import os
from pathlib import Path

def create_sanity_structure(base_dir="."):
    directories = [
        "sanity",
        "sanity/schemaTypes",
        "sanity/schemaTypes/objects",
        "sanity/schemaTypes/documents",
        "sanity/lib",
        "sanity/plugins",
        "sanity/structure",
        "sanity/components",
    ]
    
    files = {
        "sanity.config.ts": """import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './sanity/schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'Ellada - Sanity Studio',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  plugins: [structureTool(), visionTool()],
  schema: { types: schemaTypes },
})""",
        "sanity.cli.ts": """import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  }
})""",
        "sanity/env.ts": """export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-05-01'

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
)

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
)

function assertValue(v, errorMessage) {
  if (v === undefined) {
    throw new Error(errorMessage)
  }
  return v
}""",
        "sanity/schemaTypes/index.ts": """import { type SchemaTypeDefinition } from 'sanity'

export const schemaTypes: SchemaTypeDefinition[] = [
  // Add your schemas here
]""",
        "sanity/lib/client.ts": """import { createClient } from "next-sanity"
import { apiVersion, dataset, projectId } from "../env"

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn: true,
})""",
        "sanity/lib/image.ts": """import createImageUrlBuilder from '@sanity/image-url'
import { dataset, projectId } from '../env'

const imageBuilder = createImageUrlBuilder({ projectId, dataset })

export const urlForImage = (source) => {
  return imageBuilder?.image(source).auto('format').fit('max')
}""",
        "sanity/structure/index.ts": """import { StructureResolver } from "sanity/structure"

export const structure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([
      // Add navigation items here
    ])""",
    }
    
    base_path = Path(base_dir).resolve()
    print(f"Creating Sanity Studio structure in: {base_path}")
    
    for dir_path in directories:
        full_path = base_path / dir_path
        full_path.mkdir(parents=True, exist_ok=True)
        print(f"  [DIR] {full_path.relative_to(base_path)}")
    
    print("\nCreating files:")
    for file_path, content in files.items():
        full_path = base_path / file_path
        full_path.parent.mkdir(parents=True, exist_ok=True)
        with open(full_path, "w", encoding="utf-8") as f:
            f.write(content)
        print(f"  [FILE] {file_path}")
    
    print("\nDone! Next steps:")
    print("  1. npm install sanity @sanity/vision next-sanity @sanity/image-url")
    print("  2. Add environment variables to .env.local")
    print("  3. Create document schemas in sanity/schemaTypes/documents/")

if __name__ == "__main__":
    create_sanity_structure()