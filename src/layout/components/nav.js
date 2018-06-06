import React, { Component } from 'react';
import LogoContainer from './logocontainer';
import Hamburger from './hamburger';

export default class Nav extends Component {
	constructor(props){
		super(props);
		this.state = {
			showNav:true
		}
		this.resizeHnadler = this.resizeHnadler.bind(this);
	}

	componentDidMount(){
		this.resizeHnadler();
		window.addEventListener('resize', this.resizeHnadler);
	}

	resizeHnadler(){
		if (window.innerWidth <= 768) {
			this.props.navHandler(false);
			return this.setState({showNav:false});
		}
		return this.setState({showNav:true});
	}

	navHandler(){
		if (this.state.showNav) {
			if (window.innerWidth > 768) {
				return <LogoContainer />;
			}
			return this.hamburgerPlusNav();
		}
		return <Hamburger showNav={()=>this.showNav()} />;
	}

	hamburgerPlusNav(){
		return (<div>
					<div className="col-xs-3 padding">
						<Hamburger showNav={()=>this.showNav()} />
					</div>
					<div className="col-xs-9 container-fluid padding">
						<LogoContainer />
					</div>
				</div>);
	}

	buildClass(){
		if (!this.state.showNav) {
			return ' col-xs-1';
		}
		return ' col-xs-5 container-fluid';
	}

	showNav(){
		this.props.navHandler(!this.state.showNav);
		this.setState({showNav:!this.state.showNav});
	}

	location(){
		if (this.props.location === 'events') {
			return '';
		}
		return 'hidden';
	}

	render(){
		return (<div className={this.location()}>
			<nav className={'col-md-2 col-sm-2 nav padding longNav' + this.buildClass()}>
	           {this.navHandler()}
	        </nav>
		</div>);
	}
}