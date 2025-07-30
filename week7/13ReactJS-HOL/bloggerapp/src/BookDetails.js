import React from 'react';

const books = [
  { id: 1, title: "React Simplified", author: "Dan" },
  { id: 2, title: "Advanced Hooks", author: "Sophie" },
  { id: 3, title: "Frontend Patterns", author: "Ryan" }
];

function BookDetails() {
  return (
    <div className="card">
      <h2>Book Details</h2>
      <ul>
        {books.map(book => (
          <li key={book.id}>
            📘 <strong>{book.title}</strong> by {book.author}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BookDetails;
