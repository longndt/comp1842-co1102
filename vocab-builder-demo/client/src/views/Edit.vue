<template>
  <div>
    <h1>Edit Word</h1>
    <word-form @createOrUpdate="createOrUpdate" :word="this.word"></word-form>
  </div>
</template>

<script>
import WordForm from "../components/WordForm.vue";
import { api } from "../helpers/helper"

export default {
  name: "edit",
  components: {
    "word-form": WordForm,
  },
  data: function () {
    return {
      word: {},
    };
  },
  methods: {
    createOrUpdate: async function (word) {
      await api.updateWord(word);
      //alert('Word updated successfully !')
      this.flash("Word update successfully !", "success");
      this.$router.push(`/words/`);
    },
  },
  async mounted() {
    this.word = await api.getWord(this.$route.params.id);
  }
};
</script>
