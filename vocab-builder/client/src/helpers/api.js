import axios from 'axios'

const backEnd = "http://localhost:3000/vocabs/"

const ViewAllVocabs = async () => {
   try {
      let response = axios.get(backEnd)
      return response.data
   } catch (err) {
      console.error(err)
   }
}

const ViewVocabById = async (id) => {
   try {
      let response = axios.get(backEnd + id)
      return response.data
   } catch (err) {
      console.error(err)
   }
}

export default api = {
   ViewAllVocabs,
   ViewVocabById
}