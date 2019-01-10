import React, { Component } from 'react';
const TableRow = (props) => {
	console.log('Rows ...', props);
	const row = props.row;
	return (
		<tr>
			<td>{props.index + 1}</td>
			<td>{row.description}</td>
			<td>{row.responsible}</td>
			<td>{row.priority}</td>
		</tr>
	);
};

export default TableRow;
