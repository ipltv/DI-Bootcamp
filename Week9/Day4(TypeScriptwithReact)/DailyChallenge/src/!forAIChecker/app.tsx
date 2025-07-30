import { useState, type ReactNode } from 'react'
import './BookApp.css'
import { type Book } from './types'
import List from './components/List'
import { v4 as uuid } from 'uuid'

function BookApp() {
  const [books, setBooks] = useState<Book[]>([
    { id: uuid(), title: "1984", author: "George Orwell" },
    { id: uuid(), title: "Brave New World", author: "Aldous Huxley" },
    { id: uuid(), title: "Fahrenheit 451", author: "Ray Bradbury" }
  ]);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  function addBook(title: string, author: string) {
    const newBook: Book = {
      id: uuid(),
      title,
      author
    };
    setBooks([...books, newBook]);
  };
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!title.trim() || !author.trim()) return;
    addBook(title.trim(), author.trim());
    setTitle('');
    setAuthor('');
  }
  return (
    <div className='container'>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Author"
          value={author}
          onChange={e => setAuthor(e.target.value)}
        />
        <button type="submit">Add Book</button>
      </form>

      <List items={books} renderItem={(item: Book): ReactNode => {
        return (
          <>
            <p><strong>ID:</strong>{item.id}</p>
            <p><strong>Name:</strong>{item.title}</p>
            <p><strong>Author:</strong>{item.author}</p>
          </>
        )
      }} />
    </div>
  )
}

export default BookApp

export type Book = {
    id: number | string;
    title: string;
    author: string;
}

import { type ReactNode } from 'react'

interface ListProps<T> {
    items: T[];
    renderItem: (item: T) => ReactNode;
}

const List = <T,>({ items, renderItem }: ListProps<T>): ReactNode => {
    return (
        <div>
            <h2>List Component</h2>
            {items.map((item, index) => {
                return <div key={index}>{renderItem(item)}</div>
            })}
        </div>
    )
}

export default List