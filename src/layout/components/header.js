import React, { Component } from 'react';

export default class Header extends Component {
	myRouter(path){
		this.props.changeLocation(path);
	}

	render(){
		return (<div className="container-fluid">
					<div className="col-md-1 col-sm-1 col-xs-1 ">
					</div>
					<div className="col-md-2 col-xs-8 col-sm-4 container-fluid padding loginPanel">
						<a className="col-md-6 col-sm-6 col-xs-6 verticalMiddle btn btn-default padding pointer">
						התנתק/י
						</a>
						<p className="col-md-6 col-sm-6 col-xs-6 verticalMiddle padding">שלום, עידו</p>
					</div><br/>
					<div className="col-md-6 col-md-offset-3 col-sm-12 col-xs-12 padding">
						<nav className=" mainNav navbar-default">
							<div className="container-fluid">
								<div className="">
									<ul className="nav navbar-nav navbar" >
										<li role="presentation">
				        					<a className="navAnchor pointer"> הגדרות </a>
						        		</li>
						        		<li role="presentation">
						        			<a href="#volunteers" className="navAnchor"> מתנדבים </a>
						        		</li>
						        		<li role="presentation" onClick={()=>this.myRouter('messeges')}>
				        					<a href="#messeges" className="navAnchor"> הודעות כלליות </a>
						        		</li>
						        		<li role="presentation" onClick={()=>this.myRouter('events')}>
				        					<a href="#events"  className="navAnchor"> אירועים </a>
						        		</li>
						        	</ul>
				        		</div>
				        	</div>
						</nav>
					</div>
				</div>);
	}
}