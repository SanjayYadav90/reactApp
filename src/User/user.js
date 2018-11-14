import React from 'react';
import './user.css'

const user = (props) => {
	const outerContainer = {
      backgroundColor:'red',
      color:'black',
	}
	var todo = props.showHide;
	return (
		<div className="card">
			<div className='container'>
				<div className='sr-number' style= {outerContainer}>
					 {props.keyValue}.
				</div>
				<h3> Hi, this is '{props.name}' with age of <i>{props.age}</i> 
					<button className='del-button' onClick={props.deleteMe}> Delete </button>
					<div>
						<button className='#' onClick={props.toggleOut}> Write! </button>
					</div>
					<div>
						<input type='text' value={props.name}  onChange={props.inputValue}/>
					</div>
				</h3>
			</div>
		</div>
	)
}

export default user;