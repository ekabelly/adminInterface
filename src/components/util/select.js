import React, { Component } from 'react';

export default class Select extends Component {
	render(){
	return (<div className={"btn-group "+this.props.extraClass}>
  						<button type="button" className="btn btn-default  dropdown-toggle dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
						  <span className="caret"></span>  הכל 
						</button>
						<ul className="dropdown-menu">
						    <li><a className="pointer">Action</a></li>
						    <li><a className="pointer">Another action</a></li>
						    <li><a className="pointer">Something else here</a></li>
						</ul>
					</div>);
	}
}