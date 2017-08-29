// required modules
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// sets up express app
var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

var rezzies = [];

var waiting = [];


app.get("/", function(req, res) {

	res.sendFile(path.join(__dirname, "index.html"));

});

app.get("/reserve", function(req, res) {

	res.sendFile(path.join(__dirname, "reserve.html"));

});

app.get("/tables", function(req, res) {

	res.sendFile(path.join(__dirname, "tables.html"));

});

app.get("/api/tables", function(req, res) {

	res.json(rezzies);

});

app.get("/api/waitlist", function(req, res) {

	res.json(waiting);

});

app.post("/api/new", function(req, res) {
	var newcustie = req.body;

	console.log(newcustie);

	if (rezzies.length === 5) {

		waiting.push(newcustie);
		console.log(waiting);

	}

	else {

		rezzies.push(newcustie);
		console.log(rezzies);

	}

});

app.listen(PORT, function() {

	console.log("App listening on PORT" + PORT);

});