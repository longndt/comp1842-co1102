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
          <td>
            <router-link
              class="ui button green"
              :to="{ name: 'Show', params: { id: word._id } }"
            >
              Show
            </router-link>
          </td>
          <td>
            <router-link
              class="ui button yellow"
              :to="{ name: 'Edit', params: { id: word._id } }"
            >
              Edit
            </router-link>
          </td>
          <td>
            <a class="ui button red" @click.prevent="onDelete(word._id)">
              Delete
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { ViewAllVocabs, DeleteVocab } from "../helpers/api";

export default {
  name: "Words",
  data() {
    return {
      words: [],
    };
  },
  async mounted() {
    this.words = await ViewAllVocabs();
  },
  methods: {
    async onDelete(id) {
      //1. display confirm message before deletion
      const deleteConfirm = window.confirm(
        "Are you sure to delete this word ?"
      );
      if (deleteConfirm) {
        //2. delete word from database
        await DeleteVocab(id);
        //3. refresh the word list (remove deleted words)
        const updatedWords = this.words.filter((word) => word._id !== id);
        this.words = updatedWords;
        //4. display flash message after deletion
        this.flash("Delete word succeed !");
      }
    },
  },
};
</script>
