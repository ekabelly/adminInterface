import React from 'react';
import '../css/events.css';
import axios from 'axios';
import {limit} from '../layout.config';
import EventsTableWrapper from './eventstablewrapper';
import ItemDetailsWrapper from './itemdetailswrapper';

export default class Evens extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			data: [],
			lastPage:1,
			location:{
				item:{},
				locationName:'events'
			}
		}
	}

	componentDidMount(){
		axios.get('https://jsonplaceholder.typicode.com/albums').then(res=>
			this.setState({data:res.data, lastPage:Math.ceil(res.data.length/limit)})).catch(e=>console.error(e));
	}

	eventsTableWrapper(){
		if (this.state.data.length >= 1) {
			return <EventsTableWrapper changeLocation={(item, locationName)=>this.changeLocation(item, locationName)} data={this.state.data} lastPage={this.state.lastPage} />;
		}
		return null;
	}

	locationHandler(item, locationName){
		if (this.state.location.locationName === 'events'){
			return this.eventsTableWrapper();
		}
		return <ItemDetailsWrapper changeLocation={(item, locationName)=>this.changeLocation(item, locationName)} x={this.state.location.item} />;
	}

	changeLocation(item, locationName){
		this.setState({location:{item, locationName}});
	}

	render(){
		return (<div className="eventsContainer" id="appHeight"><br/>
			{this.locationHandler()}
		</div>);
	}
}