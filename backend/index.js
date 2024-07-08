const express = require("express");
const { createTodo, updateTodo } = require("./types");// it is how it is imported from the file to use here
const { todo } = require("./db");
const app = express();
const cors = require("cors")


app.use(express.json());
app.use(cors())

app.post("/todo",async function(req,res){
    const createPayload = req.body;
    const parsedPayload  = createTodo.safeParse(createPayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg:"you have entered the wrong inputs"
        })
        return;
    }
     //put it in mongoDB
     /*Interacting with a database, such as creating a new document in MongoDB, is an asynchronous 
     operation. This means it doesn't complete immediately and needs time to execute. 
     Using await ensures that the function waits for the database operation to complete before 
     moving on to the next line of code.*/

  await todo.create({
    title: createPayload.title,
    description: createPayload.description,
    completed: false
  })
  res.json({
    msg: "Todo Created"
  })
})
app.get("/todos",async (req,res)=>{
    const todos = await todo.find({});
    res.json({
        todos
    })      
})

app.put("/completed",async function(req,res){

    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);

    if(!parsedPayload.success){
        res.status(411).json({
            msg:"you have enterd the wrong inputs",
        })

        return;
    }

    await todo.update({  // update ask for 2 arguments
        _id: req.body.id
    },{
        completed: true
    })
    res.json({
        msg:"Todo marked as completed"
    })

})

app.listen(3000);