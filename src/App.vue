<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
      style="text-align:center;"
    >
      <h2 style="text-align:center;color:black;">Serainu Dashboard Task.</h2>      
    </v-app-bar>

    <v-main style="background-color:rgb(247, 237, 237);">
      <HelloWorld/>
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';
import { mapGetters } from "vuex";
export default {
  name: 'App',
  computed: {
    ...mapGetters(["dataGetter"]),
  },
  created(){

    // ! this wil be resposiblefor loading the data once the application is hit.

    this.$store.dispatch("fetchData");
  },
  components: {
    HelloWorld,
  },

  data: () => ({
    //
  }),
};
</script>
