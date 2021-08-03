const express = require('express');
const path = require('path')
const app = express();
const port = process.env.Port || 3000;

const static_path = path.join(__dirname, "../public")
app.use(express.static(static_path))

app.get("/", (req, res)=>{
  res.send("<h1>Express Js is working:</h1>")
})

app.get("/about", (req, res)=>{
  res.send("<h1>About Page</h1>")
})

app.get("/services", (req, res)=>{
  res.send("<h1>Service page</h1>")
})

app.get("*", (req, res)=>{
  res.send("<h1>404 Error Page Not Found:</h1>")
})


app.listen(port, ()=>{
  console.log(`Api is Working http://localhost:${port}`)
})