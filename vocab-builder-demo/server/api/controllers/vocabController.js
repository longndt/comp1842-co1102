const vocabModel = require('../models/vocabModel')

exports.view_all_vocab = async (req, res) => {
   try {
      vocabs = await vocabModel.find({})
      res.json(vocabs)
   } catch (err) {
      res.send(err)
   }
}

exports.view_a_vocab = async (req, res) => {
   try {
      id = req.params.id
      vocab = await vocabModel.findById(id)
      res.json(vocab)
   } catch (err) {
      res.send(err)
   }
}

exports.delete_a_vocab = async (req, res) => {
   try {
      id = req.params.id
      await vocabModel.findByIdAndDelete(id)
      res.json({ message : "Delete a vocab succeed !"})
   } catch (err) {
      res.send(err)
   }
}

exports.delete_all_vocab = async (req, res) => {
   try {
      await vocabModel.deleteMany()
      res.json({ message: "Delete all vocabs succeed !" })
   } catch (err) {
      res.send(err)
   }
}

exports.add_vocab = async (req, res) => {
   try {
      vocab = req.body
      await vocabModel.create(vocab)
      res.json({ message: "Add new vocab succeed !" })
   } catch (err) {
      res.send(err)
   }
}

exports.update_vocab = async (req, res) => {
   try {
      id = req.params.id
      vocab = req.body
      await vocabModel.findByIdAndUpdate(id, vocab)
      res.json({ message: "Update vocab succeed !" })
   } catch (err) {
      res.send(err)
   }
}