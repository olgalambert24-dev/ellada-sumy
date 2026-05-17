import {client} from '@/sanity/lib/client'
import {bookBySlugQuery} from '@/sanity/lib/queries'
import Image from 'next/image'
import {notFound} from 'next/navigation'

export default async function BookPage({params}: {params: {slug: string}}) {
  const book = await client.fetch(bookBySlugQuery, {slug: params.slug})

  if (!book) {
    notFound()
  }

  return (
    <article style={{maxWidth: '800px', margin: '0 auto', padding: '20px'}}>
      <h1>{book.title}</h1>
      {book.cover && (
        <Image 
          src={book.cover} 
          alt={book.title} 
          width={400} 
          height={600} 
          style={{float: 'left', marginRight: '20px', marginBottom: '20px'}}
        />
      )}
      <p><strong>Автор:</strong> {book.author?.name}</p>
      <p><strong>Ціна:</strong> {book.price} грн</p>
      <p><strong>Рік видання:</strong> {book.year}</p>
      <p><strong>ISBN:</strong> {book.isbn}</p>
      <p><strong>Сторінок:</strong> {book.pages}</p>
      <p><strong>Категорія:</strong> {book.category?.title}</p>
      <hr style={{clear: 'both', margin: '20px 0'}} />
      <p>{book.description}</p>
    </article>
  )
}