// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var fs = require("fs");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

var waitingList = [];

var currentTables = [{
  "customerName": "",
  "phoneNumber": "",
  "customerEmail": "",
  "customerID": "<iframe src=\"https://giphy.com/embed/13HgwGsXF0aiGY\" width=\"480\" height=\"270\" frameBorder=\"0\" class=\"giphy-embed\" allowFullScreen></iframe><p><a href=\"https://giphy.com/gifs/13HgwGsXF0aiGY\"></a></p>"
  },
  {
  "customerName": "",
  "phoneNumber": "",
  "customerEmail": "",
  "customerID": "<iframe src=\"https://giphy.com/embed/yYSSBtDgbbRzq\" width=\"480\" height=\"360\" frameBorder=\"0\" class=\"giphy-embed\" allowFullScreen></iframe><p><a href=\"https://giphy.com/gifs/frustrated-annoyed-programming-yYSSBtDgbbRzq\"></a></p>"
  },
  {
  "customerName": "",
  "phoneNumber": "",
  "customerEmail": "",
  "customerID": "<iframe src=\"https://giphy.com/embed/zOvBKUUEERdNm\" width=\"480\" height=\"270\" frameBorder=\"0\" class=\"giphy-embed\" allowFullScreen></iframe><p><a href=\"https://giphy.com/gifs/coding-zOvBKUUEERdNm\"></a></p>"
  },
  {
  "customerName": "",
  "phoneNumber": "",
  "customerEmail": "",
  "customerID": "Us right now, lolz"
  }
];

// / --> landing page
// /tables
// /reserve
// /api/tables
// /api/waitlist
// /api/clear



app.get("/", (req, res) => {
	res.sendFile(path.join(__dirname,"index.html"));
});
app.get("/reservation", (req, res) => {
	res.sendFile(path.join(__dirname,"reservation.html"));
});

app.get("/api/tables", (req, res) => {
    res.send(currentTables);
});

app.get("/api/waitlist", (req, res) => {
    res.send(waitingList);
});

app.get("/api/clear", (req, res) => {
    waitingList = [];
    currentTables = [];
    res.send("Database cleared!")
});

app.post("/api/tables", (req, res) => {
  var data = req.body;

  if(currentList.length >= 5){
    //push data to wishList
    waitingList.push(data);
  } else {
    //push to currentList
    currentList.push(data);
  }

});


app.listen(PORT, function(){
  console.log("RUnning on port " + PORT);
});
