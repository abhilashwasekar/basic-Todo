const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://abhilash:abhilash1234@cluster10.kmnbete.mongodb.net/todo_prac");


const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos',todoSchema);

module.exports={
    todo:todo
}