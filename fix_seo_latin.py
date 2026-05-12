import os

pages_fix = {
    'app/page.tsx': {
        'title': 'Golovna',
        'description': 'Vydavnychyi budynok Ellada - knyzhne vydavnytstvo, dyzain-studia ta drukarnia povnoho tsyklu v Sumakh z 2000 roku.'
    },
    'app/pro-nas/page.tsx': {
        'title': 'Pro nas',
        'description': 'Istoriia vydavnychoho budynku Ellada. Polihrafiia povnoho tsyklu v Sumakh z 2000 roku.'
    },
    'app/poslugi/page.tsx': {
        'title': 'Posluhy',
        'description': 'Povnyi spektr polihrafichnykh posluh: vydavnytstvo, dyzain, druk, pisliadrukarska obrobka.'
    },
    'app/portfolio/page.tsx': {
        'title': 'Portfolio',
        'description': 'Nashi roboty ta proiekty. Pryklady knyzhkovykh vydan, reklamnoi ta dilovoi polihrafii.'
    },
    'app/avtoram/page.tsx': {
        'title': 'Avtoram',
        'description': 'Informatsiia dlia avtoriv. Yak vydaty knyhu v Sumakh. Etapy, vartist, vidpovidi na pytannia.'
    },
    'app/kalkulyator/page.tsx': {
        'title': 'Kalkuliator tiazahu',
        'description': 'Onlain-kalkuliator vartosti druku. Rozrakhuite tsinu vydannia knyhy.'
    },
    'app/vidguki/page.tsx': {
        'title': 'Vidhuky',
        'description': 'Vidhuky kliientiv vydavnychoho budynku Ellada.'
    },
    'app/blog/page.tsx': {
        'title': 'Blog',
        'description': 'Novyny polihrafii, porady dlia avtoriv, stati pro druk ta dyzain.'
    },
    'app/kontakty/page.tsx': {
        'title': 'Kontakty',
        'description': 'Kontakty vydavnychoho budynku Ellada. Adresa, telefon, email m. Sumy.'
    },
}

for path, meta in pages_fix.items():
    # Read current content
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Remove old metadata block
    lines = content.split('\n')
    new_lines = []
    skip = 0
    for line in lines:
        if 'import { Metadata }' in line and skip == 0:
            skip = 5
        elif skip > 0:
            skip -= 1
        else:
            new_lines.append(line)
    
    # Add new metadata
    metadata_block = f'''import {{ Metadata }} from "next";

export const metadata: Metadata = {{
  title: "{meta['title']}",
  description: "{meta['description']}",
}};

'''
    
    final_content = metadata_block + '\n'.join(new_lines)
    
    with open(path, 'w', encoding='utf-8') as f:
        f.write(final_content)
    
    print(f'Fixed: {path}')

print('Done! All SEO metadata fixed with Latin transliteration.')