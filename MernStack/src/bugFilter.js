import React from 'react';


class BugFilter extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			status: '',
			priority: ''
		}
		this.changeStatus = this.changeStatus.bind(this);
		this.changePriority = this.changePriority.bind(this);
		this.handleSubmitFilter = this.handleSubmitFilter.bind(this);
	}
	handleSubmitFilter () {
		this.props.filterBugs(this.state);
	}
	changeStatus (evt) {
		this.setState({status: evt.target.value});
	}
	changePriority (evt) {
		this.setState({priority: evt.target.value});
	}
	render () {
		return (
			<div>
				<h5>Filter:</h5>
				<div className='form-group'>
					<label htmlFor='status-options'>Status:</label>
					<select className='form-control' id='status-options' onChange={this.changeStatus}>
						<option value="">(Any)</option>
					 	<option value="Open">Open</option>
					  	<option value="Fixed">Fixed</option>
					</select>
				</div>

				<div className='form-group'>
					<label htmlFor='priority-options'>Priority:</label>
					<select className='form-control' id='priority-options' onChange={this.changePriority}>
						<option value="">(Any)</option>
					 	<option value={1}>1</option>
				  		<option value={2}>2</option>
					</select>
				</div>
				<button type='button' className='btn btn-default' onClick={this.handleSubmitFilter}>Filter</button>
			</div>
			);
	}
}

export default BugFilter;