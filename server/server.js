const express = require("express")
const app = express()
const cors = require("cors")
require("dotenv").config()
const connectDB = require("./config/db")
var path = require('path');
const PORT = process.env.PORT || 5050

// middlewares
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'public'));
app.set('view engine', 'hbs');

app.get('/', function(req, res, next) {
    res.render('index', { title: 'Welcome' });
});


// connect to the mongodb database
// connectDB()

app.use('/api/items', cors(), require("./routes/items"))
app.use('/api/payment', cors(), require("./routes/payment"))

app.listen(PORT, console.log("Server is running on port ", PORT))
