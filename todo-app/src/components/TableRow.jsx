import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Link } from  'react-router-dom'
import DeleteIcon from '../rubbish-bin.svg'; 
import SVG from 'react-inlinesvg';
// import DeleteIcon from '../'
const TableRow = (props) => {
	console.log('Rows ...', props);
	const row = props.row;
	return (
		<tr>
			
			<td><Link to={`/edit/${row._id}`} className="nav-link">{props.index + 1}</Link></td>
			<td>{row.description}</td>
			<td>{row.responsible}</td>
			<td>{row.priority}</td>
			<td> <SVG  className="deleteResize" src={DeleteIcon}  /></td>
		</tr>
	);
};

export default TableRow;
