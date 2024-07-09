import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import LoginPage from './components/LoginPage';
import Signup from './components/signUp';
// import BookList from './components/BookList';
import BookDetail from './components/BookDetail';
import Books from './components/Books';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<Signup />} />
        {/* <Route path="/books" element={<BookList />} /> */}
        <Route path="/books" element={<Books />} />
        <Route path="/book/:id" element={<BookDetail />} />
      </Routes>
    </>
  );
}

export default App;
