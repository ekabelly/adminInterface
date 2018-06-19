export const toggleNav = bool =>({
	type:'toggleNav',
	payload:bool
});

export const changeLocation = (location, container) => ({
	type:'CHANGE_LOCATION'+container,
	payload:location
});

export const search = searchTerm =>({
	type:'search',
	payload:searchTerm
});

export const changePage = page => ({
	type:'CHANGE_PAGE',
	payload:page
});

export const lastPage = length =>({
	type:'LAST_PAGE',
	payload:length
})