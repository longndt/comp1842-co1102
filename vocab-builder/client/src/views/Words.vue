<template>
   <div>
      <table class="ui celled table">
         <thead>
            <tr>
               <th colspan="5">WORD LIST</th>
            </tr>
            <tr>
               <th>English</th>
               <th>German</th>
               <th colspan="3">Menu</th>
            </tr>
         </thead>
         <tbody>
               <tr v-for="(word, i) in words" :key="i">
               <td>{{ word.english }}</td>
               <td>{{ word.german }}</td>
               <td>Show</td>
               <td>Edit</td>
               <td>Delete</td>
            </tr>
         </tbody>
      </table>
   </div>
</template>

<script>
import { ViewAllVocabs, DeleteVocab } from '../helpers/api'

export default {
   name: 'Words',
   data() {
      return {
         words: []
      }
   },
   async mounted() {
      this.words = await ViewAllVocabs()
   }
}
</script>