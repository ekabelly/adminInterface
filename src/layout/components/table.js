import React, { Component } from 'react';
import axios from 'axios';
import Select from './select';

export default class Table extends Component {
	constructor(props){
		super(props);
		this.state ={
			data: []
		}
	}

	componentDidMount(){
		axios.get('https://jsonplaceholder.typicode.com/comments').then(res=>
			this.setState({data:res.data})).catch(e=>console.error(e));
	}

	shouldComponentUpdate(nextProps, nextState){
		if (this.state.data.length !== nextState.data.length) {
			return true;
		}
		return false;
	}

	createTbody(){
		console.log('render');
		if (this.state.data.length >= 1) {
			return this.state.data.map((x, i)=>(<tr key={i}>
				<td>{Object.values(x)[0]}</td>
				<td>{Object.values(x)[1]}</td>
				<td>{Object.values(x)[2]}</td>
				<td>{Object.values(x)[3]}</td>
				<td>{Object.values(x)[4]}</td>
			</tr>));
		}
		return null;	
	}

	render(){
		return (<div className="padding">

			<table className="col-xs-12 table padding">
				<thead>
					<tr>
						<td><Select extraClass="selectWidth" /> </td>
						<td><Select extraClass="selectWidth" /> </td>
						<td><Select extraClass="selectWidth" /></td>
						<td> </td>
						<td> </td>
					</tr>
					<tr>
						<td> סטטוס</td>
						<td> רשומים/קהל רחב</td>
						<td>תאריך  </td>
						<td> מיקום</td>
						<td> שם האירוע</td>
					</tr>
				</thead>
				<tbody>
				{this.createTbody()}
				</tbody>
			</table>

		</div>);
	}

}