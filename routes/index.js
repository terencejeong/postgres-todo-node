const todosController = require("../controllers/todos");
const todoItemsController = require("../controllers/todoitems");

module.exports = app => {
  app.get("/api", (req, res) =>
    res.status(200).send({
      message: "Welcome to the Todos API!"
    })
  );

  // getting list of todos
  app.get("/todos", todosController.list)

  // posting todos
  app.post("/api/todos", todosController.create);

  // posting todo items - grabbing ID from params. 
  app.post("/api/todos/:todoId/items", todoItemsController.create); 

};
