export default (state={location:'events'}, action) =>{
	if (action.type === 'changeLocation') {
		return {...state, location:action.payload};
	}
	return state;
}