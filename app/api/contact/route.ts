import { NextResponse } from 'next/server';

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
