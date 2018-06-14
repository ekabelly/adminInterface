export default (initState, action) =>{
	const state = {...initState};
	if (action.type === 'changeLocation') {
		 state.location = action.payload;
	}
	return state;
}