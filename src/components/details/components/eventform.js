import React, {Component} from 'react';
import { connect } from 'react-redux';
import { changePic } from '../../../actions/event.actions';
import { isEmpty } from '../../../util/util';
import { time, date } from '../../../util/time';
import './eventform.css';

class EventForm extends Component {
	state = {
		pic:''
	}

	componentWillMount(){
		date();
	}

	picHandler(input){
		if (input.files && input.files[0]) {
		    var reader = new FileReader();

		    reader.onload = e => {
		     	this.props.dispatch(changePic(e.target.result));
		    }

		    reader.readAsDataURL(input.files[0]);
		  }
		
	}

	dataHandler(data){
		return this.props.event.title || 'new title';
	}

	render(){
		return (<div>
			<div className={'container-fluid padding black-text'}>
				<div className={'row'} >
					<div className={'col-md-12 container-fluid padding'} >
						<h1> {this.dataHandler('title')} </h1>
						<div className={'col-md-6 radio-label'} >
							<div className={''}>
								<label htmlFor='reg_volun' className='checkbox-label'> מתנדבים רשומים </label>
								<input id='reg_volun' type='radio' name='volun_type' />
							</div>
						</div>
						<div className={'col-md-6 radio-label'} >
							<div className={''}>
								<label htmlFor='open_volun' className='checkbox-label'> קהל רחב</label>
								<input id='open_volun' type='radio' name='volun_type' />
							</div>
						</div>
						<div className={'col-md-12'} >
							<p className={'form-title'}><b>:מתאים למתנדבים</b></p>
							<div className='well'>
								<div className=''>
									<div className="col-md-4">
									    <label htmlFor='active_plus' className='checkbox-label'>  + פעילים</label>
									    <input type="checkbox" id='active_plus' />   
									</div>
									<div className="col-md-4">
									    <label htmlFor='active' className='checkbox-label'>  פעילים</label>
									    <input type="checkbox" id='active' />							 
									</div>
									<div className="col-md-4">
									    <label htmlFor='support' className='checkbox-label'> תומכים</label>
									    <input type="checkbox" id='support' /> 
									</div>
								</div>
								<div className=''>
									<label htmlFor='open_volun'> מספר מתנדבים מקסימלי שיכולים להירשם להתנדבות זו </label>
									<div className="center-block">
										<input className='form-control' type="number" id='volun_num' />
									</div>
								</div>
							</div>
						</div>
						<div className={'col-md-12'} >
							<p className={'form-title'}><b>?מה</b></p>
							<div className='well'>
								<div className='form-label-right'>
									<label htmlFor='event_title'>כותרת ההתנדבות (עד 50 תווים)</label>
									<input type='text' className='form-control' id='event_title' maxLength='50' />
								</div>
								<div className='form-label-right'>
									<label htmlFor='event_desc' className=''>תיאור (עד 80 תווים)</label>
									<textarea className='form-control' row='3' id='event_desc' maxLength='80' />
								</div>
								<div className='form-label-right'>
									<label htmlFor='event_pic'>תמונה</label>
									<input type='file' onChange={e=>this.picHandler(e.target)} className='form-control' id='event_pic' />
									<img src={this.props.pic} alt='' />
								</div>
							</div>
						</div>
						<div className={'col-md-12'} >
							<p className={'form-title'}><b>?מתי</b></p>
							<div className='well container-fluid padding'>
								<div className='col-md-6'>
									<div className='row'>
										<div className='input-gorup'>
											<label htmlFor='start_date' className='form-label-right'>שעה</label>
										</div>
										<div className='input-gorup'>
											<select className='timeInput' defaultValue='12'>
												{time('hours').map(x=><option key={x}>{x}</option>)}
											</select><b className='timeLabel'> : </b>
											<select className='timeInput'>
												{time('mins').map(x=><option key={x}>{x}</option>)}
											</select>
										</div>
									</div>
								</div>
								<div className='col-md-6'>
									<div className='row'>
										<div className='input-gorup'>
											<label htmlFor='start_date' className='form-label-right'>תאריך </label>
										</div>
										<div className='input-gorup'>
											<input type='date' id='start_date' defaultValue={new Date().toDateInputValue()} min={new Date().toDateInputValue()} />
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className='col-md-12'>
							<b>  {this.props.update ? 'עדכן/ני באפליקציה' : 'פרסמ/י באפליקציה'}    </b>
						</div>
					</div>
				</div>
			</div>		
		</div>);
	}
}

const mapStateToProps = state =>({
	event:state.location.eventsLocation.item,
	pic:state.event_form.form_pic,
	update:state.event_form.update
});

export default connect(mapStateToProps)(EventForm);