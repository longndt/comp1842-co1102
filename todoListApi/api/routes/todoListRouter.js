const router = (app) => {
   //import controller
   // .. (2 dots): go up (outside) 1 level
   const todoList = require('../controllers/todoListController')

   //declare todo list routes
   //Note: Task_id is automatically created
   //1st: without parameter "taskId"
   app.route('/tasks')
      .get(todoList.view_all_tasks)
      .post(todoList.create_new_task)

   //2nd: with parameter "taskId"
   app.route('/tasks/:taskId')
      .get(todoList.view_task_by_id)
      .put(todoList.update_task)
      .delete(todoList.delete_task)
}

module.exports = router