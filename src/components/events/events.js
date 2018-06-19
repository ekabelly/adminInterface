import React from 'react';
import { connect } from 'react-redux';
import './events.css';
import EventsTableWrapper from '../table/eventstablewrapper';
import ItemDetailsWrapper from '../details/itemdetailswrapper';

class Events extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			location:{
				item:{},
				locationName:'events'
			}
		}
	}

	locationHandler(item, locationName){
		if (this.props.data.fetched) {
			if (this.state.location.locationName === 'events'){
				return <EventsTableWrapper changeLocation={(item, locationName)=>this.changeLocation(item, locationName)} />;
			}
			return <ItemDetailsWrapper changeLocation={(item, locationName)=>this.changeLocation(item, locationName)} data={this.state.location.item} />;
		}
		return <p> pending... </p>;
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

const mapStateToProps = store =>({
		data:store.data
	});

export default connect(mapStateToProps)(Events);