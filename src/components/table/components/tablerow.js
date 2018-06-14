import React from 'react';

export default props=> {		
	return (<tr className="pointer" onClick={()=>props.changeLocation(props.x, 'itemDetails')}>
				<td>{Object.values(props.x)[0]}</td>
				<td>{Object.values(props.x)[1]}</td>
				<td>{Object.values(props.x)[2]}</td>
				<td>{Object.values(props.x)[3]}</td>
				<td>{Object.values(props.x)[4]}</td>
			</tr>)
}