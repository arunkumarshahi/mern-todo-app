import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import {getRecord,updateRecord} from '../service/restserviceClient'

class TodoEdit extends Component {
	constructor(props) {
		super(props);
		this.state = {
			_id: '',
			description: '',
			responsible: '',
			priority: '',
			completed: false
		};
	}

	componentDidMount() {
		console.log("param passed ",this.props.match.params.id)
		//axios.get(`http://localhost:4000/todos/${this.props.match.params.id}`).then((result)=>{
			getRecord(this.props.match.params.id).then((result)=>{
		console.log("result  .... ",result.data)
			this.setState({ ...result.data });
		}).catch((error)=>{console.log("errro occured ....",error)})
		// this.setState({
		// 	id: '',
		// 	description: '',
		// 	responsible: '',
		// 	priority: '',
		// 	completed: false
		// });
	}
	onChangeDescription = (e) => {
		this.setState({ description: e.target.value });
	};

	onChangePriority = (e) => {
		this.setState({ priority: e.target.value });
	};
	onChangeResponsible = (e) => {
		this.setState({ responsible: e.target.value });
	};
	// onChangeCompleted=(e)=>{
	// this.setState({description:e.target.value})
	// }
	onSubmit = (e) => {
		e.preventDefault();
		console.log('submitted value ', this.state);
		// axios.put(`http://localhost:4000/todos/update/${this.props.match.params.id}`,
		//  {
		// 	...this.state
		//    }
		updateRecord(this.props.match.params.id,this.state)
	.then((result)=>{
		this.props.history.push('/');	
			
		}).catch((error)=>{console.log("errro occured ....",error)})
		
	};
	render() {
		return (
			<div>
				<h3>Welcome to todo create page </h3>
				<form onSubmit={this.onSubmit}>
					<div className="form-group">
						<label> Description: </label>
						<input
							type="text"
							className="form-control"
							value={this.state.description}
							onChange={this.onChangeDescription}
						/>
					</div>
					<div className="form-group">
						<label> Responsible: </label>
						<input
							type="text"
							className="form-control"
							value={this.state.responsible}
							onChange={this.onChangeResponsible}
						/>
					</div>
					<label> Priority: </label>
					<div className="form-group">
						<div className="form-check form-check-inline">
							<input
								type="radio"
								className="form-check-input"
								value="Low"
								checked={this.state.priority == 'Low'}
								onChange={this.onChangePriority}
							/>
							<label className="form-check-label"> Low </label>
						</div>

						<div className="form-check form-check-inline">
							<input
								type="radio"
								className="form-check-input"
								value="Medium"
								checked={this.state.priority == 'Medium'}
								onChange={this.onChangePriority}
							/>
							<label className="form-check-label"> Medium </label>
						</div>

						<div className="form-check form-check-inline">
							<input
								type="radio"
								className="form-check-input"
								value="High"
								checked={this.state.priority == 'High'}
								onChange={this.onChangePriority}
							/>
							<label className="form-check-label"> High </label>
						</div>
					</div>
					<div className="form-group">
						<input type="submit" value="Submit TODO" className="btn btn-primary" />
					</div>
				</form>
			</div>
		);
	}
}
export default withRouter(TodoEdit);
