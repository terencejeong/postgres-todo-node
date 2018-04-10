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
            }]
        }); 
        res.status(200).send(todo)

    } catch (e) {
        res.status(400).send(e)
    }
};
