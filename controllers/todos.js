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
