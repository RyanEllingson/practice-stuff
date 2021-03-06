const express = require("express");
const path = require("path");

const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.resolve(__dirname, "client", "build")));

app.get("/api", function(req, res) {
    console.log(req.headers.authorization);
    res.json({message: "The button worked!"});
});

app.get("*", function(req, res) {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
});

app.listen(PORT, () => {
    console.log("App listening on PORT: " + PORT);
});