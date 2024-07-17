const Task = require('../models/todoListModel')

const list_all_tasks = async (req, res) => {
   try {
      //SELECT * FROM tasks
      let data = await Task.find({})
      //return data in JSON format (API)
      res.json(data)
   } catch (err) {
      //show error (if have)
      res.send(err)
   }
}
read_a_task = async (req, res) => {
   try {
      let id = req.params.taskId
      let data = await Task.findById(id)
      res.json(data)
   } catch (err) {
      res.send(err)
   }
}

// • create_a_task
// • update_a_task
// • delete_a_task

module.exports = {
   list_all_tasks,
   read_a_task
}
