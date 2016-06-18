var React = require('react');

function Results (props) {
	return (
		<div className="container text-center">
			<div className="col-sm-6">
<h4 className="lead">Player 1</h4>
			<h3 className="lead">{props.playersInfo[0].login}: {props.scores[0]}</h3>
			</div>

			<div className="col-sm-6">
<h4 className="lead">Player 2</h4>
			<h3 className="lead">{props.playersInfo[1].login}: {props.scores[1]}</h3>
			</div>
			
			
		</div>
	);
}

module.exports = Results;