const path = require("path");
const express = require("express");
const app = express();

const APP_PORT = 8081;

app.use(express.static("dist"));

app.use(
  "/.well-known/pki-validation",
  express.static(path.join(__dirname, "config"))
);

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

app.listen(APP_PORT, () => {
  console.log(`APP STARTS ON PORT ${APP_PORT}`);
});
