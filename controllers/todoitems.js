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

// exports.list = async (req, res) => {
//     try {
//         const todoItem = await TodoItem.find().where({
//             todoId: req.params.todoId
//         }); 
//         res.status(200).send(todoItem)
//     } catch (e) {
//         res.status(400).send(e)
//     }
// }
