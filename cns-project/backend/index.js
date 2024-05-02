// index.js

const express = require('express');

const connectToMongo = require('./db');
const cors = require('cors');
const authRoutes = require('./routes/auth');

connectToMongo();

const app = express();
const port = 4000;



app.use(express.urlencoded({ extended: true }));
app.use(cors({
  origin: 'http://127.0.0.1:5500',
  credentials: true
}));
app.use(express.json());

// Available Routes
app.use('/api/auth', authRoutes);

// Middleware to restrict access to authenticated users
const isAuthenticated = (req, res, next) => {
  if (req.session.userId) {
    next();
  } else {
    res.redirect('/frontend/index.html');
  }
};

// Define your routes
app.get('/', (req, res) => {
  res.send('Hello loki');
});

// Example protected route
app.get('/home.html', isAuthenticated, (req, res) => {
  res.sendFile(__dirname + '/frontend/home.html'); 
});

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
