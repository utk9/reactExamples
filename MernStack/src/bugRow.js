import React from 'react';

class BugRow extends React.Component {
	render () {
		return (
			
				<tr>
					<td>{this.props.id}</td>
					<td>{this.props.status}</td>
					<td>{this.props.priority}</td>
					<td>{this.props.owner}</td>
					<td>{this.props.title}</td>
				</tr>

			
		);
	}
}

BugRow.propTypes = {
	id: React.PropTypes.number,
	status: React.PropTypes.string,
	priority: React.PropTypes.number,
	owner: React.PropTypes.string,
	title: React.PropTypes.string
};

export default BugRow;