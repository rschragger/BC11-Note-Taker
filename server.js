const express = require('express');
const path = require('path');

const api = require('./routes/index.js')

// PORT
const PORT = process.env.PORT || 3001;


const app = express() ;

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// API routing
app.use('/api', api);

// Page routing
app.use(express.static('public'));

// GET Route for homepage
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

// GET Route for notes page
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);

// GET Route for 404 page
app.get('/*', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/error404.html'))
);


app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);