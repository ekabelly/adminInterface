import React, { Component } from 'react';
import Select from './select';
import {limit} from '../layout.config';

export default class Table extends Component {
	createTbody(){
		if (this.props.data.length >= 1) {
			console.log('render', this.props.page);
			return this.props.data.map((x, i)=>{
				if (i < (this.props.page-1)*limit || i > this.props.page*limit) return null;
			return (<tr key={i}>
				<td>{Object.values(x)[0]}</td>
				<td>{Object.values(x)[1]}</td>
				<td>{Object.values(x)[2]}</td>
				<td>{Object.values(x)[3]}</td>
				<td>{Object.values(x)[4]}</td>
			</tr>);
			});
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