import React, { Component } from 'react';
import LogoContainer from './logocontainer';
import hamburger from '../resources/hamburger.png';

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

	hamburgerComp(){
		return (<div className="padding hamburgerContainer" onClick={()=>this.showNav()}>
				<span className="glyphicon glyphicon-menu-hamburger hamburger" aria-hidden="true"></span>
			</div>)
	}

	navHandler(){
		if (this.state.showNav) {
			if (window.innerWidth > 768) {
				return <LogoContainer />;
			}
			return (<div>
						<div className="col-xs-3">
							{this.hamburgerComp()}
						</div>
						<div className="col-xs-9 container-fluid padding">
							<LogoContainer />
						</div>
					</div>)
		}
		return this.hamburgerComp();
	}

	buildClass(){
		if (!this.state.showNav) {
			return ' col-xs-1';
		}
		return ' col-xs-4 container-fluid';
	}

	showNav(){
		this.props.navHandler(!this.state.showNav);
		this.setState({showNav:!this.state.showNav});
	}

	render(){
		return (<div>
			<nav className={'col-md-2 col-sm-2 nav padding' + this.buildClass()}>
	           {this.navHandler()}
	        </nav>
		</div>);
	}
}