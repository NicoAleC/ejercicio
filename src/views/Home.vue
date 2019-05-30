<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Home msg="Welcome to a Vue.js App"/>
  </div>
</template>

<script>
import Home from '@/components/Home.vue';

export default {
  name: 'home',
  components: {
    Home,
  },
};
</script>
