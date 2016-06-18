var React = require('react');
var Results = require('../components/Results')

var ResultsContainer = React.createClass({
	getInitialState: function () {
		return {
			scores: []
		}
		
	},
	componentWillMount: function () {
		
		var battleScores = [];
		var player1 = this.props.location.state.playersInfo[0];
		battleScores[0] = player1.followers + player1.public_repos + player1.following;

		var player2 = this.props.location.state.playersInfo[1];
		battleScores[1] = player2.followers + player2.public_repos + player2.following;

		this.setState({scores: battleScores});

		console.log(battleScores);
		
	},

	render: function () {
		return (
			<Results scores={this.state.scores} playersInfo={this.props.location.state.playersInfo} />
		)
	}
});

module.exports = ResultsContainer;