import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function BookDetails() {
  const { title } = useParams(); // Capture the book title from the URL parameters
  const [book, setBook] = useState(null); // Initialize book state to null
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/book?title=${encodeURIComponent(title)}`);
        if (res.data) {
          setBook(res.data);
        } else {
          setBook(null);
        }
      } catch (error) {
        console.error("Error fetching book details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBook();
  }, [title]);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (!book) {
    return <div>Book not found</div>;
  }

  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 mt-4">
      <h1 className="font-semibold text-2xl">{book.title}</h1>
      <p>{book.description}</p>
      <p>Author: {book.author}</p>
      <p>Genre: {book.genre}</p>
      <p>Department: {book.department}</p>
      <p>Count: {book.count}</p>
      <p>Vendor: {book.vendor}</p>
      <p>Publisher: {book.publisher}</p>
    </div>
  );
}

export default BookDetails;

