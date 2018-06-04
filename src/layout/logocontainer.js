import React, { Component } from 'react';
import logo from '../resources/logo.svg';

export default class LogoContainer extends Component {
	render(){
		return (<div>
			<div className="col-md-12 col-sm-12 col-xs-12 logoContainer">
	            <div>
	            	<div>
	            		<img src={logo} className="App-logo" alt="logo" />
	        		</div>
	        			<button type="button" className="btn btn-default kaftor">kaftor
	        		</button>
	        	</div>
	        	<br/>

	        	<ul className="nav nav-pills nav-stacked sideNav">
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