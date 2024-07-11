import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import LoginPage from './components/LoginPage';
import Signup from './components/signUp';
import BookDetails from './components/BookDetail';
import Books from './components/Books';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/books" element={<Books />} />
        <Route path="/book/:title" element={<BookDetails />} />
      </Routes>
      <Toaster />
    </>
  );
}

export default App;
