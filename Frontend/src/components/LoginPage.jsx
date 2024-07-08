/*import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post('http://localhost:5000/login', { email, password });
      if (response.data.success) {
        alert('Login successful');
      } else {
        alert(response.data.message || 'Invalid emailid or password');
      }
    } catch (error) {
      alert(error.response.data.message || 'Error logging in');
    }
  };

  return (
    <div className="bg-gray-100 flex items-center justify-center h-screen">
      <div className="bg-white p-8 rounded shadow-md w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
        <h2 className="text-2xl font-semibold mb-6 text-center">Login</h2>
        <form onSubmit={handleSubmit} method="dialog" className="space-y-4">
          <div>
            <label htmlFor="username" className="block mb-1">Email-id</label>
            <input
              type="email"
              id="username"
              name="username"
              className="w-full px-3 py-2 border rounded-md outline-none focus:border-blue-500"
              placeholder="Enter your Email-id"
              value={email}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block mb-1">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full px-3 py-2 border rounded-md outline-none focus:border-blue-500"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <a href="#" className="text-blue-500 hover:underline">Forgot password?</a>
            </div>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Login</button>
          </div>
        </form>
        <div className="mt-4 text-center">
          <p className="text-sm">Don't have an account? <Link to="/signup" className="text-blue-500 cursor-pointer hover:underline">Sign Up</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
*/

// Login.jsx

import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/login', { email, password });
      if (response.data.success) {
        alert('Login successful');
        //navigate('/bookslist'); // Redirect to bookslist page
      } else {
        alert(response.data.message || 'Invalid emailid or password');
      }
    } catch (error) {
      alert(error.response.data.message || 'Error logging in');
    }
  };

  return (
    <div className="bg-gray-100 flex items-center justify-center h-screen">
      <div className="bg-white p-8 rounded shadow-md w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
        <h2 className="text-2xl font-semibold mb-6 text-center">Login</h2>
        <form onSubmit={handleSubmit} method="dialog" className="space-y-4">
          <div>
            <label htmlFor="username" className="block mb-1">Email-id</label>
            <input
              type="email"
              id="username"
              name="username"
              className="w-full px-3 py-2 border rounded-md outline-none focus:border-blue-500"
              placeholder="Enter your Email-id"
              value={email}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block mb-1">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full px-3 py-2 border rounded-md outline-none focus:border-blue-500"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <a href="#" className="text-blue-500 hover:underline">Forgot password?</a>
            </div>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Login</button>
          </div>
        </form>
        <div className="mt-4 text-center">
          <p className="text-sm">Don't have an account? <Link to="/signup" className="text-blue-500 cursor-pointer hover:underline">Sign Up</Link></p>
        </div>
      </div>
    </div>
    // Your existing login form JSX
  );
};

export default Login;

