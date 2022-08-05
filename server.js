const express = require('express');
const path = require('path');

const api = require('./routes/index.js')

// PORT from ENV allows Heroku deployment
const PORT = process.env.PORT || 3001;

const app = express() ;

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API routing
app.use('/api', api);

// Static routing
app.use(express.static('public'));

// GET Route for homepage
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

// GET Route for notes page
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);

// GET Route for 404 page - changed to make this comply with Acceptance Criteria
app.get('/*', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);


app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);