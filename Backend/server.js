require("dotenv").config();
const cors = require("cors");
const express = require('express');
const mongo = require("mongoose");
const cookieParser = require('cookie-parser');

const app = express();
app.use(express.json());
app.use(helmet());
app.use(cookieparser());
app.use(cors({
    origin: 'https://zomato-harshit.netlify.app'
}));
app.set('trust proxy', 1);


const Port = process.env.PORT || 5000;

mongo.connect(process.env.MONGO_URL)
    .then(() => console.log("Connected To DB"))


const AuthRouter = require("./routes/AuthRouter");

app.use("/auth", AuthRouter);
app.use("/", (req, res) => {
    res.send("<h1>Working Fine</h1>");
});
app.get('/setcookie', (req, res) => {
    res.cookie(`Cookie token name`, `encrypted cookie string Value`);
    res.send('Cookie have been saved successfully');
});


app.listen(Port, () => {
    console.log(`server is running on ${Port}`);
})
