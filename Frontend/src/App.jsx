import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import LoginPage from './components/LoginPage';
import Signup from './components/signUp';
import BooksList from './components/BooksList';
import BookDetail from './components/BookDetail';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/books" element={<BooksList />} />
        <Route path="/book/:id" element={<BookDetail />} />
      </Routes>
    </>
  );
}

export default App;
