import React from 'react';
import '../css/events.css';
import Table from './table';

export default class Evens extends React.Component {
	render(){
		return (<div className="eventsContainer"><br/>
		<div className="container-fluid tableContainer">
			<div className="col-md-12 col-sm-12 col-xs-12 container-fluid padding">
				<Table />
			</div>
		</div>
		</div>);
	}
}