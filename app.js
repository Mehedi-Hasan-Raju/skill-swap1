const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const flash = require('connect-flash');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
// const mongoose = require('mongoose');
// const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({ secret: 'secret', resave: false, saveUninitialized: false }));
app.use(flash());
app.use((req, res, next) => {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  next();
});
app.set('view engine', 'ejs');

// MongoDB Connection
// mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log('MongoDB connected'))
//   .catch(err => console.error(err));

  // Connect to MongoDB
  mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    

  })
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.error('MongoDB connection error:', err));

// Routes
app.use('/auth', require('./routs/auth'));
app.use('/skill', require('./routs/skill'));

// Default Route
app.get('/', (req, res) => {
    res.render('home', { body: '<p>Welcome to the Skill Swap platform!</p>' });
  });
  

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
