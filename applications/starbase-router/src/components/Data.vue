<template>
  <div class="">
    Type: {{type}}
  </div>
</template>

<script>
export default {
  computed: {
    type() {
      return this.$route.params.type
    } 
  },
}
</script>