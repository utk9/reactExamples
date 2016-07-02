import React from 'react';
import BugRow from './bugRow';


class BugTable extends React.Component {
	render () {
		return (
			<div>
				<table className='table'>
					<thead>
						<tr>
							<td>Id</td>
							<td>Status</td>
							<td>Priority</td>
							<td>Owner</td>
							<td>Title</td>
						</tr>
						
					</thead>
					<tbody>
						{this.props.bugs.map(function(bug){
							return <BugRow key={bug.id} id={bug.id} status={bug.status} 
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