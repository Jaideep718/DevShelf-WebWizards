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
      <h1 className="font-semibold text-4xl">{book.title}</h1><br />
      <p className='text-3xl'>{book.description}</p><br />
      <p className='text-2xl'>Author : {book.author}</p><br />
      <p className='text-2xl'>Genre: {book.genre}</p><br />
      <p className='text-2xl'>Department: {book.department}</p><br />
      <p className='text-2xl'>Count: {book.count}</p><br />
      <p className='text-2xl'>Vendor: {book.vendor}</p><br />
      <p className='text-2xl'>Vendor Id: {book.vendor_id}</p><br />
      <p className='text-2xl'>Publisher: {book.publisher}</p><br />
      <p className='text-2xl'>Publisher Id: {book.publisher_id}</p><br />
      <button className="bg-black text-white px-3 py-2 rounded-md hover:bg-blue-800 duration-300 cursor-pointer">Borrow Book</button><br /><br />
      <button className="bg-black text-white px-3 py-2 rounded-md hover:bg-blue-800 duration-300 cursor-pointer">Return Book</button>
    </div>
  );
}

export default BookDetails;

