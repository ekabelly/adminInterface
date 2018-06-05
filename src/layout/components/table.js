import React, { Component } from 'react';
import Select from './select';

export default class Table extends Component {
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
				<tr>
					<td> כותרת</td>
					<td> </td>
					<td> </td>
					<td> </td>
					<td> </td>
				</tr>
				<tr>
					<td> כותרת</td>
					<td> </td>
					<td> </td>
					<td> </td>
					<td> </td>
				</tr>
				<tr>
					<td> כותרת</td>
					<td> </td>
					<td> </td>
					<td> </td>
					<td> </td>
				</tr>
				</tbody>
			</table>

		</div>);
	}

}