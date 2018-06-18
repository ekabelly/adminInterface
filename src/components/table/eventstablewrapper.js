import React from 'react';
import Table from './table';
import Pagination from './components/pagination';

export default class EventsTableWrapper extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			page:1
		}
	}

	changePage(change){
		if (this.state.page === 1 && change < 1 ) {
			return;
		}
		if (this.state.page === this.props.lastPage && change > this.props.lastPage) {
			return;
		}
		this.setState({page:change});
	}

	render(){
		return (<div className="container-fluid tableContainer">
					<div className="col-md-12 col-sm-12 col-xs-12 container-fluid padding">
						<Pagination lastPage={this.props.lastPage} changePage={change=>this.changePage(change)} page={this.state.page} dataCount={this.props.data.length}  />
					</div>
					<div className="col-md-12 col-sm-12 col-xs-12 container-fluid padding">
							<Table changeLocation={(item, locationName)=>
								this.props.changeLocation(item, locationName)} page={this.state.page} data={this.props.data} />
					</div>
					<div className="col-md-12 col-sm-12 col-xs-12 container-fluid padding">
						<Pagination lastPage={this.props.lastPage} changePage={change=>this.changePage(change)} page={this.state.page} dataCount={this.props.data.length}  />
					</div>
				</div>);
	}
}		

			