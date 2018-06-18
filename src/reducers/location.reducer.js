export default (initState={location:'events'}, action) =>{
	const state = {...initState};
	if (action.type === 'changeLocation') {
		return {...state, location:action.payload};
	}
	return state;
}