import axios from 'axios'

const baseURL = 'http://localhost:3000/words/'

const handleError = fn => (...params) =>
fn(...params).catch(error => {
   console.log(error)
})

export const api = {
   getWords: handleError(async () => {
      const res = await axios.get(baseURL)
      return res.data
   })
}

