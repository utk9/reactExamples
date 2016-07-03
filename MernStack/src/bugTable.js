import React from 'react';
import BugRow from './bugRow';


class BugTable extends React.Component {
	render () {
		return (
			<div>
				<table className='table'>
					<thead>
						<tr>
							<th>Id</th>
							<th>Status</th>
							<th>Priority</th>
							<th>Owner</th>
							<th>Title</th>
						</tr>
						
					</thead>
					<tbody>
						{this.props.bugs.map(function(bug){
							return <BugRow key={bug._id} id={bug._id} status={bug.status} 
									priority={bug.priority} owner={bug.owner} title={bug.title} />;
						})}
					</tbody>
				</table>
				
			</div>
		);
	}
}

BugTable.propTypes = {
	bugs: React.PropTypes.array
}

export default BugTable;