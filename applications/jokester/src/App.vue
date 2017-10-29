<template>
  <div id="app">
    <h3>Got jokes?</h3>
    <button 
      class="btn btn-primary"
      @click="initJokes"
    >
      Add Ten Random Jokes
    </button>
    <button
      class="btn btn-primary"
      @click="addJoke"
    >
      Add a Joke
    </button>
    <br>
    <br>
    <div class="row">
      <Joke
        v-for="(joke, index) in $store.state.jokes"
        :key="index"
        :index="index"
        :joke="joke"
      />
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import Joke from './components/Joke.vue'

export default {
  methods: mapActions([
    'initJokes',
    'addJoke'
  ]),
  components: {
    Joke
  }
}
</script>