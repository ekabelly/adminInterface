import React, { Component } from 'react';
import { connect } from 'react-redux';
import LogoContainer from './components/logocontainer';
import HamburgerContainer from './components/hamburger';
import { toggleNav } from '../../../actions/app.actions';
 
class Nav extends Component {
	constructor(props){
		super(props);
		this.resizeHnadler = this.resizeHnadler.bind(this);
	}
	componentDidMount(){
		this.resizeHnadler();
		window.addEventListener('resize', this.resizeHnadler);
	}

	resizeHnadler(){
		if (window.innerWidth <= 768) {
			return this.props.dispatch(toggleNav(false));
		}
		return this.props.dispatch(toggleNav(true));
	}

	navHandler(){
		if (this.props.nav) {
			if (window.innerWidth > 768) {
				return <LogoContainer />;
			}
			return this.hamburgerPlusNav();
		}
		return <HamburgerContainer />;
	}

	hamburgerPlusNav(){
		return (<div>
					<div className="col-xs-3 padding">
						<HamburgerContainer />
					</div>
					<div className="col-xs-9 container-fluid padding">
						<LogoContainer />
					</div>
				</div>);
	}

	buildClass(){
		if (!this.props.nav) {
			return ' col-xs-1';
		}
		return ' col-xs-5 container-fluid';
	}

	showNav(){
		this.props.dispatch(toggleNav(!this.props.nav));
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

const mapStateToProps = state =>({
		nav:state.nav.showNav,
		location:state.location.layoutLocation
	});

export default connect(mapStateToProps)(Nav);