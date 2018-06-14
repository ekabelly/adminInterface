import { combineReducers, createStore } from 'redux';
import locationReducer from './reducers/locationreducer';
import navReducer from './reducers/nav.reducer';;

const reducers = combineReducers({
	location:locationReducer,
	nav:navReducer
});

const store = createStore(reducers, {
	location:{
		location:'events'
	},
	nav:{
		showNav:true
	}
});

store.subscribe(()=>console.log('store changed', store.getState()));

export default store;