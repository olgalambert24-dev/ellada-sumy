import {client} from '@/sanity/lib/client'
import {booksQuery} from '@/sanity/lib/queries'
import Image from 'next/image'
import Link from 'next/link'

export default async function BooksPage() {
  const books = await client.fetch(booksQuery)

  return (
    <div>
      <h1>Каталог книг</h1>
      <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '20px'}}>
        {books.map((book: any) => (
          <Link href={`/books/${book.slug}`} key={book._id} style={{textDecoration: 'none', color: 'inherit'}}>
            <article style={{border: '1px solid #ddd', padding: '15px', borderRadius: '8px'}}>
              {book.cover && (
                <Image 
                  src={book.cover} 
                  alt={book.title} 
                  width={200} 
                  height={300} 
                  style={{objectFit: 'cover', width: '100%', height: 'auto'}}
                />
              )}
              <h2 style={{fontSize: '18px', margin: '10px 0'}}>{book.title}</h2>
              <p style={{color: '#666'}}>{book.author?.name}</p>
              <p style={{fontWeight: 'bold', color: '#8B1A2B'}}>{book.price} грн</p>
              <p style={{fontSize: '14px', color: '#999'}}>{book.year} рік</p>
            </article>
          </Link>
        ))}
      </div>
    </div>
  )
}