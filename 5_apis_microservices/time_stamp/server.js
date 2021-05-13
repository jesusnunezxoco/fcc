// server.js
// where your node app starts

// init project
var express = require("express");
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
var cors = require("cors");
app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

// your first API endpoint...
app.get("/api/timestamp/:time", function (req, res) {
  let { paramTime } = req.params;
  let time;
  if (!paramTime) time = new Date();

  let isUtc = [...time].includes("-");
  let utc = isUtc ? time : new Date(time * 1000).toUTCString("en-US");
  let unix = !isUtc ? time : Date.parse(time);
  res.json({ utc, unix });
});

let port = process.env.PORT || 3000;
// listen for requests :)
var listener = app.listen(port, function () {
  console.log("Your app is listening on port " + listener.address().port);
});
