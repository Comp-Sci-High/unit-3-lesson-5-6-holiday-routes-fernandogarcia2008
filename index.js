const express = require("express")
const app = express()

app.use(express.static(__dirname + "/public"))

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
})

app.get("/seuss2", (req, res) => {
  res.sendFile(__dirname + "/public/seuss2.html");
})

app.get("/seuss3", (req, res) => {
  res.sendFile(__dirname + "/public/seuss3.html");
})

app.get("/christmas", (req, res) => {
  res.sendFile(__dirname + "/public/christmas.html");
})

app.listen(3000, () => {
  console.log(`Holiday Server is Running!`)
});
