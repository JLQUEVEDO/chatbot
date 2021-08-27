const express = require('express')
const cors = require('cors')
const app = express()
const getConversation = require("./getConversation")
const port = 3002

app.use(cors())


app.get('/', (req, res) => {
  //res.header('Access-Control-Allow-Origin','*'); //added 
  //res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  //res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.send('Hello World!')
})

app.get('/conversation', getConversation)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})