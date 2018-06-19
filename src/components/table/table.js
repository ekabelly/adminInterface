import React, { Component } from 'react';
import { connect } from 'react-redux';
import TableRow from './components/tablerow';
import Select from '../util/select';
import Search from '../util/search';
import {limit} from '../../layout/layout.config';

class Table extends Component {
	createTbody(){
		return this.props.data.map((x, i)=>{
			if (i < (this.props.page-1)*limit || i > this.props.page*limit) return null;
			return (<TableRow x={x} key={i} changeLocation={this.props.changeLocation} />);
		});	
	}

	render(){
		return (<div className="padding">
			<table className="col-xs-12 table padding table-hover">
				<thead>
					<tr>
						<td><Select extraClass="selectWidth" /> </td>
						<td><Select extraClass="selectWidth" /> </td>
						<td><Select extraClass="selectWidth" /></td>
						<td><Search /> </td>
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

const mapStateToProps = store =>({
		page:store.page.page,
		data:store.data.res.data
	});

export default connect(mapStateToProps)(Table);