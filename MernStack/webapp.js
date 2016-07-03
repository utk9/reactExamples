var express = require ('express');
var bodyParser = require ('body-parser');
var mongoose = require ('mongoose');

var app = express();

app.use(bodyParser.json());


app.use(express.static('public'));

mongoose.connect('mongodb://localhost/BugsDB');
var db = mongoose.connection;
db.on('error', function () {
	console.log("Error connection to db");
});
db.on('open', function () {
	console.log("Connected to db");
});

var bugSchema = mongoose.Schema({
	status: String,
	owner: String,
	priority: Number,
	title: String
});

var Bug = mongoose.model('Bug', bugSchema);

app.get('/api/bugs', function (req, res) {
	Bug.find(function (err, bugs) {
		if (err) {
			res.status(500).send({error: 'Could not fetch from database'});
		} else {
			console.log(bugs)
			res.json(bugs);
		}
	});
});

app.post('/api/bugs', function (req, res) {
	var newBug = new Bug(req.body);
	newBug.save(function (err) {
		if (err) {
			console.log(err);
			res.status(500).send({error: 'Could not save to databse'});
		} else {
			Bug.find(function (err, bugs) {
				if (err) {
					res.status(500).send({error: 'Could not fetch from database'});
				} else {
					res.json(bugs);
				}
			});
		}
	});
});

app.listen(3000, function () {
	console.log('App running on port 3000.');
});