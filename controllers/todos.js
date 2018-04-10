const Todo = require('../models').Todo;
const TodoItem = require('../models').TodoItem

exports.create = async (req, res) => {

    try {
        const todo = await Todo.create({title: req.body.title})
        res.status(201).send(todo); 
    } catch(e) {
        res.status(400).send(e); 
    }

  };

exports.list = async (req, res) => {

    try {
        const todo = await Todo.findAll({
            include: [{
                model: TodoItem, 
                as: 'todoItems'
            }] // need to pluralize the as! 
        }); 
        res.status(200).send(todo)

    } catch (e) {
        res.status(400).send(e)
    }
};

exports.findTodo =  async (req, res) => {
    try {
        const todo = await Todo.findById(req.params.todoId, {
        include: [{
            model: TodoItem, 
            as: 'todoItems'
            }]        
        });
        
        if (!todo) {
            return res.status(404).send({
                message: "Todo not Found"
            })
        }
        res.status(200).send(todo)

        } catch (e) {
            res.status(400).send(e);
        }
    

}

exports.updateTodo = async (req, res) => {
    
    try{
        const todo = await Todo.findById(req.params.todoId, {
        include: [{
            model: TodoItem, 
            as: 'todoItems'
            }]        
        });
            
        if (!todo) {
          return res.status(404).send({ message: "Todo not Found" });
        }

        const updatedTodo = await todo.update({
            title: req.body.title || todo.title
        })

        res.status(200).send(updatedTodo)

    } catch (e) {
        res.status(400).send(e); 
    }
}; 

exports.deleteTodo = async (req, res) =>  {

    try{
        const todo = await Todo.findById(req.params.todoId)
        
        if (!todo) {
            return res.status(404).send({ message: "Todo not Found" });
        } 

         await todo.destroy(); 
         
         res.send('Todo has been deleted'); 
    } catch (e) {
        res.status(400).send(e);
    }
    
}