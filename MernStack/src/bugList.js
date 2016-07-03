import React from 'react';

import BugAdd from './bugAdd';
import BugFilter from './bugFilter';
import BugTable from './bugTable';

class BugList extends React.Component {

	constructor (props) {
		super (props);
		this.state = {
			isLoading: true,
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
		this.fetchData = this.fetchData.bind(this);
		this.filterBugs = this.filterBugs.bind(this);
	}

	componentDidMount () {
		this.fetchData();
	}

	fetchData (filter) {
		var url = 'api/bugs';
		if (filter) {
			url+= '?status=' + filter.status + '&priority=' + filter.priority;
		}
		var xmlhttp = new XMLHttpRequest();
		var that = this;
		xmlhttp.onreadystatechange = function () {
			if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
				that.setState({
					bugsData: JSON.parse(xmlhttp.responseText),
					isLoading: false
				});
			}
		}
		xmlhttp.open("GET", url, true);
		xmlhttp.send();
	}

	filterBugs (filter) {
		console.log(filter);
		this.fetchData(filter);
	}

	addBug (name, priority, title) {
		var bugs = this.state.bugsData;
		var id = bugs.length + 1;
		var newBug = {
			"id": id,
			"status": "Not fixed",
			"priority": Number(priority),
			"owner": name,
			"title": title
		}
		bugs.push (newBug);

		var xmlhttp = new XMLHttpRequest ();
		xmlhttp.onreadystatechange = function () {
			if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
				that.setState({
					bugsData: JSON.parse(xmlhttp.responseText)
				});
			}
		}
		xmlhttp.open('POST', 'api/bugs', true);
		xmlhttp.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
		xmlhttp.send(JSON.stringify(newBug));

		this.setState({bugsData: bugs});
	}

	render () {
		if (this.state.isLoading) {
			return (
				<div className='container'>
					Loading...
				</div>

			);
		} else {
			return (
				<div className='container'> 
					<h1>BugList Component</h1>
					<BugFilter filterBugs={this.filterBugs}/>
					<BugTable bugs={this.state.bugsData}/>
					<BugAdd addBug={this.addBug}/>
				</div>
			);
		}
		
	}

}

export default BugList;