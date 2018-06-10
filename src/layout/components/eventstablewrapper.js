import React from 'react';
import Table from './table';
import Pagination from './pagination';

export default class EventsTableWrapper extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			data:this.props.data,
			lastPage:this.props.lastPage,
			page:1
		}
	}

	shouldComponentUpdate(nextProps, nextState){
		if (this.state.data.length !== nextState.data.length) {
			return true;
		}
		if (nextState.page !== this.state.page) {
			return true
		}
		return false;
	}

	dataHandler(){
		if (this.state.data.length >=1) {
			return <Table changeLocation={(item, locationName)=>
				this.props.changeLocation(item, locationName)} page={this.state.page} data={this.state.data} />;
		}
		return null;
	}

	changePage(change){
		if (this.state.page === 1 && change < 1 ) {
			return;
		}
		if (this.state.page === this.state.lastPage && change > this.state.lastPage) {
			return;
		}
		this.setState({page:change});
	}

	render(){
		return (<div className="container-fluid tableContainer">
					<div className="col-md-12 col-sm-12 col-xs-12 container-fluid padding">
							<Pagination lastPage={this.state.lastPage} changePage={change=>this.changePage(change)} page={this.state.page} dataCount={this.state.data.length}  />
					</div>
					<div className="col-md-12 col-sm-12 col-xs-12 container-fluid padding">
							{this.dataHandler()}
					</div>
					<div className="col-md-12 col-sm-12 col-xs-12 container-fluid padding">
							<Pagination lastPage={this.state.lastPage} changePage={change=>this.changePage(change)} page={this.state.page} dataCount={this.state.data.length}  />
					</div>
				</div>)
	}
}		

			