import React, { useState, useEffect } from 'react';
import books from "../../public/list.json";

const SearchBooks = () => {
    const [books, setBooks] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        const fetchBooks = async () => {
            const response = await fetch('../../public/list.json'); // Assuming books.json is in the public folder
            const data = await response.json();
            setBooks(data);
        };

        fetchBooks();
    }, []);

    const handleSearch = () => {
        const results = books.filter(book =>
            book.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setSearchResults(results);
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Search by book title..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button onClick={handleSearch}>Search</button>

            <div>
                {searchResults.length > 0 ? (
                    <ul>
                        {searchResults.map((book, index) => (
                            <li key={index}>
                                <h3>{book.title}</h3>
                                <p>Author: {book.author}</p>
                                <p>ISBN: {book.isbn}</p>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No results found</p>
                )}
            </div>
        </div>
    );
};

export default SearchBooks;
