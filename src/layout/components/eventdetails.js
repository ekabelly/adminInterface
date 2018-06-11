import React, {Component} from 'react';

export default class EventDetails extends Component {
	constructor(props){
		super(props);
	}

	render(){
		return (<div>
					<ul>
						{Object.values(this.props.data).map((value, i)=><li key={i}>{value}</li>)}
					</ul>
		</div>);
	}
}