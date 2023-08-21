require("./db/connect")

const express = require("express")
const app = express();
const tasks = require('./routes/tasks')
const notFound = require('./middleware/not-found')

// middle ware
app.use(express.static("./public"))
app.use(express.json())


// app.get("/ping", (req, res) => {
//     res.send("pong")
// })

app.use("/api/v1/tasks", tasks)

app.use(notFound)

//api twy lr ml

const port = 3000;

app.listen(port, () => {
    console.log(`App is listening on port ${port}...`);
})