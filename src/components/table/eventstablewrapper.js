import React from 'react';
import { connect } from 'react-redux';
import Table from './table';
import Pagination from './components/pagination';

class EventsTableWrapper extends React.Component {  
	initSearch(data, searchTerm){
		if (searchTerm === '') {
			return data;
		}
		return data.filter(x=>x.id === Number(searchTerm) || x.userId === Number(searchTerm) || x.title.toLowerCase().indexOf(searchTerm) !== -1);
	}



	render(){
		const { data } = this.props.data.res;
		return (<div className="container-fluid tableContainer">
					<div className="col-md-12 col-sm-12 col-xs-12 container-fluid padding">
						<Pagination changePage={change=>this.changePage(change)} dataCount={this.props.data.length}  />
					</div>
					<div className="col-md-12 col-sm-12 col-xs-12 container-fluid padding">
							<Table changeLocation={(item, locationName)=>
								this.props.changeLocation(item, locationName)} data={this.initSearch(data, this.props.searchTerm)} />
					</div>
					<div className="col-md-12 col-sm-12 col-xs-12 container-fluid padding">
						<Pagination changePage={change=>this.changePage(change)}  dataCount={this.props.data.length}  />
					</div>
				</div>);
	}
}		

const mapStateToProps = store =>({
		searchTerm:store.search.searchTerm,
		data:store.data
	});

export default connect(mapStateToProps)(EventsTableWrapper);