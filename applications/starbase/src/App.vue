<template>
<div id="app">
  <h3>{{ title }}</h3>
  <Character :id="1"/>
</div>
</template>

<script>
import Character from './components/Character.vue';

export default {
  name: 'app',
  data() {
    return {
      title: 'Generate Your Team'
    }
  },
  components: {
    Character
  }
}
</script>