const express = require("express")
const app = express()
const authorize = require("./authorize")
const logger = require("./logger")

//d lo lote tae ny yr mhr ll order matters, a yin yay tr a yin lr tl
//d mhr so authorize a yin lr mhr
// so may be logger first
// app.use([authorize, logger])

app.use(express.json({ extended: false }))

app.get("/", function (req, res) {
    console.log("test");
})

app.post("/", function (req, res) {
    console.log(req.body);
    console.log(req);
    res.end("user")
})

app.listen(5000, () => {
    console.log("started");
})

