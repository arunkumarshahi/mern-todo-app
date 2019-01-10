import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import {BrowserRouter as Router,Route,Link } from  'react-router-dom'

import TodoList from './components/TodoList.';
import TodoEdit from './components/TodoEdit'
import TodoCreate from './components/TodoCreate'
class App extends Component {
  render() {
    return (
     <div className="container">
<h2> Welcome to mern todo app</h2>



<Router>
  <div>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
<Link to="/edit/2" className="nav-link">edit</Link>
<Link to="/create" className="nav-link">create</Link>
<Link to="/" className="nav-link">List</Link>
</nav>
<Route path="/" exact  component={TodoList}/>
<Route path="/edit/:id"   component={TodoEdit}/>
<Route path="/create"   component={TodoCreate}/>
</div>
  </Router>
       </div>
    );
  }
}

export default App;
