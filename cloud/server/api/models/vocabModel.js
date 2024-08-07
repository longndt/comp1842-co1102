const mongoose = require('mongoose')
const vocabSchema = mongoose.Schema(
   {
      english: {
         type: String,
         required: "English word can not be empty"
      },
      german: {
         type: String,
         required: "German word can not be empty"
      }
   },
   {
      versionKey: false  //ignore version key for new data
   }
)
const vocabModel = mongoose.model('vocabs', vocabSchema)
//vocabs: collection (table) name
module.exports = vocabModel