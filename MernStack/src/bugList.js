import React from 'react';

import BugAdd from './bugAdd';
import BugFilter from './bugFilter';
import BugTable from './bugTable';

class BugList extends React.Component {
	constructor (props) {
		super (props);
		this.state = {
			bugsData: [
				{
					id: 1, status: "Not fixed", owner: "Beth", priority: 1, title: "Fix bug pls"
				},
				{
					id: 2, status: "Under review", owner: "Matha", priority: 3, title: "Fix bug pls"
				}
			]
		}
	}

	render () {
		return (
			<div className='container'> 
				<h1>BugList Component</h1>
				<BugFilter />
				<BugTable bugs={this.state.bugsData}/>
				<BugAdd />
			</div>

		);
	}

}

export default BugList;