import React from 'react';
import { connect } from 'react-redux';
import { toggleNav } from '../../../../actions/app.actions';


class Hamburger extends React.Component {
	render(){
		return (<div className="padding hamburgerContainer" onClick={()=>this.props.dispatch(toggleNav(!this.props.nav))}>
			<span className="glyphicon glyphicon-menu-hamburger hamburger" aria-hidden="true"></span>
		</div>);
	}
}

const mapStateToProps = store =>({
		nav:store.nav.showNav
	});

export default connect(mapStateToProps)(Hamburger);