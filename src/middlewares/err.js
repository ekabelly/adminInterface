export default store => next => action =>{
	try {
		next(action);
	} catch(e){
		console.error(e);
	}
}