<template>
  <div>
    <h1 class="ui center aligned container">Words</h1>
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
import { api } from "../helpers/helpers";

export default {
  name: "words",
  data() {
    return {
      words: [],
    };
  },
  async mounted() {
    this.words = await api.getWords();
  },
};
</script>
