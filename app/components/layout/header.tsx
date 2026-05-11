import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-amber-700 text-white py-4">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          Еллада
        </Link>
       <nav className="hidden md:flex gap-6">
  <Link href="/pro-nas" className="hover:underline">Про нас</Link>
  <Link href="/poslugi" className="hover:underline">Послуги</Link>
  <Link href="/portfolio" className="hover:underline">Портфоліо</Link>
  <Link href="/avtoram" className="hover:underline">Авторам</Link>
  <Link href="/vidguki" className="hover:underline">Відгуки</Link>
  <Link href="/blog" className="hover:underline">Блог</Link>
  <Link href="/kontakty" className="hover:underline">Контакти</Link>
</nav>