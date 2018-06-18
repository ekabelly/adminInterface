export default (state={showNav:true}, action) =>{
	if (action.type === 'toggleNav') {
		return {...state, showNav:action.payload};
	}
	return state;
}