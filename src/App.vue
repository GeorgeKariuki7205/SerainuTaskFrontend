<template>
  <v-app>
    <v-app-bar app color="#f7b7b7" dark style="text-align:center;padding-left:2%;" v-if="successLogInGetter === 1" >      
            <v-toolbar-title><b>{{ organisationDetailSGetter.name_of_organisation }}</b></v-toolbar-title>      
<v-spacer></v-spacer>
      <v-tabs right color="blue"
      centered
      dark
      icons-and-text style="font-size:13px;">
        <v-tabs-slider color="blue"></v-tabs-slider>
      <v-tab href="#tab-1" style="font-size:9px;" @click="redirectToDashboard(1)">
        Home <v-icon >mdi-home</v-icon> 
      </v-tab>

<v-tab href="#tab-6" v-if="userRoleGetter['roles'] == 'adminUser'" style="font-size:9px;" @click="redirectToDashboard(6)">
        Edit Data <v-icon>mdi-pen</v-icon> 
      </v-tab> 

      <v-tab href="#tab-2" style="font-size:9px;" @click="redirectToDashboard(2)">
        Loss Exposure <v-icon>mdi-eye</v-icon>         
      </v-tab>

      <v-tab href="#tab-3" style="font-size:9px;" @click="redirectToDashboard(3)">
        Threat Indicator <v-icon>mdi-chart-line</v-icon> 
      </v-tab> 

      <v-tab href="#tab-4" style="font-size:9px;" @click="redirectToDashboard(4)">
        Risk Maturity <v-icon>mdi-leaf</v-icon> 
      </v-tab> 

      <v-tab href="#tab-5" style="font-size:9px;" @click="redirectToDashboard(5)">
        Control Visibility <v-icon>mdi-solar-panel</v-icon> 
      </v-tab>   

      <v-menu
           style="font-size:9px;"
            bottom
            left
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn style="font-size:12px;"
                text
                class="align-self-center mr-4"
                v-bind="attrs"
                v-on="on"
              > <v-icon>mdi-account</v-icon> 
                account
                <v-icon right>
                  mdi-menu-down
                </v-icon>
              </v-btn>
            </template>

            <v-list class="white lighten-3"  min-width="200" dense>
              <v-subheader>USER ACCOUNT.</v-subheader>
              <v-list-item-group        
        color="primary"
      >
        <v-list-item          
        >
          <v-list-item-icon>
            <v-icon >mdi-account</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Account Details</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item   @click="logout()"       
        >
          <v-list-item-icon>
            <v-icon >mdi-account</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Logout</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
             
            </v-list>
          </v-menu>
            
      </v-tabs>               
    </v-app-bar>

    <v-main style="background-color:rgb(247, 237, 237);" v-if="successLogInGetter === 1">
      <router-view></router-view>
    </v-main>
    <v-main style="background-color:rgb(247, 237, 237);" v-else>
      <LogIn/>
    </v-main>
  </v-app>
</template>

<script>
import LogIn from './components/login';
import { mapGetters } from "vuex";
// import { AtomSpinner } from "epic-spinners";
// import { HollowDotsSpinner } from "epic-spinners";
import router from '../src/router'
export default {
  name: "App",
  computed: {
    ...mapGetters(["dataGetter", "dataGettingStatusGetter","loginStatusGetter","successLogInGetter","userDetailsGetter","organisationDetailSGetter","userRoleGetter"]),
  },
  created() {    
  },
  methods:{
    logout(){
      this.$store.commit("UPDATING_SUCCESSFUL_LOGIN",null);
    },
    redirectToDashboard(number){
      switch(number) {
  case 1:
    // code block
    router.push({ name: 'Home' })
    break;
  case 2:
    // code block
    router.push({ name: 'RiskAndLossExposureScore' })
    break;
      case 3:
    // code block
    router.push({ name: 'ThreatIndicatorAndExposureDashBoard' })
    break;
      case 4:
    // code block
    router.push({ name: 'RiskProfileAndMaturityScoreDashboard' })
    break;
      case 5:
    // code block
    router.push({ name: 'ControlVisibilityAndDeficiencyDashboard' })
    break;
      case 6:
    // code block
    router.push({ name: 'EditThreatIndicators' })
    break;
  default:
    // code block
    router.push({ name: 'Home' })
}
    }
  },
  components: {
    // AtomSpinner,
    // HollowDotsSpinner,
    LogIn
  },
  data: () => ({
    //
    tab: null,
  }),
};
</script>
