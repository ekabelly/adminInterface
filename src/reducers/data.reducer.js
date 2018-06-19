export default (state={fetched:false, res:[], error:null}, action) =>{
	const cases = {
		FETCH_DATA_PENDIG:{...state},
		FETCH_DATA_REJECTED: {...state, error:action.payload},
		FETCH_DATA_FULFILLED:{...state, fetched:true, res:action.payload}
	}
	return cases[action.type] ? cases[action.type] : state;
}