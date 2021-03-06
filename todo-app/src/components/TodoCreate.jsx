import React,{Component} from 'react'
import {createRecord} from '../service/restserviceClient';
export default class TodoCreate extends Component{
    constructor(props){
super(props)
this.state={
    description:'',
    responsible:'',
    priority:'',
    completed:false
}
    }
    onChangeDescription=(e)=>{
this.setState({description:e.target.value})
    }

    onChangePriority=(e)=>{
        this.setState({priority:e.target.value})
            }
    onChangeResponsible=(e)=>{
        this.setState({responsible:e.target.value})
    }
    // onChangeCompleted=(e)=>{
    // this.setState({description:e.target.value})
    // }
    onSubmit=(e)=>{
        e.preventDefault();
        console.log("submitted value ",this.state)
        createRecord(this.state).then((result)=>{
            console.log("Successfully created")
        }).catch((err)=>{console.log("failed to  create")})
        this.setState({
            description:'',
            responsible:'',
            priority:'',
            completed:false
        })
    }
render(){
    return <div> 
        <h3>Welcome to todo create page </h3>
        <form onSubmit={this.onSubmit}>
    <div className="form-group">
<label> Description: </label>
<input type="text" className="form-control"
 value={this.state.description} onChange={this.onChangeDescription} />
 
    </div>
    <div className="form-group">
<label> Responsible: </label>
<input type="text" className="form-control"
 value={this.state.responsible} onChange={this.onChangeResponsible} />
 
    </div>
    <label> Priority: </label>
    <div className="form-group">

<div className="form-check form-check-inline">
<input type="radio" className="form-check-input"
 value="Low" checked={this.state.priority=='Low'} onChange={this.onChangePriority} />
 <label className="form-check-label"> Low </label>
 </div>
   

<div className="form-check form-check-inline">
<input type="radio" className="form-check-input"
 value="Medium" checked={this.state.priority=='Medium'} onChange={this.onChangePriority} />
 <label className="form-check-label"> Medium </label>
 </div>
  

<div className="form-check form-check-inline">
<input type="radio" className="form-check-input"
 value="High" checked={this.state.priority=='High'} onChange={this.onChangePriority} />
 <label className="form-check-label"> High </label>
 </div>
    </div>
<div className="form-group">
<input type="submit" value="Create TODO" className="btn btn-primary"/>
</div>
        </form>



    </div>
}
}