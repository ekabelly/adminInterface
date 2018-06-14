export default (initState, action) =>{
	const state = {...initState};
	if (action.type === 'showNav') {
		 state.showNav = action.payload;
	}
	return state;
}