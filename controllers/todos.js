const Todo = require('../models').Todo;


exports.create = (req, res) => {
    return Todo
      .create({
        title: req.body.title,
      })
      .then(todo => res.status(201).send(todo))
      .catch(error => res.status(400).send(error));
  };

exports.list = async (req, res) => {

    try {
        const todo = await Todo.all(); 
         res.status(200).send(todo)
    } catch (e) {
        res.status(400).send(e)
    }
   

}
