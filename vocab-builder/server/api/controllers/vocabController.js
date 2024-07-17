const vocabModel = require('../models/vocabModel')

const view_all_vocab = async (req, res) => {
   try {
      vocabs = await vocabModel.find({})
      res.json(vocabs)
   } catch (err) {
      res.send(err)
   }
}

const view_a_vocab = async (req, res) => {
   try {
      id = req.params.id
      vocab = await vocabModel.findById(id)
      res.json(vocab)
   } catch (err) {
      res.send(err)
   }
}

const delete_a_vocab = async (req, res) => {
   try {
      id = req.params.id
      await vocabModel.findByIdAndDelete(id)
      //await vocabModel.deleteOne(id)
      res.json({ message : "Delete a vocab succeed !"})
   } catch (err) {
      res.send(err)
   }
}

const delete_all_vocab = async (req, res) => {
   try {
      await vocabModel.deleteMany()
      res.json({ message: "Delete all vocabs succeed !" })
   } catch (err) {
      res.send(err)
   }
}

const add_vocab = async (req, res) => {
   try {
      vocab = req.body
      await vocabModel.create(vocab)
      //await vocabModel.save(vocab)
      res.json({ message: "Add new vocab succeed !" })
   } catch (err) {
      res.send(err)
   }
}

const update_vocab = async (req, res) => {
   try {
      id = req.params.id
      vocab = req.body
      await vocabModel.findByIdAndUpdate(id, vocab)
      //await vocabModel.findOneAndUpdate(id, vocab)
      res.json({ message: "Update vocab succeed !" })
   } catch (err) {
      res.send(err)
   }
}

module.exports = {
   view_all_vocab,
   add_vocab,
   view_a_vocab,
   update_vocab,
   delete_all_vocab,
   delete_a_vocab
}