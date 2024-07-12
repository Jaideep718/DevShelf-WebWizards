// import React from 'react'

// function IssueBook() {
//     const issueDate = new Date().toLocaleDateString();
//   const dueDate = new Date();
//   dueDate.setDate(dueDate.getDate() + 10);
//   return (
//     <>
//     <div className="container mx-auto mt-10">
//       <h1 className="text-3xl font-bold mb-5">Issue Book</h1>
//       {/* <p><strong>Title:</strong> {decodeURIComponent(title)}</p> */}
//       <p><strong>Issue Date:</strong> {issueDate}</p>
//       <p><strong>Number of Books Issuing:</strong> 1</p>
//       <p><strong>Due Date:</strong> {dueDate.toLocaleDateString()}</p>
//     </div>

//     </>
//   )
// }

// export default IssueBook

// function IssueBook({ match }) {
//   const { title } = match.params;

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function IssueBook() {
  const { title } = useParams();
  const navigate = useNavigate();
  //   const history = useHistory();
  const [book, setBook] = useState(null);
  const [issueDate, setIssueDate] = useState(
    new Date().toISOString().split("T")[0]
  );
  const [dueDate, setDueDate] = useState("");
  const [isIssued, setIsIssued] = useState(false);

  // useEffect(() => {
  //   axios
  //     .get(`/book?title=${encodeURIComponent(title)}`)
  //     .then((response) => {
  //       setBook(response.data);
  //       const dueDate = new Date();
  //       dueDate.setDate(dueDate.getDate() + 10);
  //       setDueDate(dueDate.toISOString().split("T")[0]);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching book:", error);
  //     });
  // }, [title]);

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/book?title=${encodeURIComponent(title)}`
        );
        if (res.data) {
          setBook(res.data);
          const dueDate = new Date();
        dueDate.setDate(dueDate.getDate() + 10);
        setDueDate(dueDate.toISOString().split("T")[0]);
        } else {
          setBook(null);
        }
      } catch (error) {
        console.error("Error fetching book details:", error);
      }
    };

    fetchBook();
  }, [title]);

  const handleIssueBook = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/issue", {
        title: decodeURIComponent(title),
        issueDate,
        dueDate,
      });
      setIsIssued(true);
      //   setTimeout(() => {
      //     history.push('/');
      //   }, 3000); // Redirect to home after 3 seconds
    } catch (error) {
      console.error("Error issuing book:", error);
    }
  };

  if (!book) {
    return <p>Loading...</p>;
  }

  // return (
  //   <div className="issue-book-container ">
  //     <h1 className="text-3xl font-bold mb-5">Issue Book</h1>
  //     {isIssued ? (
  //       <div className="success-message">
  //         <p>Book successfully issued!</p>
  //         <p>You will be redirected to the home page shortly.</p>
  //       </div>
  //     ) : (
  //       <form onSubmit={handleIssueBook}>
  //         <p><strong>Title:</strong> {book.title}</p>
  //         <p><strong>Author:</strong> {book.author}</p>
  //         <p><strong>Genre:</strong> {book.genre}</p>
  //         <p><strong>Description:</strong> {book.description}</p>
  //         <label htmlFor="issueDate">Issue Date:</label>
  //         <input
  //           type="date"
  //           id="issueDate"
  //           value={issueDate}
  //           onChange={(e) => setIssueDate(e.target.value)}
  //           required
  //         />
  //         <label htmlFor="dueDate">Due Date:</label>
  //         <input
  //           type="date"
  //           id="dueDate"
  //           value={dueDate}
  //           readOnly
  //         />
  //         <button type="submit" className="issue-button">Issue Book</button>
  //       </form>
  //     )}
  //   </div>
  // );
  const notify = () => {
    toast.success("Book successfully issued", { duration: 2000 });
    navigate("/books");
  };

  return (
    <div className="max-w-2xl mx-auto mt-12 p-6 border border-gray-300 rounded-lg bg-custom-bg-color ">
      <h1 className="text-3xl font-bold mb-5 text-center">Issue Book</h1>
      {isIssued ? (
        <div className="text-center text-green-500">
          <p>Book successfully issued!</p>
          <p>You will be redirected to the home page shortly.</p>
        </div>
      ) : (
        <form onSubmit={handleIssueBook} className="flex flex-col">
          <p>
            <strong>Title:</strong> {book.title}
          </p>
          <p>
            <strong>Author:</strong> {book.author}
          </p>
          <p>
            <strong>Genre:</strong> {book.genre}
          </p>
          <p>
            <strong>Description:</strong> {book.description}
          </p>
          <label htmlFor="issueDate" className="mb-1 mt-4">
            Issue Date:
          </label>
          <input
            type="date"
            id="issueDate"
            value={issueDate}
            readOnly
            onChange={(e) => setIssueDate(e.target.value)}
            className="mb-5 p-2 border border-gray-300 rounded"
            required
          />
          <label htmlFor="dueDate" className="mb-1">
            Due Date:
          </label>
          <input
            type="date"
            id="dueDate"
            value={dueDate}
            readOnly
            className="mb-5 p-2 border border-gray-300 rounded"
          />
          <button
            type="submit"
            className="py-2 px-4 bg-blue-400 text-white rounded hover:bg-blue-500 hover:text-white transition duration-200"
            onClick={notify}
          >
            Issue Book
            <Toaster />
          </button>
        </form>
      )}
    </div>
  );
}

export default IssueBook;
