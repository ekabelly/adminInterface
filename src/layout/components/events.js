import React from 'react';
import '../css/events.css';
import axios from 'axios';
import Table from './table';
import Pagination from './pagination';

export default class Evens extends React.Component {
	constructor(props){
		super(props);
		this.state ={
			data: [],
			page:1
		}
	}

	componentDidMount(){
		axios.get('https://jsonplaceholder.typicode.com/albums').then(res=>
			this.setState({data:res.data})).catch(e=>console.error(e));
	}

	shouldComponentUpdate(nextProps, nextState){
		return this.state.data.length !== nextState.data.length;
	}

	dataHandler(){
		if (this.state.data.length >=1) {
			return <Table data={this.state.data} />;
		}
		return null;
	}

	render(){
		return (<div className="eventsContainer" id="appHeight"><br/>
		<div className="container-fluid tableContainer">
			<div className="col-md-12 col-sm-12 col-xs-12 container-fluid padding">
					{this.dataHandler()}
			</div>
			<div className="col-md-12 col-sm-12 col-xs-12 container-fluid padding">
					<Pagination  />
			</div>
		</div>
		</div>);
	}
}