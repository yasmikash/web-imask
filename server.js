const path = require("path");
const https = require("https");
const fs = require("fs");
const express = require("express");
const app = express();

const privateKey = fs.readFileSync("private.key");
const certificate = fs.readFileSync("certificate.crt");

const APP_PORT = 80;

app.use(express.static("dist"));

app.use(
  "/.well-known/pki-validation",
  express.static(path.join(__dirname, "config"))
);

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

// app.listen(APP_PORT, () => {
//   console.log(`APP STARTS ON PORT ${APP_PORT}`);
// });

https
  .createServer({ key: privateKey, cert: certificate }, app)
  .listen(APP_PORT);
