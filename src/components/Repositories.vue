<template>
  <div>
    <h1>HOLAAAAA</h1>

    <div class="card text-white bg-dark mb-3 col-4" v-for="item in data" :key="item.name">
      <img class="card-img" :src="item.avatar_url" alt="Card image" style="width:100%">
      <div class="card-body">
        <h4 class="card-name">User: {{item.name}}</h4>
        <h4 class="card-nick">Nick: {{item.nickName}}</h4>
        <h6 class="card-url">Url: {{item.github_url}}</h6>
        <a :href="item.github_url" class="btn btn-primary">See Repository</a>
      </div>
    </div>
    <button v-on:click="imprimir">Imprimir</button>
  </div>
</template>

<script>
import Data from "@/assets/daja.json";

export default {
  data() {
    return {
      data: Data.users
    };
  },
  methods: {
    imprimir() {
      console.log(this.data);
    }
  },
  name: "repositories"
};
</script>