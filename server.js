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



// / --> landing page
// /tables
// /reserve
// /api/tables
// /api/waitlist
// /api/clear



app.get("/", (req, res) => {
	res.sendFile(path.join(__dirname,"index.html"));
})
