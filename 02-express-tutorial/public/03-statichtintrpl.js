const express = require('express');
const app = express()


// express.static so tr ka server ka change sayr m lo tae static file twy ko pyaw tr tae
// but they can be seen publically tho
// app.use so tr ka tok still learn ya ohn mhr 
app.use(express.static('./public'))


// d hr ll m lo wo static file htl index ko thwr htae lite yin ya p 
// app.get('/', (req, res) => {
//     res.sendFile(__dirname + "/navbar-app/index.html")
// })

app.all('*', (req, res) => {
    res.status(404).send("404")
})

app.listen(5000, () => {
    console.log("Server is listening on port 5000");
})