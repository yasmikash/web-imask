const path = require("path");
const express = require("express");
const app = express();

const APP_PORT = 80;

app.use(express.static("dist"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

app.listen(APP_PORT, () => {
  console.log(`APP STARTS ON PORT ${APP_PORT}`);
});
