export default (state={
		layoutLocation:'events',
		eventsLocation:{
	 		locationName:'events',
	 		item:{}
		},
		eventDetailsLocation:'eventDetails'
	}, {type, payload}) => {
	console.log(type)
	if (type === 'CHANGE_LOCATION_LAYOUT') {
		return {...state, layoutLocation:payload};
	}
	if (type === 'CHANGE_LOCATION_EVENTS') {
		return {...state,  eventsLocation:{
		 		locationName:payload.locationName,
		 		item:payload.item
		 	}
	 	}
	}
	if (type === 'CHANGE_LOCATION_EVENT_DETAILS') {
		return {...state,  eventDetailsLocation:payload}
	}
	return state;
}