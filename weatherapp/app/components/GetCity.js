var React = require('react');


var GetCity = React.createClass({
	contextTypes: {
    	router: React.PropTypes.object.isRequired
    },
    getInitialState: function () {
    	return {
    		city: ''
    	}
    },
    inputHandler: function (event) {
    	this.setState({city: event.target.value});
    },
    submitHandler: function(){
    	console.log(this.context.router);
    	this.context.router.push({
    		pathname: '/weather/' + this.state.city,
    	});

    },
	render: function () {
		return (
  			<form onSubmit={this.submitHandler}>	
				<div className="form-group">
					<input className="form-control" placeHolder='Enter city' type='text'
					value={this.state.city} onChange={this.inputHandler}/>
					<button type='submit' className="btn btn-success">Submit</button>
				</div>
			</form>
		);
	}
});

module.exports = GetCity;