import React, {Component} from 'react';
import EventDetails from './components/eventdetails';
import EventVolunteers from './components/eventvolunteers';

export default class ItemDetailsWrapper extends Component {
	constructor(props){
		super(props);
		this.state = {
			location:'eventDetails'
		}
	}

	changeLocation(locationName){
		this.setState({location:locationName});
	}

	location(){
		if (this.state.location === 'eventDetails') {
			return <EventDetails data={this.props.data} />;
		}
		return <EventVolunteers data={this.props.data} />;
	}

	tabHandler(tab){
		if (this.state.location === tab) {
			return 'activeTab';
		}
		return '';
	}

	render(){
		return (<div className="container-fluid padding">
				<div className="col-md-1"></div>
				<div className="col-md-10 container-fluid">
					<div className="row">
						<div className="col-md-1 col-xs-12">
							<div>
								<button onClick={()=>this.props.changeLocation({}, 'events')} type="button" className="btn btn-default btn-md hideOnMd"> חזרה לאירועים 
									<span className="glyphicon glyphicon-triangle-right"></span>
								</button>
							</div>
						</div>
						<div className="col-md-10 container-fluid padding">
							<div onClick={()=>this.changeLocation('volunteers')} className={"pointer hoverBlack col-md-6 col-sm-6 col-xs-6 tab "+this.tabHandler('volunteers')}>מתנדבים</div>
							<div onClick={()=>this.changeLocation('eventDetails')} className={"pointer hoverBlack col-md-6 col-sm-6 col-xs-6 tab "+this.tabHandler('eventDetails')}>פרטי אירוע</div>
							<div className="col-md-12 item DetailsWrapper">
								{this.location()}
							</div>
						</div>
						<div className="col-md-1">
							<div>
								<button onClick={()=>this.props.changeLocation({}, 'events')} type="button" className="btn btn-default btn-md hideOnXs"> חזרה לאירועים 
									<span className="glyphicon glyphicon-triangle-right"></span>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>);
	}
}