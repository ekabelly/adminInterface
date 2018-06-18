export const toggleNav = bool =>({
	type:'toggleNav',
	payload:bool
});

export const changeLocation = location => ({
	type:'changeLocation',
	payload:location
});

export const search = searchTerm =>({
	type:'search',
	payload:searchTerm
});