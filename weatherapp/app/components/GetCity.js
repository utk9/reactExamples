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
    	this.context.router.push({
    		pathname: '/weather',
    		query: {
    			city: this.state.city
    		}
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