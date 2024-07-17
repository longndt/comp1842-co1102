//declare & import mongoose library to work with database
const mongoose = require('mongoose')

//declare schema (collection/table design/structure)
const Schema = mongoose.Schema;

//declare TaskSchema (structure/design of "Task" collection/table)
const TaskSchema = new Schema({
   //shorthand => name: String
   name: {
      type: String,
      //required   => return default error message if value is empty
      required: "Task name can not be empty"   //return custom error message
   },
   created_date: {
      type: Date,
      default: Date.now      //set default value is current date (based on system date)
   },
   status: {
      type: [{
         type: String,
         enum: ['pending', 'on-going', 'completed']   // 'to-do', 'doing', 'done'
      }],
      default: "pending"
   }
})

//VERY IMPORTANT: export module at last
const todoListModel = mongoose.model('tasks', TaskSchema)
module.exports = todoListModel