import React, { useState } from 'react';
import { render } from 'react-dom';
import './style.css';
import Header from './Header';
import Book from './Book';
import { books } from './books';

const App = () => {
  const [library, setLibrary] = useState(books);

  const update = (id) => {
    console.log(id);
    const newLibrary = [].concat(library);
    const book = newLibrary.find((book) => book.id === id);
    book.read = !book.read;

    setLibrary(newLibrary);
  };

  return (
    <div className="app">
      <Header />
      <p>Celkem přečtených knih: {books.filter((book) => book.read).length} </p>
      <div className="library">
        {library.map((book) => (
          <Book
            id={book.id}
            author={book.author}
            title={book.title}
            year={book.year}
            cover={book.cover}
            read={book.read}
            key={book.id}
            handleUpdate={update}
          />
        ))}
      </div>
    </div>
  );
};

render(<App />, document.querySelector('#app'));
