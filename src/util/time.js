export const time = type =>{
	let time = [];
	if (type === 'mins') {
		for (let i = 0; i < 60; i++) {
			if (i < 10) {
				time.push('0'+i);
			}else{time.push(i)}
		}
	}
	if (type === 'hours') {
		for (let i = 0; i < 24; i++) {
			if (i < 10) {
				time.push('0'+i);
			}else{time.push(i)}
		}
	}
	return time;
}

export const date = () =>{
	 // eslint-disable-next-line
	Date.prototype.toDateInputValue = (function() {
	    let local = new Date(this);
	    local.setMinutes(this.getMinutes() - this.getTimezoneOffset());
	    return local.toJSON().slice(0,10);
	});
}