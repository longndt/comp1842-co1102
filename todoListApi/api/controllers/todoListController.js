const Task = require('../models/todoListModel')

const list_all_tasks = async (req, res) => {
   var tasks = await Task.find({})
   res.json(tasks)
}

module.exports = {
   list_all_tasks
}
