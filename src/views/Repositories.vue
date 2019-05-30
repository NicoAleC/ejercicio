<template>
  <div class="Repo">
    <h1>This is an Repo page</h1>
    <Repositories/>
  </div>
</template>

<script>
import Repositories from '@/components/Repositories.vue';

export default {
  name: 'repositories',
  components: {
    Repositories,
  },
};
</script>