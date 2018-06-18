import React from 'react';
import { connect } from 'react-redux';
import './events.css';
import { limit } from '../../layout/layout.config';
import EventsTableWrapper from '../table/eventstablewrapper';
import ItemDetailsWrapper from '../details/itemdetailswrapper';
import * as Util from '../../util/util';

class Events extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			data: [],
			dispData:[],
			lastPage:5,
			location:{
				item:{},
				locationName:'events'
			}
		}
	}

	componentWillMount(){
		Util.fetchData().then(res=>
			this.setState({data:res.data, dispData:res.data, lastPage:this.makeLastPage(res.data)})).catch(e=>console.error(e));
	}

	componentDidMount(){
		this.props.subscribe(()=>this.initSearch(this.props.getState().searchTerm));
	}

	locationHandler(item, locationName){
		if (this.state.data.length >= 1) {
			if (this.state.location.locationName === 'events'){
				return <EventsTableWrapper changeLocation={(item, locationName)=>this.changeLocation(item, locationName)} data={this.state.dispData} lastPage={this.state.lastPage} />;
			}
			return <ItemDetailsWrapper changeLocation={(item, locationName)=>this.changeLocation(item, locationName)} data={this.state.location.item} />;
		}
	}

	changeLocation(item, locationName){
		this.setState({location:{item, locationName}});
	}

	initSearch(searchTerm){
		if (searchTerm === '') {
			return this.reverseData();
		}
		let dispData = [...this.state.data];
		dispData = dispData.filter(x=>x.id === Number(searchTerm) || x.userId === Number(searchTerm) || x.title.toLowerCase().indexOf(searchTerm) !== -1);
		this.setState({dispData, lastPage:this.makeLastPage(dispData)});
	}

	makeLastPage(data){
		const lastPage = Math.ceil(data.length/limit);
		if (lastPage > 5) return lastPage;
		return 5;
	}

	reverseData(){
		return this.setState({dispData:this.state.data, lastPage:Math.ceil(this.state.data.length/limit)});
	}

	render(){
		return (<div className="eventsContainer" id="appHeight"><br/>
			{this.locationHandler()}
		</div>);
	}
}

const mapStateToProps = store =>({
		searchTerm:store.search.searchTerm
	});

export default connect(mapStateToProps)(Events);