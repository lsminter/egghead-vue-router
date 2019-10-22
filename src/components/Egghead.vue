<template>
  <div id="egghead">
    <h1>This is where the Egghead Videos Go {{this.$route.meta.requiresAuth}}</h1>
  </div>
</template>


<script>
export default {
  name: "egghead"
};
</script>

<style scoped>
div {
  background-color: blue;
}
</style>
