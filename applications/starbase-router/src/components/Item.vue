<template>
  <div class="col-md-4">
    {{item}}
  </div>
</template>

<script>
export default {
  name: 'Item',
  props: [ 'item' ]
}
</script>