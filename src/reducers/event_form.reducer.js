export default (state={update:false, form_pic:''}, action) => {
	const { type, payload } = action;
	if (type === 'CREATE_NEW_EVENT') {
		return {...state, update:payload}
	}
	if (type === 'CHANGE_PIC') {
		return {...state, form_pic:payload}
	}
	if (type === 'CHANGE_LOCATION_EVENTS') {
		return {...state, update:true}
	}
	return state;
}