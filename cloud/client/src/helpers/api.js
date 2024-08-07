import axios from 'axios'

//replace backend URL from "local" to "cloud"
const backEnd = "https://server-16xq.onrender.com/vocabs/"

export const ViewAllVocabs = async () => {
   try {
      let response = await axios.get(backEnd)
      return response.data
   } catch (err) {
      console.error(err)
   }
}

export const AddNewVocab = async (word) => {
   try {
      let response = await axios.post(backEnd, word)
      return response.data
   } catch (err) {
      console.error(err)
   }
}

export const UpdateVocab = async (id, word) => {
   try {
      let response = await axios.put(backEnd + id, word)
      return response.data
   } catch (err) {
      console.error(err)
   }
}

export const ViewVocabById = async (id) => {
   try {
      let response = await axios.get(backEnd + id)
      return response.data
   } catch (err) {
      console.error(err)
   }
}

export const DeleteAllVocabs = async () => {
   try {
      let response = await axios.delete(backEnd)
      return response.data
   } catch (err) {
      console.error(err)
   }
}

export const DeleteVocab = async (id) => {
   try {
      let response = await axios.delete(backEnd + id)
      return response.data
   } catch (err) {
      console.error(err)
   }
}