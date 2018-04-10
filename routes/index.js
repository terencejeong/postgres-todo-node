const todosController = require("../controllers/todos");
const todoItemsController = require("../controllers/todoitems");

module.exports = app => {
  app.get("/api", (req, res) =>
    res.status(200).send({
      message: "Welcome to the Todos API!"
    })
  );

  // getting list of todos
  app.get("/api/todos", todosController.list)

  // posting todos
  app.post("/api/todos", todosController.create);

  // posting todo items - grabbing ID from params. 
  app.post("/api/todos/:todoId/items", todoItemsController.create); 

  // getting single todo and todoitems associated with todo
  app.get("/api/todos/:todoId", todosController.findTodo)

  // editing the todo of a single todo
  app.put('/api/todos/:todoId', todosController.updateTodo)

  // deleting the todo. 
  app.delete("/api/todos/:todoId", todosController.deleteTodo);

  // editing the todoItem of a todo. 
  app.put('/api/todos/:todoId/items/:todoItemId', todoItemsController.updateTodoItem)

  // deleting the todoItem of a todo
  app.delete('/api/todos/:todoId/items/:todoItemId', todoItemsController.deleteTodoItem)
};
