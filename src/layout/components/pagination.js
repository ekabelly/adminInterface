import React from 'react';

export default props=>{
		let page = props.page;
		if (props.page === 1 || props.page === 2) page = 3;
		if (props.page === props.lastPage || props.page === props.lastPage - 1) page = props.lastPage - 2;

		return (<div>
			<nav aria-label="Page navigation">
			  	<ul className="pagination-lg pagination">
			    	<li className={props.page === 1 ? 'disabled' : ""}>
				      	<a onClick={()=>props.changePage(1)} className="pointer" aria-label="Previous">
				        	<span aria-hidden="true">&laquo;</span>
				      	</a>
				    </li>
				    <li>
				    	<a onClick={()=>props.changePage(props.page-1)} className="pointer">Previous</a>
				    </li>
			    	<li className={props.page === 1 ? 'active' : ''}>
			    		<a onClick={()=>props.changePage(page-2)} className="pointer">{page-2}</a>
		    		</li>
					<li className={props.page === 2 ? 'active' : ''}>
						<a onClick={()=>props.changePage(page-1)} className="pointer">{page-1}</a>
					</li>
					<li className={props.page > 2 && props.page < props.lastPage - 1 ? 'active' : ''}>
						<a onClick={()=>props.changePage(page)} className="active pointer">{page}</a>
					</li>
					<li className={props.page === props.lastPage - 1 ? 'active' : ''}>
						<a onClick={()=>props.changePage(page+1)} className="pointer">{page+1}</a>
					</li>
					<li className={props.page === props.lastPage ? 'active' : ''}>
						<a onClick={()=>props.changePage(page+2)} className="pointer">{page+2}</a>
					</li>
			    	<li className={props.page === props.lastPage ? 'disabled' : ""}>
			    		<a onClick={()=>props.changePage(props.page+1)} className="pointer">Next</a>
			    	</li>
			    	<li>
			      		<a onClick={()=>props.changePage(props.lastPage)} className="pointer" aria-label="Next">
			        		<span aria-hidden="true">&raquo;</span>
			      		</a>
			    	</li>
			  	</ul>
			</nav>		
		</div>);
}