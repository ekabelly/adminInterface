import { limit } from '../layout/layout.config';

const makeLastPage = length => Math.ceil(length/limit);

export default (state={page:1, last:5}, action)=>{
	if (action.type === 'CHANGE_PAGE') {
		return {...state, page:action.payload};
	}
	if (action.type === 'LAST_PAGE') {
		return {...state, last:makeLastPage(action.payload)}
	}
	return state;
}