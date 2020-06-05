const express = require("express");
const path = require("path");

const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("client/build"));

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "public"))
})

app.get("/api", function(req, res) {
    res.json({message: "The button worked!"});
})

app.listen(PORT, () => {
    console.log("App listening on PORT: " + PORT);
})