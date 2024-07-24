import axios from 'axios'

const backend = 'http://localhost:3000/vocabs/'

const handleError = fn => (...params) =>
   fn(...params).catch(error => {
      console.log(error)
   })

export const api = {
   getWords: handleError(async () => {
      const res = await axios.get(backend)
      return res.data
   })
}

