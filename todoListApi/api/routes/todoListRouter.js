const router = (app) => {
   //import controller
   // .. (2 dots): go up (outside) 1 level
   const Task = require('../controllers/todoListController')

   //declare todo list routes
   //1st: without parameter "taskId"
   app.route('/tasks')
      .get(Task.list_all_tasks)
      .post(Task.create_a_task)

   //2nd with parameter "taskId"
   app.route('/tasks/:taskId')
      .get(Task.read_a_task)
      .delete(Task.delete_a_task)
      .put(Task.update_a_task)
}

module.exports = router