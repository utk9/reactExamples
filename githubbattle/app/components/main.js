var React = require('React');

var Main = React.createClass({
	render: function(){
		return(
			<div>
				Hello from Main!
				{this.props.children}
			</div>
		);
	}
});

module.exports = Main;