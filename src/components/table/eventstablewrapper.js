import React from 'react';
import { connect } from 'react-redux';
import Table from './table';
import Pagination from './components/pagination';
import { lastPage } from '../../actions/app.actions';

class EventsTableWrapper extends React.Component {  
	initSearch(data, searchTerm){
		if (searchTerm === '') {
			return data;
		}
		let filteredData = data.filter(x=>x.id === Number(searchTerm) || x.userId === Number(searchTerm) || x.title.toLowerCase().indexOf(searchTerm) !== -1);
		this.props.dispatch(lastPage(filteredData.length));
		return filteredData;
	}



	render(){
		const dispData = this.initSearch(this.props.data.res.data, this.props.searchTerm);
		return (<div className="container-fluid tableContainer">
					<div className="col-md-12 col-sm-12 col-xs-12 container-fluid padding">
						<Pagination changePage={change=>this.changePage(change)} />
					</div>
					<div className="col-md-12 col-sm-12 col-xs-12 container-fluid padding">
							<Table changeLocation={(item, locationName)=>
								this.props.changeLocation(item, locationName)} data={dispData} />
					</div>
					<div className="col-md-12 col-sm-12 col-xs-12 container-fluid padding">
						<Pagination changePage={change=>this.changePage(change)} />
					</div>
				</div>);
	}
}		

const mapStateToProps = store =>({
		searchTerm:store.search.searchTerm,
		data:store.data
	});

export default connect(mapStateToProps)(EventsTableWrapper);