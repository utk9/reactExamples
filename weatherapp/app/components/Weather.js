var React = require('react');
var axios = require('axios');

var APIKey = 'a8ad4561e613822af1aa84c4d568b238';
var currentWeatherUrl = 'http://api.openweathermap.org/data/2.5/forecast/city?q=toronto&APPID=' + APIKey;

var Weather = React.createClass({

	getInitialState: function() {
		return {
			 city: "",
			 weather: []
		}
	},

	componentDidMount: function(){
		console.log(currentWeatherUrl);
		var that = this;
		axios.get(currentWeatherUrl)
		.then(function(response){
			var weatherArr = [];
			console.log(response);
			weatherArr.push(response.data.list[0].main.temp);
			weatherArr.push(response.data.list[0].weather[0].description);
			that.setState({weather: weatherArr});
		})
		.catch(function(response){
			console.log(response);
		});
	},
	render: function (){
		return (
			
			<div>
				<ul className="list-group">
					{this.state.weather.map(function (item){
						return <li key={item} className="list-group-item">{item}</li>;
					})}
				</ul>
			</div>
		);
	}
});

module.exports = Weather;