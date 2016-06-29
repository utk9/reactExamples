var React = require('react');
var UserDetails = require('./UserDetails')
var Link = require('react-router').Link;

function puke (obj) {
	return <pre>{JSON.stringify(obj, null, ' ')}</pre>
}

function ConfirmBattle(props) {
	return props.isLoading === true
	? <p>LOADING</p>
	: <div className="jumbotron">
		<div className="container">
			<div className="row">
				<div className="col-sm-6">
					<UserDetails info={props.playersInfo[0]} />
				</div>
				<div className="col-sm-6">
					<UserDetails info={props.playersInfo[1]} />
					
				</div>
			</div>
		</div>
		<div className="text-center">
			<button type="button" className="btn btn-primary btn-lg" onClick={props.handleInitiateBattle}>
				Battle!
			</button>
			<Link to="/playerOne">
				<button type="button" className="btn btn-default btn-lg">Reselect players</button>
			</Link>
		</div>
	</div>
}


ConfirmBattle.propTypes = {
	isLoading: React.PropTypes.bool.isRequired,
	playersInfo: React.PropTypes.array.isRequired
};

module.exports = ConfirmBattle;
