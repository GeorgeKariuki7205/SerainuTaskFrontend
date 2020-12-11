<template>
  <v-app>
    <v-app-bar
      app
      color="#f7b7b7"
      dark
      style="text-align:center;"
    >
      <h2 style="text-align:center;color:black;font-family:'times new roman';margin-left:40%;">Serianu Dashboard.</h2>      
      <v-spacer></v-spacer>
      <h3 style="text-align:center;color:blue;font-family:'times new roman';margin-right:5%;">DashBoard 1 </h3>

      <h3 style="text-align:center;color:blue;font-family:'times new roman';margin-right:5%;">DashBoard 2 </h3>
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
