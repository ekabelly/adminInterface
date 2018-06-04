import React, { Component } from 'react';
import Nav from './nav';
import './css/layout.css';

export default class Layout extends Component {
	constructor(props){
		super(props);
		this.state = {
			showNav:false
		}
	}

	buildClass(){
		if (this.state.showNav) {
			return 'col-xs-8';
		}
		return 'col-xs-11';
	}

	navHandler(bool){
		this.setState({showNav:bool});
	}

	render(){
		return (<div>
		<main className="container-fluid">
	        <div className={'col-md-10 col-sm-10 padding ' + this.buildClass()}>
		        <header className="App-header col-md-12 container-fluid">
		          <div> 
		          </div>
		        </header>
		        <div className="col-md-12 col-sm-12 col-xs-12">
		          <p className="App-intro">
		          	To get started, edit <code>src/App.js</code> and save to reload.
		          </p>
		        </div>
	        </div>

	        <Nav navHandler={bool=>this.navHandler(bool)} />

        </main>

		</div>);
	}
}
