import React from 'react';
import { connect } from 'react-redux';
import { changeLocation } from '../../../actions/app.actions';

class TableRow extends React.Component {
	render(){
		const { dispatch, x } = this.props;
		return (<tr className="pointer" onClick={()=>dispatch(changeLocation({
				locationName:'itemDetails', 
				item:x
			}, '_EVENTS'))}>
				<td>{Object.values(x)[0]}</td>
				<td>{Object.values(x)[1]}</td>
				<td>{Object.values(x)[2]}</td>
				<td>{Object.values(x)[3]}</td>
				<td>{Object.values(x)[4]}</td>
			</tr>);
	}	
}

const mapStateToProps = store =>({});

export default connect(mapStateToProps)(TableRow);