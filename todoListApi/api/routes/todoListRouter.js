const router = (app) => {
   //import controller
   // .. (2 dots): go up (outside) 1 level
   const todoList = require('../controllers/todoListController')

   //declare todo list routes
   //Note: Task_id is automatically created
   //1st: without parameter "taskId"
   app.route('/tasks')
      .get(todoList.list_all_tasks)
}

module.exports = router