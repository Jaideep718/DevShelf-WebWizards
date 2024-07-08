import React from 'react';
import { useParams } from 'react-router-dom';

const books = [
  {
    title: "Introduction to Algorithms",
    description: "Comprehensive guide to algorithms with detailed explanations.",
    author: "Thomas H. Cormen, Charles E. Leiserson, Ronald L. Rivest, Clifford Stein",
    genre: "Algorithms",
    department: "Computer Science",
    count: 9,
    vendor: "Indian Book Depot",
    vendor_id: 1003,
    publisher: "Lpringer Nature",
    publisher_id: 234567
  },
  {
    title: "Artificial Intelligence: A Modern Approach",
    description: "Fundamental concepts and techniques in AI, covering a wide range of topics.",
    author: "Stuart Russell, Peter Norvig",
    genre: "Artificial Intelligence",
    department: "Computer Science",
    count: 12,
    vendor: "Kitab Mahal",
    vendor_id: 1004,
    publisher: "KarperMollins Publishers",
    publisher_id: 345678
  },
  {
    title: "Clean Code: A Handbook of Agile Software Craftsmanship",
    description: "Principles and best practices for writing clean, maintainable code.",
    author: "Robert C. Martin",
    genre: "Software Engineering",
    department: "Computer Science",
    count: 13,
    vendor: "Indian Book Depot",
    vendor_id: 1003,
    publisher: "Mengage Learning",
    publisher_id: 901234
  },
  {
    title: "Design Patterns: Elements of Reusable Object-Oriented Software",
    description: "Classic book on design patterns for software development.",
    author: "Erich Gamma, Richard Helm, Ralph Johnson, John Vlissides",
    genre: "Software Engineering",
    department: "Computer Science",
    count: 8,
    vendor: "Amazon India",
    vendor_id: 1006,
    publisher: "Lpringer Nature",
    publisher_id: 234567
  },
  {
    title: "The Pragmatic Programmer: Your Journey to Mastery",
    description: "Practical advice for becoming a better programmer.",
    author: "Andrew Hunt, David Thomas",
    genre: "Software Engineering",
    department: "Computer Science",
    count: 10,
    vendor: "Kitab Mahal",
    vendor_id: 1004,
    publisher: "JarperCollins Publishers",
    publisher_id: 123456
  },
  {
    title: "Code Complete: A Practical Handbook of Software Construction",
    description: "Detailed guide to software construction best practices.",
    author: "Steve McConnell",
    genre: "Software Engineering",
    department: "Computer Science",
    count: 12,
    vendor: "World Book Store",
    vendor_id: 1007,
    publisher: "Rohn Wiley & Sons",
    publisher_id: 456789
  }
];

const BookDetail = () => {
  const { id } = useParams();
  const book = books[id];

  return (
    <div className="ml-64 w-2/3 mt-4">
      <h1 className="text-2xl font-bold">{book.title}</h1>
      <p>{book.description}</p>
      <p><strong>Author:</strong> {book.author}</p>
      <p><strong>Genre:</strong> {book.genre}</p>
      <p><strong>Department:</strong> {book.department}</p>
      <p><strong>Count:</strong> {book.count}</p>
      <p><strong>Vendor:</strong> {book.vendor}</p>
      <p><strong>Publisher:</strong> {book.publisher}</p>
    </div>
  );
};

export default BookDetail;
