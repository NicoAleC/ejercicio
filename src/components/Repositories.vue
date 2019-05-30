<template>
  <div class="container">
    <div class="row">
      <div class="card text-white bg-dark mb-3 col-4" v-for="item in getData()" :key="item.name">
        <img class="card-img" :src="item.avatar_url" alt="Card image" style="width:100%">
        <div class="card-body">
          <h4 class="card-name">User: {{item.name}}</h4>
          <h4 class="card-nick">Nick: {{item.nickName}}</h4>
          <h6 class="card-url">Url: {{item.github_url}}</h6>
          <a :href="item.github_url" class="btn btn-primary">See Repository</a>
        </div>
      </div>
    </div>
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
    getData() {
      for (var i = 0; i < this.data.length; i++) {
        if (this.data[i].avatar_url === undefined) {
          this.data[i].avatar_url = "https://help.github.com/assets/images/help/profile/identicon.png";
        }
      }
      return this.data;
    }
  },
  name: "repositories"
};
</script>