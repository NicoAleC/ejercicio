<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <router-link to="/repositories"><button>Repositories</button></router-link>
  </div>
</template>

<script>
export default {
  name: 'index',
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: #2ecf71;
}
</style>
