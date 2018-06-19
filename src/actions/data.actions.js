//import * as Util from '../util/util';
import axios from 'axios';

export const fetchData = () => ({
	type:'FETCH_DATA',
	payload:axios.get('https://jsonplaceholder.typicode.com/albums')
});
	