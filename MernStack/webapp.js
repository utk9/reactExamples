var express = require ('express');

var app = express();


app.use(express.static('public'));

app.get('/test', function (req, res) {
	res.send("Test route");
});

app.listen(3000, function () {
  console.log('App running on port 3000.');
});