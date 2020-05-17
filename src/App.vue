<template>
  <v-app>
    <topBar></topBar>
    <v-content class="ma-5">
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
import topBar from '@/components/site/TopBart.vue';

export default {
  name: 'App',
  data: () => ({}),
  components: { topBar },
};
</script>
