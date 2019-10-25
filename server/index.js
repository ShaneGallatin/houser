require("dotenv").config()
const express = require("express");
const massive = require("massive");
const c = require("./controller");

const {CONNECTION_STRING} = process.env


const app = express();

massive(CONNECTION_STRING).then(dbInstance => {
    app.set("db", dbInstance);
    console.log("Database Connected");
})

app.use(express.json())

const PORT = 4000

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})