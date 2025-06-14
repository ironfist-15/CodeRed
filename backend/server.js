// server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth');
const cors = require('cors');


const app = express();
app.use(cors());
app.use(bodyParser.json());

// replace with your real URL
mongoose.connect('mongodb+srv://AryanSankar:JiYiddbIGtf5JAMa@cluster0.yqzbdmb.mongodb.net/newsapp?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));
console.log("Server file loaded");

app.use('/', authRoutes); // << THIS is what enables /register and /login

app.listen(5000, () => console.log('Server running on http://localhost:5000'));
