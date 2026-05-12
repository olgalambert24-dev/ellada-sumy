import os

# Список всех страниц для проверки
pages = [
    'app/page.tsx',
    'app/pro-nas/page.tsx',
    'app/poslugi/page.tsx',
    'app/portfolio/page.tsx',
    'app/avtoram/page.tsx',
    'app/kalkulyator/page.tsx',
    'app/vidguki/page.tsx',
    'app/blog/page.tsx',
    'app/kontakty/page.tsx',
]

print("=== SEO Check Results ===\n")

for page_path in pages:
    print(f"Checking: {page_path}")
    
    if not os.path.exists(page_path):
        print(f"  ❌ File not found!")
        continue
    
    with open(page_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Check for metadata
    has_metadata = 'export const metadata' in content or 'generateMetadata' in content
    has_title = 'title:' in content
    has_description = 'description:' in content
    
    if has_metadata:
        print(f"  ✅ Has metadata")
    else:
        print(f"  ⚠️  No metadata (may use default from layout)")
    
    if has_title:
        print(f"  ✅ Has title")
    else:
        print(f"  ❌ No title")
    
    if has_description:
        print(f"  ✅ Has description")
    else:
        print(f"  ❌ No description")
    
    print()

print("=== Check Complete ===")