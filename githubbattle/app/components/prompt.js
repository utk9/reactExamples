var React = require('react');
var transparentBg = require('../styles').transparentBg;


function Prompt(props){
	return (
			<div className= "jumbotron col-sm-6 col-sm-offset-3 text-center" style={transparentBg}>
			<h1>{props.header}</h1>
			<div className="col-sm-12">
				<form onSubmit={props.onSubmitA}>	
					<div className="form-group">
						<input onChange={props.inputHandler} value={props.username} 
						className="form-control" placeHolder="Github username" type="text" />

					</div>
					<button type='submit' className="btn btn-success">Continue</button>
				</form>
			</div>
		</div>

		)

}

Prompt.propTypes = {
		header: React.PropTypes.string.isRequired,
		username: React.PropTypes.string.isRequired,
		inputHandler: React.PropTypes.func.isRequired,
		onSubmitA: React.PropTypes.func.isRequired
	}

module.exports = Prompt;

