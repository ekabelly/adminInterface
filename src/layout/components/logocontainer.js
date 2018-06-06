import React, { Component } from 'react';
import logo from '../../resources/logo.svg';

export default class LogoContainer extends Component {
	render(){
		return (<div>
			<div className="col-md-12 col-sm-12 col-xs-12 logoContainer padding">
	            <div>
	            	<div>
	            		<img src={logo} className="App-logo" alt="logo" />
	        		</div>
	        			<button type="button" className="btn btn-default newEventBtn">יצירת אירוע חדש
	        		</button>
	        	</div>
	        	<br/>

	        	<ul className="nav navbar  nav-pills nav-stacked sideNav">
	        		<li>
	        			<a href="#"> ארכיון אירועים </a>
	        		</li>
	        		<li>
	        			<a href="#"> אירועים פעילים </a>
	        		</li>
	        	</ul>
	        </div> 
		</div>);
	}
} 		