<template>
  <div id="blog">
    <h1>This is blog {{this.$route.params.id}}</h1>
  </div>
</template>


<script>
export default {
  name: "blog"
};
</script>

<style scoped>
div {
  background-color: purple;
}
</style>
