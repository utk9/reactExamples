import React from 'react';

class BugAdd extends React.Component {

	constructor (props) {
		super(props);
		this.state = {
			name: '',
			title: '',
			priority: ''
		}
	}

	handleInput (field, evt) {
		var newPartialState = {};
		newPartialState[field] = evt.target.value;
		this.setState(newPartialState);
	}

	handleSubmit (evt) {
		evt.preventDefault();
		this.props.addBug(this.state.name, this.state.priority, this.state.title);
		this.setState ({
			name: '',
			title: '',
			priority: ''
		});
	}

	render () {
		return (
			<div className='row col-xs-6'>
				<form onSubmit={this.handleSubmit.bind(this)}>
					<div className='form-group'>
						<label htmlFor='nameInput'>Name</label>
						<input type='text' className='form-control' id='nameInput' placeholder='Name' 
						value={this.state.name} onChange={this.handleInput.bind(this, 'name')}/>
					</div>
					<div className='form-group'>
						<label htmlFor='priorityInput'>Priority</label>
						<input type='number' className='form-control' id='priorityInput' placeholder='1-5' 
						value={this.state.priority} onChange={this.handleInput.bind(this, 'priority')}/>
					</div>
					<div className='form-group'>
						<label htmlFor='titleInput'>Title</label>
						<input type='text' className='form-control' id='titleInput' placeholder='Title' 
						value={this.state.title} onChange={this.handleInput.bind(this, 'title')}/>
					</div>
					<button type='submit' className='btn btn-default'>Submit</button>
				</form>
			</div>
		);
	}
}

BugAdd.propTypes = {
	addBug: React.PropTypes.func
};

export default BugAdd;