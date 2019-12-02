import React, { createContext, useState } from 'react';
import uuid from 'uuid/v1';

export const BookContext = createContext();

const BookContextProvider = props => {
  const [books, setBooks] = useState([
    { title: 'book1', author: 'author1', id: 1 },
    { title: 'book2', author: 'author2', id: 2 },
    { title: 'book3', author: 'author3', id: 3 },
    { title: 'book4', author: 'author4', id: 4 },
  ]);
  const addBook = (title, author) => {
    setBooks([...books], { title, author, id: uuid() });
  };
  const removeBook = id => {
    setBooks(books.filter(book => book.id !== id));
  };
  return (
    <BookContext.Provider value={{ books, addBook, removeBook }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
