const express = require("express");
const app = express();
const path = require("path");
app.set("view engine", "html");
app.use(express.static(path.join(__dirname)));
app.get("/", (req, res) => {
  res.render("./index.html");
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, console.log(`Server started on port ${PORT}`));
