<template>
  <div class="col-md-4">
    <div class="item-card">
      <div class="card-block">
        <h4 class="card-title">{{item.name}}</h4>
        <div 
          v-for="(value, key, index) in item"
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
  props: [ 'item' ]
}
</script>