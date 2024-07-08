/*import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BooksList = () => {
  return (
    <div>
      <div class="relative flex mt-3 ml-64 w-2/3">
      <input type="search"
        class="relative m-0 -me-0.5 block flex-auto rounded-s border border-solid border-neutral-200 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-surface outline-none transition duration-200 ease-in-out placeholder:text-neutral-500 focus:z-[3] focus:border-primary focus:shadow-inset focus:outline-none motion-reduce:transition-none dark:border-white/10 dark:text-white dark:placeholder:text-neutral-200 dark:autofill:shadow-autofill dark:focus:border-primary"
        placeholder="Search" aria-label="Search" id="exampleFormControlInput3" aria-describedby="button-addon3" />
        <button class="z-[2] inline-block rounded-e border-2 border-primary px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-primary transition duration-150 ease-in-out hover:border-primary-accent-300 hover:bg-primary-50/50 hover:text-primary-accent-300 focus:border-primary-600 focus:bg-primary-50/50 focus:text-primary-600 focus:outline-none focus:ring-0 active:border-primary-700 active:text-primary-700 dark:text-primary-500 dark:hover:bg-blue-950 dark:focus:bg-blue-950" data-twe-ripple-init
           data-twe-ripple-color="white" type="button" id="button-addon3"> Search
        </button>
      </div>

    </div>
  );
};

export default BooksList;*/


import React from 'react';
import { Link } from 'react-router-dom';

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

const BooksList = () => {
  return (
    <div>
      <div className="relative flex mt-3 ml-64 w-2/3">
        <input
          type="search"
          className="relative m-0 -me-0.5 block flex-auto rounded-s border border-solid border-neutral-200 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-surface outline-none transition duration-200 ease-in-out placeholder:text-neutral-500 focus:z-[3] focus:border-primary focus:shadow-inset focus:outline-none motion-reduce:transition-none dark:border-white/10 dark:text-white dark:placeholder:text-neutral-200 dark:autofill:shadow-autofill dark:focus:border-primary"
          placeholder="Search"
          aria-label="Search"
          id="exampleFormControlInput3"
          aria-describedby="button-addon3"
        />
        <button
          className="z-[2] inline-block rounded-e border-2 border-primary px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-primary transition duration-150 ease-in-out hover:border-primary-accent-300 hover:bg-primary-50/50 hover:text-primary-accent-300 focus:border-primary-600 focus:bg-primary-50/50 focus:text-primary-600 focus:outline-none focus:ring-0 active:border-primary-700 active:text-primary-700 dark:text-primary-500 dark:hover:bg-blue-950 dark:focus:bg-blue-950"
          data-twe-ripple-init
          data-twe-ripple-color="white"
          type="button"
          id="button-addon3"
        >
          Search
        </button>
      </div>
      <div className="ml-64 w-2/3 mt-4">
        {books.map((book, index) => (
          <Link key={index} to={`/book/${index}`}>
            <div className="p-4 border-b border-gray-200 cursor-pointer hover:bg-gray-100">
              <h3 className="text-lg font-semibold">{book.title}</h3>
              <p className="text-sm text-gray-600">{book.author}</p>
              <p className="text-sm text-gray-600">{book.genre}</p>
              <p className="text-sm text-gray-600">{book.department}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BooksList;
