<template>
  <div class="col-md-4">
    <div class="item-card" @click="switchItem">
      <div class="card-block">
        <h4 class="card-title">{{item$.name}}</h4>
        <div 
          v-for="(value, key, index) in item$"
          :key="key">
          <div v-if="index < 5">
            <strong>{{key}}</strong>: {{value}}</strong>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Item',
  props: [ 'item', 'type' ],
  data() {
    return {
      item$: null
    }
  },
  methods: {
    switchItem() {
      let random_id = Math.floor(Math.random() * 63) + 1;
      fetch(`http://swapi.co/api/${this.type}/${random_id}`, { method: 'GET' })
        .then(response => response.json())
        .then(json => this.item$ = json);
    }
  },
  created() {
    this.item$ = this.item;
  }
}
</script>