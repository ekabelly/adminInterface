import { combineReducers } from 'redux';

import locationReducer from './location.reducer';
import navReducer from './nav.reducer';
import searchRducer from './search.reducer';
import dataReducer from './data.reducer';
import pageReducer from './page.reducer';
import event_form from './event_form.reducer';

export default combineReducers({
	location:locationReducer,
	nav:navReducer,
	search:searchRducer,
	data:dataReducer,
	page:pageReducer,
	event_form:event_form
});
