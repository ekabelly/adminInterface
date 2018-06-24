import React from 'react';
import { connect } from 'react-redux';
import Table from './table';
import Pagination from './components/pagination';
import { changePage, lastPage } from '../../actions/app.actions';

class EventsTableWrapper extends React.Component {  
	searchHandler(data, searchTerm){
		if (searchTerm === '') {
			this.props.dispatch(lastPage(data.length));
			return data;
		}
		let filteredData = data.filter(x=>x.id === Number(searchTerm) || x.userId === Number(searchTerm) || x.title.toLowerCase().indexOf(searchTerm) !== -1);
		this.props.dispatch(lastPage(filteredData.length));
		this.props.dispatch(changePage(1));
		return filteredData;
	}



	render(){
		const dispData = this.searchHandler(this.props.data.res.data, this.props.searchTerm);
		return (<div className="container-fluid tableContainer">
					<div className="col-md-12 col-sm-12 col-xs-12 container-fluid padding">
						<Pagination />
					</div>
					<div className="col-md-12 col-sm-12 col-xs-12 container-fluid padding">
							<Table data={dispData} />
					</div>
					<div className="col-md-12 col-sm-12 col-xs-12 container-fluid padding">
						<Pagination />
					</div>
				</div>);
	}
}		

const mapStateToProps = store =>({
		searchTerm:store.search.searchTerm,
		data:store.data
	});

export default connect(mapStateToProps)(EventsTableWrapper);