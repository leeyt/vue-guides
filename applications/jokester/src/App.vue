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
    <span 
      v-for="type in types"
      :key="type"
    >
      <input 
        type="checkbox"
        :value="type" 
        v-model="checkedTypes"
        checked
      >
      <label>{{type}}</label>&nbsp;
    </span>
    <br>
    <div class="row">
      <Joke
        v-for="(joke, index) in $store.state.jokes"
        v-show="checkedTypes.includes(joke.type)"
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
  data() {
    return {
      types: [ 'general', 'knock-knock', 'programming' ],
      checkedTypes: [ 'general', 'knock-knock', 'programming' ]
    }
  },
  methods: mapActions([
    'initJokes',
    'addJoke'
  ]),
  components: {
    Joke
  }
}
</script>