const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');

// import routers
const postRoutes = require('./routes/posts');

const PORT = process.env.PORT || 3000;

app.use(express.static(path.resolve(__dirname, '../client')));
app.use(express.json());
app.use(express.urlencoded({extended: false}))
// app.use(bodyParser.json({limit: '30mb', extended: true}))
app.use(cors());


// CONNECTION TO MONGODB DATABASE
mongoose.connect(process.env.MONGODB_RI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}, () => console.log('Database Connected'));


// route handlers here
app.use('/posts', postRoutes);


app.get('/', (req, res) => res.send('hello test'));

app.use((req, res) => res.status(404).send('This is not the page you\'re looking for...'));

app.listen(3000, () => console.log('Listening on Port: 3000'))

module.exports = app;