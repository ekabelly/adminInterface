import { combineReducers } from 'redux';

import locationReducer from './location.reducer';
import navReducer from './nav.reducer';
import searchRducer from './search.reducer';

export default combineReducers({
	location:locationReducer,
	nav:navReducer,
	search:searchRducer
});
