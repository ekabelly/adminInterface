export default (state={searchTerm:''}, action) =>{
	if (action.type === 'search') {
		return {...state, searchTerm:action.payload};
	}
	return state;
}