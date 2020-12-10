<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <h2 style="text-align:right;">Serainu Dashboard Task.</h2>      
    </v-app-bar>

    <v-main>
      <HelloWorld/>
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',

  components: {
    HelloWorld,
  },

  data: () => ({
    //
  }),
};
</script>
