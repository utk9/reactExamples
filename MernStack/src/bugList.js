import React from 'react';

import BugAdd from './bugAdd';
import BugFilter from './bugFilter';
import BugTable from './bugTable';

class BugList extends React.Component {
	render () {
		return (
			<div> 
				<h1>BugList Component</h1>
				<BugFilter />
				<BugTable />
				<BugAdd />
			</div>

		);
	}

}

export default BugList;