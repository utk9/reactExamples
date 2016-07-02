import React from 'react';

class BugAdd extends React.Component {
	render () {
		return (
			<div className='row col-xs-6'>
				<form>
					<div className='form-group'>
						<label htmlFor='nameInput'>Name</label>
						<input type='text' className='form-control' id='nameInput' placeholder='Name' />
					</div>
					<div className='form-group'>
						<label htmlFor='priorityInput'>Priority</label>
						<input type='number' className='form-control' id='priorityInput' placeholder='1-5' />
					</div>
					<div className='form-group'>
						<label htmlFor='titleInput'>Title</label>
						<input type='text' className='form-control' id='titleInput' placeholder='Title' />
					</div>
					<button type='submit' className='btn btn-default'>Submit</button>
				</form>
			</div>
		);
	}
}

export default BugAdd;