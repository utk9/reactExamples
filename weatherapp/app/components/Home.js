var React = require('react');
var GetCity = require('./GetCity');

var Home = React.createClass({
	getInitialState: function() {
		return {
			city: ""
		}
	},
	handleInput: function (event) {
		this.setState({city: event.target.value});
	},
	handleSubmit: function() {

	},
	render: function () {
		return (
			<div className="container text-center">
				<h2>Weather</h2>
				<p className='lead'>Enter city: </p>

				<div className="col-sm-offset-3 col-sm-6">
					<GetCity />
				</div>
			</div>
		);
		
	}
});

module.exports = Home;