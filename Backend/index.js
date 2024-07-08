import express from "express"
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import cors from 'cors'

const app = express();
app.use(bodyParser.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/LMS_Project', { useNewUrlParser: true, useUnifiedTopology: true });

// Check connection
mongoose.connection.once('open', () => {
  console.log('Connected to MongoDB');
});

// User schema
const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
});

const User = mongoose.model('User', userSchema);

// Routes
app.post('/signup', async (req, res) => {
    const { username, email, password } = req.body;
    const newUser = new User({ username, email, password});
    try {
        await newUser.save();
        res.status(201).send('User registered');
    } catch (error) {
        res.status(400).send('Error registering user');
    }
});

app.post('/login', async (req, res) => {
    const { email, password } = req.body;
  
    try {
      const user = await User.findOne({ email, password });
      if (user) {
        res.status(200).send({ success: true });
      } else {
        res.status(401).send({ success: false, message: 'Invalid emailid or password' });
      }
    } catch (error) {
      res.status(400).send({ success: false, message: 'Error logging in' });
    }
  });
  

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});


// index.js

// Add a route to fetch books
app.get('/books', async (req, res) => {
  try {
    const books = await Book.find(); // Assuming you have a Book model in your MongoDB
    res.status(200).json(books);
  } catch (error) {
    console.error('Error fetching books:', error);
    res.status(500).send('Error fetching books');
  }
});

// Ensure you have a Book model defined in your mongoose schema
const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  genre: String,
  // Add more fields as needed
});

const Book = mongoose.model('Book', bookSchema);
