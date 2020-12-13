<template>
  <v-app>
    <v-app-bar app color="#f7b7b7" dark style="text-align:center;">
      <h2
        style="text-align:center;color:black;font-family:'times new roman';margin-left:43.2%;"
      >
        Serianu Dashboard.
      </h2>
      <v-spacer></v-spacer>
      <router-link
        style="text-align:center;color:blue;font-family:'times new roman';margin-right:2%;text-decoration:none;"
        to="/home"
        ><h3>DashBoard 1</h3></router-link
      >
      <router-link
        style="text-align:center;color:blue;font-family:'times new roman';margin-right:2%;text-decoration:none;"
        to="/second"
        ><h3>DashBoard 2</h3></router-link
      >
    </v-app-bar>

    <v-main style="background-color:rgb(247, 237, 237);">
      <template v-if="dataGettingStatusGetter"
        ><router-view></router-view
      ></template>
      <div v-else>
        <v-container class="fill-height" style="margin-top:10%">
          <v-row align="center" justify="center">
            <h2 style="color:#0000FF;">Getting Ready.</h2>
          </v-row>

          <v-row align="center" justify="center">
            <atom-spinner
              :animation-duration="1000"
              :size="150"
              :color="'#0000FF'"
            />
          </v-row>
          <v-row align="center" justify="center">
            <h4 style="color:#0000FF;">Just A Second</h4>
            <hollow-dots-spinner
              :animation-duration="1000"
              :dot-size="10"
              :dots-num="4"
              color="#0000FF"
            />
          </v-row>
        </v-container>
      </div>
    </v-main>
  </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld';
import { mapGetters } from "vuex";
import { AtomSpinner } from "epic-spinners";
import { HollowDotsSpinner } from "epic-spinners";

export default {
  name: "App",
  computed: {
    ...mapGetters(["dataGetter", "dataGettingStatusGetter"]),
  },
  created() {
    // ! this wil be resposiblefor loading the data once the application is hit.
    this.$store.commit("UPDATING_DATA_GETTING_STATUS", false);    
    this.$store.dispatch("fetchData");
  },
  components: {
    AtomSpinner,
    HollowDotsSpinner,
  },
  data: () => ({
    //
  }),
};
</script>
