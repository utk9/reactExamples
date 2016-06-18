var React = require('react');
var GetCity = require('./GetCity');

var Main = React.createClass({
	render: function(){
		return (
			<div className = 'main-container'>
				<nav className="navbar navbar-default">
  					<div className="container-fluid">
  						<div className="navbar-right">
  							<GetCity />
  						</div>
  					</div>

  				</nav>
				{this.props.children}
			</div>
		);
	}
});

module.exports = Main;