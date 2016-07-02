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
		this.addBug = this.addBug.bind(this);
	}

	addBug (name, priority, title) {
		var bugs = this.state.bugsData;
		var id = bugs.length + 1;
		bugs.push ({
			"id": id,
			"status": "Not fixed",
			"priority": Number(priority),
			"owner": name,
			"title": title
		});
		this.setState({bugsData: bugs});
	}

	render () {
		return (
			<div className='container'> 
				<h1>BugList Component</h1>
				<BugFilter />
				<BugTable bugs={this.state.bugsData}/>
				<BugAdd addBug={this.addBug}/>
			</div>

		);
	}

}

export default BugList;