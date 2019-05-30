<template>
  <div class="Repo">
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