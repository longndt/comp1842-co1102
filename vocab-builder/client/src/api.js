import axios from 'axios';

const backend = 'http://localhost:3000/vocabs'

const getAllWords = async () => {
   try {
      const response = await axios.get(backend)
      return response.data
   } catch (err) {
      console.error(err)
   }
}

export const api = {
   getAllWords
}
