import os

# Метаданные для каждой страницы
metadata_pages = {
    'app/page.tsx': {
        'title': 'Головна',
        'description': 'Видавничий будинок «Еллада» — книжне видавництво, дизайн-студія та друкарня повного циклу в Сумах з 2000 року.'
    },
    'app/pro-nas/page.tsx': {
        'title': 'Про нас',
        'description': 'Історія видавничого будинку «Еллада». Поліграфія повного циклу в Сумах з 2000 року.'
    },
    'app/poslugi/page.tsx': {
        'title': 'Послуги',
        'description': 'Повний спектр поліграфічних послуг: видавництво, дизайн, друк, післядрукарська обробка.'
    },
    'app/portfolio/page.tsx': {
        'title': 'Портфоліо',
        'description': 'Наші роботи та проєкти. Приклади книжкових видань, рекламної та ділової поліграфії.'
    },
    'app/avtoram/page.tsx': {
        'title': 'Авторам',
        'description': 'Інформація для авторів. Як видати книгу в Сумах. Етапи, вартість, відповіді на питання.'
    },
    'app/kalkulyator/page.tsx': {
        'title': 'Калькулятор тиражу',
        'description': 'Онлайн-калькулятор вартості друку. Розрахуйте ціну видання книги.'
    },
    'app/vidguki/page.tsx': {
        'title': 'Відгуки',
        'description': 'Відгуки клієнтів видавничого будинку «Еллада».'
    },
    'app/blog/page.tsx': {
        'title': 'Блог',
        'description': 'Новини поліграфії, поради для авторів, статті про друк та дизайн.'
    },
    'app/kontakty/page.tsx': {
        'title': 'Контакти',
        'description': 'Контакти видавничого будинку «Еллада». Адреса, телефон, email м. Суми.'
    },
}

for path, meta in metadata_pages.items():
    # Читаем текущее содержимое
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Добавляем метаданные в начало файла
    metadata_block = f"""import {{ Metadata }} from "next";

export const metadata: Metadata = {{
  title: "{meta['title']}",
  description: "{meta['description']}",
}};

"""
    
    # Удаляем старый импорт Metadata если есть
    if 'import { Metadata } from "next";' in content:
        content = content.replace('import { Metadata } from "next";\n\n', '')
    
    # Удаляем старый export const metadata если есть
    if 'export const metadata:' in content:
        lines = content.split('\n')
        new_lines = []
        skip = False
        for line in lines:
            if 'export const metadata:' in line:
                skip = True
            elif skip and line.strip() == '};':
                skip = False
                continue
            elif not skip:
                new_lines.append(line)
        content = '\n'.join(new_lines)
    
    # Добавляем новые метаданные
    new_content = metadata_block + content
    
    with open(path, 'w', encoding='utf-8') as f:
        f.write(new_content)
    
    print(f'Updated metadata: {path}')

print('Done! All metadata updated.')