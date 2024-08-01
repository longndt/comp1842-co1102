const router = (app) => {
   const VocabController = require('../controllers/vocabController')

   app.route('/vocabs')
      .get(VocabController.view_all_vocab)
      .post(VocabController.add_vocab)
      .delete(VocabController.delete_all_vocab)

   app.route('/vocabs/:id')
      .get(VocabController.view_a_vocab)
      .put(VocabController.update_vocab)
      .delete(VocabController.delete_a_vocab)
}

module.exports = router