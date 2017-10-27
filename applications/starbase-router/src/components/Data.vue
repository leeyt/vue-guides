<template>
  <div class="row">
    <Item 
      v-for="(item, index) in items"
      :key="index"
      :type="type"
      :item="item"></Item>
  </div>
</template>

<script>
import Item from './Item.vue';

export default {
  components: {
    Item
  },
  data() {
    return {
      items: []
    }
  },
  computed: {
    type() {
      return this.$route.params.type;
    }
  },
  methods: {
    fetchItems() {
      this.items = [];
      let initial_ids = [1, 13, 14];

      for (let i in initial_ids) {
        let id = initial_ids[i];
        fetch(`http://swapi.co/api/${this.type}/${id}`, { method: 'GET'})
          .then(response => response.json())
          .then(json => this.items.push(json));
      }
    }
  },
  watch: {
    '$route': 'fetchItems'
  },
  created() {
    this.fetchItems();
  }
}
</script>