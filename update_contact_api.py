import os

# Создаем папку если не существует
os.makedirs('app/api/contact', exist_ok=True)

# API Route для обработки формы
api_content = '''import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Здесь можно добавить отправку email или в Telegram
    console.log('New contact form submission:', body);
    
    return NextResponse.json({ 
      success: true, 
      message: 'Повідомлення отримано' 
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Помилка обробки форми' },
      { status: 500 }
    );
  }
}
'''

with open('app/api/contact/route.ts', 'w', encoding='utf-8') as f:
    f.write(api_content)

print('Done! API route created.')