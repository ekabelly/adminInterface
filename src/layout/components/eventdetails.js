import React, {Component} from 'react';

export default class EventDetails extends Component {

	render(){
		return (<div><br/><br/>
					<ul>
						{Object.values(this.props.data).map((value, i)=><li key={i}>{value}</li>)}
					</ul>
		</div>);
	}
}