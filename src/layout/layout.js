import React, { Component } from 'react';
import Nav from '../components/nav/nav';
import Header from '../components/header';
import Messeges from '../components/messeges';
import Events from '../components/events/events';
import './css/layout.css';

export default class Layout extends Component {
	constructor(props){
		super(props);
		this.state = {
			showNav:false,
			location:'events'
		}
	}

	buildClass(){
		if (this.state.location === 'events') {
			if (this.state.showNav) {
				return 'col-md-10 col-sm-10 col-xs-7';
			}
			return 'col-md-10 col-sm-10 col-xs-11';
		}
		return 'col-md-12 col-sm-12 col-xs-12';
	}

	navHandler(bool){
		this.setState({showNav:bool});
	}

	changeLocation(path){
		this.setState({location:path});
	}

	location(){
		const obj = {
			events:<Events />,
			messeges:<Messeges />
		}
		return obj[this.state.location];
	}

	render(){
		return (<div>
		<main className="container-fluid">
	        <div className={'padding ' + this.buildClass()}>
		        <div className="App-header col-md-12 container-fluid">
		          <Header changeLocation={path=>this.changeLocation(path)} /> 
		        </div>
		        <div className="col-md-12 col-sm-12 col-xs-12 body padding">
		          {this.location()}
		        </div>
	        </div>

	        <Nav navHandler={bool=>this.navHandler(bool)} location={this.state.location} />

        </main>

		</div>);
	}
}
