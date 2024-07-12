import express from "express";
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';

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

// Book schema
const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  genre: String,
  description: String,
  department: String,
  count: Number,
  vendor: String,
  publisher: String,
});

const Book = mongoose.model('Book', bookSchema);

// Routes
app.post('/signup', async (req, res) => {
  const { username, email, password } = req.body;
  const newUser = new User({ username, email, password });
  try {
    await newUser.save();
    res.status(201).send('User registered');
  } catch (error) {
    res.status(400).send('Error in register user');
  }
});

app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  
  try {
    const user = await User.findOne({ email, password });
    if (user) {
      res.status(200).send({ success: true });
    } else {
      res.status(401).send({ success: false, message: 'Invalid email or password' });
    }
  } catch (error) {
    res.status(400).send({ success: false, message: 'Error logging in' });
  }
});

// Add a route to fetch all books
app.get('/books', async (req, res) => {
  const { department } = req.query;
  try {
    // const books = await Book.find();
    const books = await Book.find({ department: department });
    res.status(200).json(books);
  } catch (error) {
    console.error('Error fetching books:', error);
    res.status(500).send('Error fetching books');
  }
});



// Add a route to fetch a book by title
app.get('/book', async (req, res) => {
  const { title } = req.query; // Get the title from query parameters
  console.log(`Received request for book with title: ${title}`); // Log the title
  try {
    const decodedTitle = decodeURIComponent(title); // Decode the title
    console.log(`Decoded title: ${decodedTitle}`); // Log the decoded title
    const book = await Book.findOne({ title: decodedTitle });
    if (book) {
      console.log(`Book found: ${book.title}`); // Log the book found
      res.status(200).json(book);
    } else {
      console.log('Book not found'); // Log if book is not found
      res.status(404).json({ message: 'Book not found' });
    }
  } catch (error) {
    console.error('Error fetching book:', error);
    res.status(500).send('Error fetching book');
  }
});

app.post('/issue', async (req, res) => {
  const { title, issueDate, dueDate } = req.body;

  try {
    // Find the book by title and decrement the count
    const book = await Book.findOne({ title: decodeURIComponent(title) });
    if (!book) {
      return res.status(404).send('Book not found');
    }

    if (book.count <= 0) {
      return res.status(400).send('No copies left to issue');
    }

    // Decrement the book count
    book.count -= 1;
    await book.save();

    // Here you can save the issue record to a database if needed
    // For example:
    // const issueRecord = new IssueRecord({ title, issueDate, dueDate, userId: req.userId });
    // await issueRecord.save();

    res.status(200).send('Book issued successfully');
  } catch (error) {
    console.error('Error issuing book:', error);
    res.status(500).send('Error issuing book');
  }
});
// app.get('/book', async (req, res) => {
//   const { title } = req.query; // Get the title from query parameters
//   console.log(`Received request for book with title: ${title}`); // Log the title
//   try {
//     const decodedTitle = decodeURIComponent(title); // Decode the title
//     console.log(`Decoded title: ${decodedTitle}`); // Log the decoded title

//     // Create a case-insensitive regular expression for the title
//     const caseInsensitiveTitle = new RegExp(`^${decodedTitle}$`, 'i');
//     console.log(decodedTitle);

//     const book = await Book.findOne({ title: caseInsensitiveTitle });
//     if (book) {
//       console.log(`Book found: ${book.title}`); // Log the book found
//       res.status(200).json(book);
//     } else {
//       console.log('Book not found'); // Log if book is not found
//       res.status(404).json({ message: 'Book not found' });
//     }
//   } catch (error) {
//     console.error('Error fetching book:', error);
//     res.status(500).send('Error fetching book');
//   }
// });

// app.get('/book', async (req, res) => {
//   const { title } = req.query; // Get the title from query parameters
//   console.log(`Received request for book with title: ${title}`); // Log the title
//   try {
//     const decodedTitle = decodeURIComponent(title); // Decode the title
//     console.log(`Decoded title: ${decodedTitle}`); // Log the decoded title
//     // Case-sensitive search using regex without 'i' flag
//     const book = await Book.findOne({ title: { $regex: new RegExp(`^${decodedTitle}$`) } });
//     if (book) {
//       console.log(`Book found: ${book.title}`); // Log the book found
//       res.status(200).json(book);
//     } else {
//       console.log('Book not found'); // Log if book is not found
//       res.status(404).json({ message: 'Book not found' });
//     }
//   } catch (error) {
//     console.error('Error fetching book:', error);
//     res.status(500).send('Error fetching book');
//   }
// });

// app.get('/book', async (req, res) => {
//   const { title } = req.query;
//   console.log(`Received request for book with title: ${title}`);
//   try {
//     const decodedTitle = decodeURIComponent(title);
//     console.log(`Decoded title: ${decodedTitle}`);

//     // Case-insensitive search using regex with 'i' flag
//     const book = await Book.findOne({ title: new RegExp(`^${decodedTitle}$`, 'i') });
//     if (book) {
//       console.log(`Book found: ${book.title}`);
//       res.status(200).json(book);
//     } else {
//       console.log('Book not found');
//       res.status(404).json({ message: 'Book not found' });
//     }
//   } catch (error) {
//     console.error('Error fetching book:', error);
//     res.status(500).send('Error fetching book');
//   }
// });

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
