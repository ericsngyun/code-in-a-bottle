const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');

// import routers
const postRoutes = require('./routes/posts');

const PORT = process.env.PORT || 3000;

app.use(express.json());

// app.use(express.static(path.resolve(__dirname, '../client')));
app.use(express.urlencoded({extended: true}))
// app.use(bodyParser.json({limit: '30mb', extended: true}))
app.use(cors());
app.use('/posts', postRoutes);


// CONNECTION TO MONGODB DATABASE
mongoose.connect("mongodb+srv://eyun010:expressjs@crud.qn7xnz2.mongodb.net/?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}, () => console.log('Database Connected'));


// route handlers here


app.get('/', (req, res) => res.send('hello test'));

app.use((req, res) => res.status(404).send('This is not the page you\'re looking for...'));

app.listen(3000, () => console.log('Listening on Port: 3000'))

module.exports = app;