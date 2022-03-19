const express = require("express");

const server = express();

server.use("/about", (request, response) => {
  response.send("This is the about class");
});

server.use("/", (request, response) => {
  response.send("<h1>Welcome to the home page for love</h1>");
});

server.listen(9000, () => {
  console.log("Server is running on port 9000");
});