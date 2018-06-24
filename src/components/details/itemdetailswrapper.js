import React, {Component} from 'react';
import { connect } from 'react-redux';
import EventDetails from './components/eventdetails';
import EventVolunteers from './components/eventvolunteers';
import { changeLocation } from '../../actions/app.actions';

class ItemDetailsWrapper extends Component {

	changeComponentLocation(location){
		this.props.dispatch(changeLocation(location, '_EVENT_DETAILS'))
	}

	location(){
		if (this.props.location === 'eventDetails') {
			return <EventDetails data={this.props.data} />;
		}
		return <EventVolunteers data={this.props.data} />;
	}

	tabHandler(tab){
		return this.props.location === tab ? 'activeTab' : '';
	}

	warapperLocation(){
		this.props.dispatch(changeLocation({locationName:'events', item:{}}, '_EVENTS'));
	}

	render(){
		return (<div className="container-fluid padding">
				<div className="col-md-1"></div>
				<div className="col-md-10 container-fluid">
					<div className="row">
						<div className="col-md-1 col-xs-12">
							<button onClick={()=>this.warapperLocation()} type="button" className="btn btn-default btn-md hidden-md hidden-lg visible-sm visible-xs center-block"> חזרה לאירועים 
								<span className="glyphicon glyphicon-triangle-right"></span>
							</button>
						</div>
						<div className="col-md-10 col-xs-12 container-fluid padding">
							<div onClick={()=>this.changeComponentLocation('volunteers')} className={"pointer hoverBlack col-md-6 col-sm-6 col-xs-6 tab "+this.tabHandler('volunteers')}>מתנדבים</div>
							<div onClick={()=>this.changeComponentLocation('eventDetails')} className={"pointer hoverBlack col-md-6 col-sm-6 col-xs-6 tab "+this.tabHandler('eventDetails')}>פרטי אירוע</div>
							<div className="col-md-12 item DetailsWrapper">
								{this.location()}
							</div>
						</div>
						<div className="col-md-1">
							<div>
								<button onClick={()=>this.warapperLocation()} type="button" className="btn btn-default btn-md hidden-xs"> חזרה לאירועים 
									<span className="glyphicon glyphicon-triangle-right"></span>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>);
	}
}

const mapStateToProps = state =>({
	data:state.location.eventsLocation.item,
	location:state.location.eventDetailsLocation
});

export default connect(mapStateToProps)(ItemDetailsWrapper);