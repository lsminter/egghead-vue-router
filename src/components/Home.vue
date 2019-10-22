<template>
  <div id="home">
    <h1>Home Page</h1>
    <router-link tag="button" :to="'/Blog'"><h3>Go to Blog</h3></router-link>
    <router-link tag="button" :to="'/About-Me'"><h3>Go to About Me</h3></router-link>
    <router-link tag="button" :to="'/egghead'"><h3>Go to My Roll at Egghead</h3></router-link>
  </div>
</template>


<script>
export default {
  name: "home",

};
</script>

<style scoped>
div {
  background-color: green;
}
</style>