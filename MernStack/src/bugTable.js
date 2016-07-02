import React from 'react';
import BugRow from './bugRow';


class BugTable extends React.Component {
	render () {
		return (
			<div>
				<table className='table'>
					<thead>
						
							<th>Id</th>
							<th>Status</th>
							<th>Priority</th>
							<th>Owner</th>
							<th>Title</th>
						
					</thead>
					<tbody>
						<BugRow id={1} status="Not Fixed" priority={2} owner="Jerry" title="fix my bug plz" /> 
						<BugRow id={2} status="Under review" priority={1} owner="Beth" title="bug encountered" /> 
					</tbody>
				</table>
				
			</div>
		);
	}
}

export default BugTable;