<template>
  <div>
    <div>Server status {{ status }}</div>
    <hr/>
    <button @click="changeStatus">Change status</button>
  </div>
</template>

<script>
export default {
  data: function(){
      return {status: "Original state"}
  },
  methods: {
      changeStatus() {
          this.status = "Changed"
      }
  }
}
</script>

<style>

</style>
