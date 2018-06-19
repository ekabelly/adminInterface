import { createStore, applyMiddleware } from 'redux';

import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';

import err from './middlewares/err';

import reducers from './reducers/reducers';

import { fetchData } from './actions/data.actions';



const store = createStore(reducers, applyMiddleware(promise(), thunk, createLogger(), err));

//store.subscribe(()=>console.log('store changed', store.getState()));

store.dispatch(fetchData());

export default store;