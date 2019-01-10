const express=require('express')
const cors=require('cors')
// const bodyParser=require('body-parser')
     var bodyParser = require('body-parser');
const mongoose=require('mongoose')
const app=express();
let todoSchema=require('./todo.model')
app.use(cors())

const todoRouter=express.Router();
const PORT=4000
app.use(bodyParser.json())
mongoose.connect('mongodb://localhost:27017/todos',{useNewUrlParser:true});
const connection = mongoose.connection

app.use("/todos",todoRouter)
//console.log("todoSchema====",todoSchema)
todoRouter.route("/").get((req,res)=>{
    todoSchema.find().then((result)=>{res.json(result)})
    .catch((error)=>{res.status(500).send("error occured")})
})


//console.log("todoSchema====",todoSchema)
todoRouter.route("/:id").get((req,res)=>{
    todoSchema.findById(req.params.id).then((result)=>{res.json(result)})
    .catch((error)=>{res.status(500).send("error occured")})
})

todoRouter.route("/add").post((req,res)=>{
    console.log(req.body)
    let newTodo=new todoSchema(req.body);

    newTodo.save().then((result)=>{res.json(result)})
    .catch((error)=>{res.status(500).send("error occured")})
})

todoRouter.route("/update/:id").put((req,res)=>{
    console.log(req.body)

    todoSchema.findById(req.params.id).then((todo)=>{
        todo.description=req.body.description
        todo.responsible=req.body.responsible
        todo.priority=req.body.priority
        todo.completed=req.body.completed
        todo.save().then((result)=>{res.json(result)})
        
    })
    .catch((error)=>{res.status(500).send("error occured")})
})

connection.once('open',()=>{console.log("connection eastablished successfully")})
app.listen(PORT,()=>{
    console.log("server running on "+PORT)
})