import React, { Component } from 'react';
import TableRow from './TableRow';
export default class TodoList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			rows: []
		};
	}
	componentDidMount() {
		const rows = [
			{
				description: 'A',
				responsible: 'R1',
				priority: 'High',
				completed: false
			},
			{
				description: 'B',
				responsible: 'R2',
				priority: 'Low',
				completed: false
			}
		];

		this.setState({ rows });
	}
	render() {
		const todoRows = this.state.rows.map((row, index) => <TableRow key={index} row={row} index={index} />);
		return (
			<div>
				<table className="table table-striped table-bordered table-condensed table-hover">
					<thead>
						<tr>
							<th>#</th>
							<th>Description</th>
							<th>Responsible</th>
							<th>Priority</th>
						</tr>
					</thead>
					<tbody>{todoRows}</tbody>
				</table>
			</div>
		);
	}
}
