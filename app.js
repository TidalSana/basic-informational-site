const express = require("express");
const app = express();

app.listen(3000);

app.get("/", (req, res) => {
  res.sendFile("./views/index.html", { root: __dirname });
});
app.get("/about", (req, res) => {
  res.sendFile("./views/about.html", { root: __dirname });
});
// redirects
app.get("/about-me", (req, res) => {
  res.redirect("./about");
});
app.get("/contact", (req, res) => {
  res.sendFile("./views/contact.html", { root: __dirname });
});

// errors - go at the very bottom**
app.use((req, res) => {
  res.sendFile("./views/error.html", { root: __dirname });
});
