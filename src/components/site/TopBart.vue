<template>
   <v-app-bar app color="white">
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>
      <a href="/">Home</a>
      <a href="/dashboard">Dashboard</a>
      <a href="/about">About</a>
      <a href="/contact">Contact</a>
    </v-app-bar>
</template>
<style>
a{
  padding: 5px 10px;
  text-decoration: none;
}
</style>
