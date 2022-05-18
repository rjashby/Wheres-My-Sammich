// import SQL from "../src/SQL"

const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: 'root',
  host: 'localhost',
  password: "Qwer2468!!",
  database: 'sandwiches' 
});


app.post('/create', (req, res) => {
  const title = req.body.title
  const sandwich = req.body.sandwich
  const location = req.body.location
  const stars = req.body.stars
  const comments = req.body.comments

  db.query('INSERT INTO sandwiches (title, sandwich, location, stars, comments) VALUES (?, ?, ?, ?, ?)', [title, sandwich, location, stars, comments], (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.get('/sandwiches', (req, res) => {
  db.query('SELECT * FROM sandwiches', (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  })
});

app.delete("/delete/:id", (req, res) => {
  const id = req.params.id;
  db.query("DELETE FROM sandwiches WHERE id = ?", id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.listen(3001, () => {
  console.log('Your server is running on port 3001');
});