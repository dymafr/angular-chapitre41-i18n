const express = require("express");
const path = require("path");
const app = express();
app.use(
  express.static(path.join(__dirname, "../front/dist/front"), { index: false })
);

app.use((req, res, next) => {
  if (req.url.startsWith("/en") || req.url.startsWith("/fr")) {
    next();
  } else {
    res.redirect(`/en${req.url}`);
  }
});

app.get("/*", (req, res) => {
  if (req.url.startsWith("/en")) {
    res.sendFile(path.join(__dirname, "../front/dist/front/en-US/index.html"));
  } else {
    res.sendFile(path.join(__dirname, "../front/dist/front/fr/index.html"));
  }
});
app.listen(3000);
