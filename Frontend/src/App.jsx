/*import React from 'react';
import Login from './components/Login';
import LoginPage from './components/LoginPage';
import Signup from './components/signUp';
import { Route, Routes } from "react-router-dom";

function App() {
  return (
  <>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/login' element={<LoginPage/>}/>
      <Route path='/signUp' element={<Signup/>}/>
    </Routes>
  </>
  );
}
export default App */
 
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import LoginPage from './components/LoginPage';
import Signup from './components/signUp';
import BooksList from './components/BookList';
import BookDetail from './components/BookDetail';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signUp' element={<Signup />} />
        <Route path='/books' element={<BooksList />} />
        <Route path='/book/:id' element={<BookDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
