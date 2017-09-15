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

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

var waitingList = [];

var currentTables = [{
  "customerName": "Luis",
  "phoneNumber": "",
  "customerEmail": "",
  "customerID": "<iframe src=\"https://giphy.com/embed/13HgwGsXF0aiGY\" width=\"480\" height=\"270\" frameBorder=\"0\" class=\"giphy-embed\" allowFullScreen></iframe><p><a href=\"https://giphy.com/gifs/13HgwGsXF0aiGY\"></a></p>"
  },
  {
  "customerName": "Miguel",
  "phoneNumber": "",
  "customerEmail": "",
  "customerID": "<iframe src=\"https://giphy.com/embed/yYSSBtDgbbRzq\" width=\"480\" height=\"360\" frameBorder=\"0\" class=\"giphy-embed\" allowFullScreen></iframe><p><a href=\"https://giphy.com/gifs/frustrated-annoyed-programming-yYSSBtDgbbRzq\"></a></p>"
  },
  {
  "customerName": "Rodriguez",
  "phoneNumber": "",
  "customerEmail": "",
  "customerID": "<iframe src=\"https://giphy.com/embed/zOvBKUUEERdNm\" width=\"480\" height=\"270\" frameBorder=\"0\" class=\"giphy-embed\" allowFullScreen></iframe><p><a href=\"https://giphy.com/gifs/coding-zOvBKUUEERdNm\"></a></p>"
  },
  {
  "customerName": "mikie",
  "phoneNumber": "",
  "customerEmail": "",
  "customerID": "Us right now, lolz"
  }
];

var pageCount = 0;

// / --> landing page
// /tables
// /reserve
// /api/tables
// /api/waitlist
// /api/clear

//Serving main index.html file
app.get('/pageCount', function(req,res){
  res.send(pageCount);
});

app.get("/", (req, res) => {
	res.sendFile(path.join(__dirname,"index.html"));
  pageCount++;

});

//Serving reservation.html
app.get("/reservation", (req, res) => {
	res.sendFile(path.join(__dirname,"reservation.html"));
  pageCount++;
});

// returns array of current tables
app.get("/api/tables", (req, res) => {
    res.send(currentTables);
    pageCount++;
});
app.get('/table', function(req,res){
  res.sendFile(path.join(__dirname, "table.html"));
  pageCount++;
});

//return array of the waiting list
app.get("/api/waitlist", (req, res) => {
    res.send(waitingList);
  pageCount++;
});

//clears both arrays
app.get("/api/clear", (req, res) => {
    waitingList = [];
    currentTables = [];
    res.send("Database cleared!")
});

//post data to database
app.post("/api/tables", (req, res) => {
  var data = req.body;

  if(currentTables.length >= 5){
    //push data to wishList
      waitingList.push(data);
    var tableNum = waitingList.length;

    res.send("Sorry You are on the waiting List your are number " + (tableNum));

  } else {

    currentTables.push(data);

    res.send("Thank you for making a reservation");

  }

});

app.post("/api/waitinglist", function(req, res){
  currentTables.push(req.body);
  console.log(currentTables);
});
app.post("/removeReservation", function(req, res){

  var userIndex = req.body.id;

  //remove item from array using index provided
  currentTables.slice(userIndex, 1);

  if(waitingList.length > 0){
    currentTables.push(waitingList[0]);
    waitingList.slice(0,1);
  }

});

app.listen(PORT, function(){
  console.log("RUnning on port " + PORT);
});
