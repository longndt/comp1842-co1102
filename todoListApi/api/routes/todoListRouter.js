const router = (app) => {
   //import controller
   // .. (2 dots): go up (outside) 1 level
   const todoList = require('../controllers/todoListController')

   //declare todo list routes
   //1st: without parameter "taskId"
   app.route('/tasks')
      .get(todoList.list_all_tasks)
   //2nd with parameter "taskId"
   app.route('/tasks/:taskId')
      .get(todoList.read_a_task)
}

module.exports = router