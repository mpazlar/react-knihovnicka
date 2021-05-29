import React, { useCallback, useState } from 'react';
import './book_style.css';

const Book = ({ id, title, author, year, cover, read, handleUpdate }) => {
  /*
  const [precteno, setPrecteno] = useState(read);

  const onUpdate = () => {
    setPrecteno(!precteno);
  };
  */

  const handleClick = () => {
    handleUpdate(id);
  };

  return (
    <div className="book">
      <img className="book__cover" src={`/assets/${cover}`} alt="" />
      <div className="book__info">
        <h2 className="book__title">{title}</h2>
        <p className="book__meta">
          {author}, {year}
        </p>
        <button onClick={handleClick} className="book__read">
          {read ? 'Přečteno' : 'Nepřečteno'}
        </button>
      </div>
    </div>
  );
};

export default Book;
