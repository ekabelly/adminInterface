import React, { Component } from 'react';

export default class Search extends Component {
	constructor(props){
		super(props);
		this.state = {
			searchTerm: this.props.searchTerm || ''
		}
	}

	initSearch(searchTerm){
		this.setState({searchTerm}, this.props.initSearch(searchTerm));
	}

	render(){
		return <input type="Search" onKeyUp={e=>this.initSearch(e.target.value)} placeholder="חיפוש" className="form-control searchInput" />;
	}
}