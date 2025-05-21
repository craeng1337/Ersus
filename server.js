const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Använd EJS som vy-motor
app.set('view engine', 'ejs');

// Sökväg till dina vyer
app.set('views', path.join(__dirname, 'public'));

// Servera statiska filer som CSS
app.use(express.static(path.join(__dirname, 'public')));

// ROUTES
app.get('/', (req, res) => {
  res.render('index');
});

app.get('/user', (req, res) => {
  res.render('user');
});

app.get('/edit', (req, res) => {
  res.render('edit');
});

app.get('/create', (req, res) => {
  res.render('create');
});

// Middleware för att hantera POST-data
app.use(express.urlencoded({ extended: true })); 

// Starta servern
app.listen(port, () => {
  console.log(`Servern körs på http://localhost:3000`);
});
