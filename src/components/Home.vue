<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <router-link to="/repositories"><button>Repositories</button></router-link>
  </div>
</template>

<script>
export default {
  name: 'Home',
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.button {
  top: 0;
  padding: 0;
  border: none;
  background: none;
  margin-right: 0px;
  position: absolute;
  border-style: solid;
  border-color: #3c3c3c;
  border-right-width: 1px;
  float: left;
  width: 30%;
  height: 40px;
  font-family: inherit;
  background-color: #3c3c3c;
  color: #fff;
  transition: all 0.5s;
  position: relative;
  padding-top: 10px;
  padding-bottom: 10px;
}
.button::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  background-color: rgba(255, 255, 255, 0.1);
  transition: all 0.3s;
}
.button:hover::before {
  opacity: 0;
  transform: scale(0.5, 0.5);
}
.button::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  opacity: 0;
  transition: all 0.3s;
  border: 1px solid rgba(255, 255, 255, 0.5);
  transform: scale(1.2, 1.2);
}
.button:hover::after {
  opacity: 1;
  transform: scale(1, 1);
}
</style>
