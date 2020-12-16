<template>
  <v-container>
    <v-divider></v-divider>
    <h2 style="text-align:center;font-family:'times new roman">
      {{ organisationDetailSGetter.name_of_organisation }} Risk Profile And Maturity Score Dashboard
    </h2>
    <v-divider></v-divider>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters([
      "dataGetter",
      "dataGettingStatusGetter",
      "loginStatusGetter",
      "successLogInGetter",
      "userDetailsGetter",
      "organisationDetailSGetter",
      "userRoleGetter",
      "usersRegisteredGetter",
    ]),
  },
  name: "RiskProfileAndMaturityScoreDashboard",
};
</script>

<style></style>
