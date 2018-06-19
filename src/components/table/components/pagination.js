import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changePage, lastPage } from '../../../actions/app.actions';


class Pagination extends Component {

	componentWillMount(){
		this.props.dispatch(lastPage(this.props.dataLength));
	}

	pageHandler(change){
		let { page } = this.props.page;
		const { last } = this.props.page;
		if ((page === 1 && change < 1)  ||  (page === change)  ||  (page === last && change > last)) {
			return;
		}
		return this.props.dispatch(changePage(change));
	}

	render(){
		const { page } = this.props.page;
		let pageDisp = page;
		let { last } = this.props.page;
		if (last < 5 ) last = 5;
		if (page === 1 || page === 2) pageDisp = 3;
		if (pageDisp === last || pageDisp === last - 1) pageDisp = last - 2;

		return (<div>
			<nav aria-label="Page navigation">
			  	<ul className="pagination-lg pagination">
			    	<li className={page === 1 ? 'disabled' : 'pointer'}>
				      	<a onClick={()=>this.pageHandler(1)} aria-label="First">
				        	<span aria-hidden="true">&laquo;</span>
				      	</a>
				    </li>
				    <li className={page === 1 ? 'disabled' : 'pointer'}>
				    	<a onClick={()=>this.pageHandler(page-1)} >הקודם</a>
				    </li>
			    	<li className={page === 1 ? 'active' : ''}>
			    		<a onClick={()=>this.pageHandler(pageDisp-2)} className="pointer">{pageDisp-2}</a>
		    		</li>
					<li className={page === 2 ? 'active' : ''}>
						<a onClick={()=>this.pageHandler(pageDisp-1)} className="pointer">{pageDisp-1}</a>
					</li>
					<li className={page > 2 && page < last - 1 ? 'active' : ''}>
						<a onClick={()=>this.pageHandler(pageDisp)} className="pointer">{pageDisp}</a>
					</li>
					<li className={page === last - 1 ? 'active' : ''}>
						<a onClick={()=>this.pageHandler(pageDisp+1)} className="pointer">{pageDisp+1}</a>
					</li>
					<li className={page === last ? 'active' : ''}>
						<a onClick={()=>this.pageHandler(pageDisp+2)} className="pointer">{pageDisp+2}</a>
					</li>
			    	<li className={page === last || page === this.props.page.last ? 'disabled' : 'pointer'}>
			    		<a onClick={()=>this.pageHandler(page+1)}>הבא</a>
			    	</li>
			    	<li className={page === last || page === this.props.page.last ? 'disabled' : 'pointer'}>
			      		<a onClick={()=>this.pageHandler(this.props.page.last)} aria-label="Last">
			        		<span aria-hidden="true">&raquo;</span>
			      		</a>
			    	</li>
			  	</ul>
			</nav>		
		</div>);
	}
}

const mapStateToProps = store =>({
		page:store.page,
		dataLength:store.data.res.data.length
	});

export default connect(mapStateToProps)(Pagination);