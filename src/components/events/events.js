import React from 'react';
import { connect } from 'react-redux';
import './events.css';
import EventsTableWrapper from '../table/eventstablewrapper';
import ItemDetailsWrapper from '../details/itemdetailswrapper';

class Events extends React.Component {

	locationHandler(){
		if (this.props.data.fetched) {
			if (this.props.location.locationName === 'events'){
				return <EventsTableWrapper />;
			}
			return <ItemDetailsWrapper />;
		}
		return <p> pending... </p>;
	}

	render(){
		return (<div className="eventsContainer" id="appHeight"><br/>
			{this.locationHandler()}
		</div>);
	}
}

const mapStateToProps = state =>({
		data:state.data,
		location:state.location.eventsLocation
	});

export default connect(mapStateToProps)(Events);