import React, { Component } from 'react';
import { connect } from 'react-redux';
import { search } from '../../actions/app.actions';

class Search extends Component {

	initSearch(searchTerm){
		//this.setState({searchTerm}, this.props.initSearch(searchTerm));
		this.props.dispatch(search(searchTerm));
	}

	render(){
		return <input type="Search" value={this.props.searchTerm} onChange={e=>this.initSearch(e.target.value)} placeholder="חיפוש" className="form-control searchInput" />;
	}
}

const mapStateToProps = store =>({
		searchTerm:store.search.searchTerm
	});

export default connect(mapStateToProps)(Search);