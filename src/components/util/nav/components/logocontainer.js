import React from 'react';
import { connect } from 'react-redux';
import { createNewEevent } from '../../../../actions/event.actions';
import logo from '../../../../resources/logo.svg';

class logoContainer extends React.Component {
    createNewEevent(){
        this.props.dispatch(createNewEevent());
    }

    render(){
    	return (<div>
    		<div className="col-md-12 col-sm-12 col-xs-12 logoContainer padding">
                <div>
                	<div>
                		<img src={logo} className="App-logo" alt="logo" />
            		</div>
            			<button type="button" onClick={()=>this.createNewEevent()} className="btn btn-default newEventBtn">יצירת אירוע חדש
            		</button>
            	</div>
            	<br/>

            	<ul className="nav navbar  nav-pills nav-stacked sideNav">
            		<li>
            			<a className="pointer"> ארכיון אירועים </a>
            		</li>
            		<li>
            			<a className="pointer"> אירועים פעילים </a>
            		</li>
            	</ul>
            </div> 
    	</div>);
    }
}

const mapStateToProps = state =>({});

export default connect(mapStateToProps)(logoContainer);	