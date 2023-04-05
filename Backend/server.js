require("dotenv").config();
const cors = require("cors");
const express = require('express');
const mongo = require("mongoose");

const app = express();
app.use(express.json());

app.use(cors({
    origin: 'http://localhost:3000'
}));
app.set('trust proxy', 1);


const Port = process.env.PORT || 5000;

mongo.connect(process.env.MONGO_URL)
    .then(() => console.log("Connected To DB"))


const AuthRouter = require("./routes/AuthRouter");

app.use("/auth", AuthRouter);



app.listen(Port, () => {
    console.log(`server is running on ${Port}`);
})
