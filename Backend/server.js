require("dotenv").config();
const cors = require("cors");
const express = require('express');
const mongo = require("mongoose");

const app = express();
app.use(express.json());

app.use(cors({
    origin: 'https://zingy-tarsier-f0bc0b.netlify.app'
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



app.listen(Port, () => {
    console.log(`server is running on ${Port}`);
})
