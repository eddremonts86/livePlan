<template>
  <div class="about">
    <h1>This is an contact page {{currentRouteName}}</h1>
  </div>
</template>
<script>
export default {
  name: 'About',
  computed: {
    currentRouteName() {
      return this.$route.name;
    },
  },
};
</script>
