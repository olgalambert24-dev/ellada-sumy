import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-amber-700 text-white py-4">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          Еллада
        </Link>
        <nav className="hidden md:flex gap-6 items-center">
          {/* Про нас с выпадающим меню */}
          <div className="relative group">
            <span className="cursor-pointer hover:underline">Про нас</span>
            <div className="absolute left-0 mt-2 w-48 bg-white text-gray-900 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <Link href="/pro-nas" className="block px-4 py-2 hover:bg-gray-100 rounded-t-lg">Про нас</Link>
              <Link href="/pro-nas/istoriya" className="block px-4 py-2 hover:bg-gray-100">Історія</Link>
              <Link href="/pro-nas/komanda" className="block px-4 py-2 hover:bg-gray-100">Команда</Link>
              <Link href="/pro-nas/vyrobnytstvo" className="block px-4 py-2 hover:bg-gray-100">Виробництво</Link>
              <Link href="/pro-nas/nagorody" className="block px-4 py-2 hover:bg-gray-100 rounded-b-lg">Нагороди</Link>
            </div>
          </div>

          {/* Послуги с выпадающим меню */}
          <div className="relative group">
            <span className="cursor-pointer hover:underline">Послуги</span>
            <div className="absolute left-0 mt-2 w-56 bg-white text-gray-900 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <Link href="/poslugi" className="block px-4 py-2 hover:bg-gray-100 rounded-t-lg">Всі послуги</Link>
              <Link href="/poslugi/knyzhne-vydannia" className="block px-4 py-2 hover:bg-gray-100">Книжне видавництво</Link>
              <Link href="/poslugi/dyayn-studiya" className="block px-4 py-2 hover:bg-gray-100">Дизайн-студія</Link>
              <Link href="/poslugi/drukarnia" className="block px-4 py-2 hover:bg-gray-100">Друкарня</Link>
              <Link href="/poslugi/pislyadrukarska-obrobka" className="block px-4 py-2 hover:bg-gray-100 rounded-b-lg">Післядрукарська обробка</Link>
            </div>
          </div>

          {/* Авторам с выпадающим меню */}
          <div className="relative group">
            <span className="cursor-pointer hover:underline">Авторам</span>
            <div className="absolute left-0 mt-2 w-48 bg-white text-gray-900 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <Link href="/avtoram" className="block px-4 py-2 hover:bg-gray-100 rounded-t-lg">Авторам</Link>
              <Link href="/avtoram/etapy" className="block px-4 py-2 hover:bg-gray-100">Етапи видання</Link>
              <Link href="/avtoram/vartist" className="block px-4 py-2 hover:bg-gray-100">Вартість</Link>
              <Link href="/avtoram/faq" className="block px-4 py-2 hover:bg-gray-100 rounded-b-lg">FAQ</Link>
            </div>
          </div>

          <Link href="/portfolio" className="hover:underline">Портфоліо</Link>
          <Link href="/vidguki" className="hover:underline">Відгуки</Link>
          <Link href="/kalkulyator" className="hover:underline">Калькулятор</Link>
          <Link href="/blog" className="hover:underline">Блог</Link>
          <Link href="/kontakty" className="hover:underline">Контакти</Link>
        </nav>
      </div>
    </header>
  );
}