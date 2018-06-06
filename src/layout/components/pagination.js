import React from 'react';

export default class Pagination extends React.Component {


	render(){
		let page = this.props.page;
		if (this.props.page === 1 || this.props.page === 2) page = 3;

		return (<div>
			<nav aria-label="Page navigation">
			  	<ul className="pagination-lg pagination">
			    	<li className={this.props.page === 1 ? 'disabled' : ""}>
				      	<a onClick={()=>this.props.changePage(1)} className="pointer" aria-label="Previous">
				        	<span aria-hidden="true">&laquo;</span>
				      	</a>
				    </li>
				    <li><a onClick={()=>this.props.changePage(this.props.page-1)} className="pointer">Previous</a></li>
			    	<li className={this.props.page === 1 ? 'active' : ''}><a onClick={()=>this.props.changePage(page-2)} className="pointer">{page-2}</a></li>
					<li className={this.props.page === 2 ? 'active' : ''}><a onClick={()=>this.props.changePage(page-1)} className="pointer">{page-1}</a></li>
					<li className={this.props.page > 2 ? 'active' : ''}><a className="active pointer">{page}</a></li>
					<li><a onClick={()=>this.props.changePage(page+1)} className="pointer">{page+1}</a></li>
					<li><a onClick={()=>this.props.changePage(page+2)} className="pointer">{page+2}</a></li>
			    	<li><a onClick={()=>this.props.changePage(this.props.page+1)} className="pointer">Next</a></li>
			    	<li>
			      		<a className="pointer" aria-label="Next">
			        		<span aria-hidden="true">&raquo;</span>
			      		</a>
			    	</li>
			  	</ul>
			</nav>		
		</div>);
	}
}