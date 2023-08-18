const express = require("express")
const app = express()
const logger = require("./logger")

//app.use ka ll order matter tl
// d app.use ko get "/" yae out mhr htr yin 
// "/" ko call yin log m tat wo 
app.use(logger)

// d lo myo path htae lite yin kya tok
// ae lo htae htr tae path twy ko pl apply tok tl.
// app.use("/api",logger)

app.get("/", (req, res) => {
    res.end("home")
})

app.get("/about", (req, res) => {
    console.log("abcd");
    res.end("about")
})


app.listen(5000, () => {
    console.log("App is listening on 5k");
})