import React, { Component } from 'react';

export default class Header extends Component {
	render(){
		return (<div className="container-fluid">
					<div className="col-md-1 col-sm-1 col-xs-1 ">
					</div>
					<div className="col-md-2 col-xs-8 col-sm-4 container-fluid padding loginPanel">
						<a className="col-md-6 col-sm-6 col-xs-6 verticalMiddle" href="#">
						התנתק/י
						</a>
						<p className="col-md-6 col-sm-6 col-xs-6 verticalMiddle">welcome, user </p>
					</div>
					<div className="col-md-9 col-sm-12 col-xs-12 mainNav">
						<ul className="nav nav-pills sideNav">
							<li>
	        					<a href="#"> link here </a>
			        		</li>
			        		<li>
			        			<a href="#"> link here </a>
			        		</li>
						</ul>
					</div>
				</div>);
	}
}