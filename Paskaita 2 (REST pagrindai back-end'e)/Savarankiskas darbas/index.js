const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("OK");
});

app.listen(8080, () => console.log("The server is running on port 8080"));

// http://localhost:8080/
// Paleidus serveri atsakyma matysite localhost 8080 porte.
