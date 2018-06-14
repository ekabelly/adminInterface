import React from 'react';

export default props=>(<div className="padding hamburgerContainer" onClick={()=>props.showNav()}>
		<span className="glyphicon glyphicon-menu-hamburger hamburger" aria-hidden="true"></span>
	</div>);