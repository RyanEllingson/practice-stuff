const express = require("express");

const app = express();

const PORT = process.env.PORT || 3001;

app.set("port", PORT);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("client/build"));

app.get("/api", function(req, res) {
    res.json({message: "The button worked!"});
})

app.listen(app.get("port"), () => {
    console.log("App listening on PORT: " + PORT);
})