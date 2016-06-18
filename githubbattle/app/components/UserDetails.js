var React = require('react');


function UserDetails(props) {
	return (
		<div>
			<ul className="list-group">
				<li className="list-group-item">
					{props.info.login}
				</li>
				<li className="list-group-item">
					<img src={props.info.avatar_url} className="img-rounded img-responsive"/>
				</li>
				{props.info.name && <li className="list-group-item">{props.info.name}</li>}
				{props.info.blog  && <li className="list-group-item">{props.info.blog}</li>}
			</ul>	
		</div>



	);
}


module.exports = UserDetails;