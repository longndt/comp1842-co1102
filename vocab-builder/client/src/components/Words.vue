<template>
  <div class="ui center aligned container">
    <h1>Word List</h1>
    <table id="words" class="ui celled compact table">
      <thead>
        <tr>
          <th>English</th>
          <th>German</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(word, i) in words" :key="i">
          <td>{{ word.english }}</td>
          <td>{{ word.german }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { api } from "../api"

export default {
  name: 'Words',
  data() {
    return {
      words: []
    }
  },
  async mounted() {
    this.words = await api.getAllWords()
  }
}
</script>
