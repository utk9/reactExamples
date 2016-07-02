var express = require ('express');
var bodyParser = require ('body-parser');

var app = express();

app.use(bodyParser.json());


app.use(express.static('public'));


var bugsData = [
				{
					id: 1, status: "Not fixed", owner: "Beth", priority: 1, title: "Fix bug pls"
				},
				{
					id: 2, status: "Under review", owner: "Matha", priority: 3, title: "Fix bug pls"
				}
			]

app.get('/api/bugs', function (req, res) {
	res.json(bugsData);
});

app.post('/api/bugs', function (req, res) {
	bugsData.push(req.body);
	res.json(bugsData);
});

app.listen(3000, function () {
  console.log('App running on port 3000.');
});