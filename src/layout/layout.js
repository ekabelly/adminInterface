import React, { Component } from 'react';
import { connect } from 'react-redux';
import Nav from '../components/util/nav/nav';
import Header from '../components/header';
import Messeges from '../components/messeges';
import Events from '../components/events/events';
import './css/layout.css';

class Layout extends Component {
	buildClass(){
		if (this.props.location === 'events') {
			if (this.props.showNav) {
				return 'col-md-10 col-sm-10 col-xs-7';
			}
			return 'col-md-10 col-sm-10 col-xs-11';
		}
		return 'col-md-12 col-sm-12 col-xs-12';
	}

	location(){
		const obj = {
			events:<Events />,
			messeges:<Messeges />
		}
		return obj[this.props.location];
	}

	render(){
		return (<div>
		<main className="container-fluid">
	        <div className={'padding ' + this.buildClass()}>
		        <div className="App-header col-md-12 container-fluid">
		          <Header /> 
		        </div>
		        <div className="col-md-12 col-sm-12 col-xs-12 body padding">
		          {this.location()}
		        </div>
	        </div>

	        <Nav />

        </main>

		</div>);
	}
}

const mapStateToProps = state =>({
		showNav:state.nav.showNav,
		location:state.location.layoutLocation
	});

export default connect(mapStateToProps)(Layout);