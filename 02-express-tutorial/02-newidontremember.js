const express = require("express")
const app = express();


console.log('Express Tutorial')

app.get('/', (req, res) => {
    res.end("Hello")
    // res.send("Hello")
})

app.get("/about", (req, res) => {
    res.send("about page")
})

app.all("*", (req, res) => {
    res.status(404)
    res.send("Cannot find the route you are referring")
})

// Dr ko ka a por sone mhr htr ll br mha tok m fik wo 
app.listen(5000, () => {
    console.log("Server is listening on 5000");
})