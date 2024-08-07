<template>
  <div>
    <h1>Show word</h1>
    <div class="ui labeled input fluid">
      <div class="ui label">
        <i class="united kingdom flag"></i>
        English
      </div>
      <input type="text" disabled :value="word.english"/>
    </div>
    <br />
    <div class="ui labeled input fluid">
      <div class="ui label">
        <i class="germany flag"></i>
        German
      </div>
      <input type="text" disabled :value="word.german"/>
    </div>
    <br />
    <div>
      <router-link
        :to="{ name: 'Edit', params: { id: this.$route.params.id } }"
        class="ui yellow button"
      >
        Edit word
      </router-link>
    </div>
  </div>
</template>

<script>
import { ViewVocabById } from '../helpers/api';
export default {
  name: "Show",
  data() {
    return {
      word: "",
    };
  },
  async mounted() {
    this.word = await ViewVocabById(this.$route.params.id);
  },
};
</script>
