const express = require("express"); //Bring all the packages from the node modules
const notes = require("./data/notes");
const dotenv = require("dotenv");

const app = express(); //Object of the imported package
dotenv.config();

app.get("/", (req, res) => {
  res.send("API is running");
});

app.get("/api/notes", (req, res) => {
  res.json(notes);
});

app.get("/api/notes/:id", (req, res) => {
  const note = notes.find((n) => n._id === req.params.id); //req.params will have all the parameters that are entered in the endpoint url
  //console.log(req.params);
  res.send(note);
});

const PORT = process.env.PORT || 5000; // If the port defined in the .env file is not available the the default 5000 port will be used
app.listen(PORT, console.log(`Server running on port: ${PORT}`));
