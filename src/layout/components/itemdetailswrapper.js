import React, {Component} from 'react';

export default class ItemDetailsWrapper extends Component {
	constructor(props){
		super(props)
	}

	render(){
		return (<div className="container-fluid padding">
				<div className="col-md-9 col-md-offset-1">
					<ul>
						{Object.values(this.props.x).map((value, i)=><li key={i}>{value}</li>)}
					</ul>
				</div>
				<div className="col-md-2">
					<div>
						<button onClick={()=>this.props.changeLocation({}, 'events')} type="button" className="btn btn-default btn-lg"> חזרה לאירועים 
							<span className="glyphicon glyphicon-triangle-right"></span>
						</button>
					</div>
					
				</div>
			</div>);
	}
}