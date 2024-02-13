import express from 'express';
import tododb from "./JSON/todo-db.json" assert{type:"json"};
import bodyParser from "body-parser"

const todo = express();
const port = 3000;

todo.use(bodyParser.json())


todo.get("/lists", (req, res) =>{
    res.status(200).json(tododb)
})

todo.listen(port, () =>{
    console.log("Welcome!")
})


// getting one todo with id
todo.get("/lists/:list" ,(req,res) =>{
const id = Number(req.params.list) 
const oneTodo = tododb.find((todo) =>{
    return todo.id === id
})
if (oneTodo) {
    res.status(200).json(oneTodo)
}
 else{
    res.status(404).json("todo not found")
 }
})

todo.post("/newList", (req,res) =>{
    console.log(req.body)
const newList = req.body
tododb.push(newList)
res.status(201).json(tododb)
})
