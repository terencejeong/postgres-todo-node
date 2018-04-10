const TodoItem = require('../models').TodoItem

exports.create = async (req, res) => {

    try {
        const todoItem = await TodoItem.create({
        content: req.body.content, 
        todoId: req.params.todoId
        }); 

        res.status(200).send(todoItem); 
    } catch(e) {
        res.status(400).send(e)
    }    
}

// update a TodoItem 
exports.updateTodoItem = async (req, res) => {
    try {
        const todoItem = await TodoItem.find(
            { where: 
                {   id: req.params.todoItemId, 
                    todoId: req.params.todoId   
                }
            })

        if(!todoItem) {
            return res.status(404).send({ message: "TodoItem not Found" });
        }    

        const editedTodoItem = await todoItem.update({
            content: req.body.content || todoItem.content, 
            complete: req.body.complete || todoItem.complete
        })

        res.status(200).send(editedTodoItem)
                    
    } catch (e) {
        res.status(400).send(e);
    }
}; 

// delete a TodoItem
exports.deleteTodoItem = async (req, res) => {

    try {
        const todoItem = await TodoItem.find({
            where: {
                id: req.params.todoItemId, 
                todoId: req.params.todoId
            }
        })

        if (!todoItem) {
            res.status(400).send({message: 'TodoItem not found!'})
        }

        await todoItem.destroy(); 
        res.status(200).send({message: 'TodoItem has been deleted'})
        
    } catch(e) {
        res.status(400).send(e);
    }
};