<template>
  <v-container>
    <v-divider></v-divider>
    <h2 style="text-align:center;font-family:'times new roman">
      <b>{{ organisationDetailSGetter.name_of_organisation }}</b>
    </h2>
    <v-divider></v-divider>
    <v-row>
      <v-col md="4">
        <v-card
          style="padding-left: 5%; padding-right: 5%; padding-bottom: 5%;height: 100%;"
        >
          <v-card-title class="text-center" style="width:100%;">
            <b>Organisation Details.</b>
            <v-btn style="float:right;" icon color="blue">
              <v-icon>mdi-pencil</v-icon>
            </v-btn>
          </v-card-title>
          <v-card-subtitle style="color: black; text-align: center">
            <b>{{ organisationDetailSGetter.name_of_organisation }}</b>
          </v-card-subtitle>

          <v-simple-table>
            <tbody>
              <tr>
                <td>Name Of Organiation:</td>
                <td>
                  <b>{{ organisationDetailSGetter.name_of_organisation }}</b>
                </td>
              </tr>
              <tr>
                <td>Oranisation Description</td>
                <td>
                  <b>{{ organisationDetailSGetter.description }}</b>
                </td>
              </tr>
              <tr>
                <td>Country Of Residence:</td>
                <td>
                  <b>{{ organisationDetailSGetter.country }}</b>
                </td>
              </tr>
              <tr>
                <td>Addres:</td>
                <td>
                  <b>{{ organisationDetailSGetter.address }}</b>
                </td>
              </tr>
              <tr>
                <td>Organisation Point Person:</td>
                <td>
                  <b>{{ organisationDetailSGetter.points_person_name }}</b>
                </td>
              </tr>
              <tr>
                <td>Organisation Point Person Phone number:</td>
                <td>
                  <b>{{
                    organisationDetailSGetter.points_person_phone_number
                  }}</b>
                </td>
              </tr>
              <tr>
                <td>Organisation Point Person Email Address:</td>
                <td>
                  <b>{{
                    organisationDetailSGetter.points_person_phone_email
                  }}</b>
                </td>
              </tr>
              <tr>
                <td>Contract Start Date:</td>
                <td>
                  <b>{{ organisationDetailSGetter.contract_start_date }}</b>
                </td>
              </tr>
              <tr>
                <td>Contract End Date:</td>
                <td>
                  <b>{{ organisationDetailSGetter.contract_end_date }}</b>
                </td>
              </tr>
            </tbody>
          </v-simple-table>

          <v-row> </v-row>
        </v-card>
      </v-col>
      <v-col md="8">
        <v-card
          style="padding-left: 5%; padding-right: 5%; padding-bottom: 5%;height: 100%;"
        >
          <v-card-title class="text-center">
            <b>Organisation Users.</b>
          </v-card-title>
          <v-card-subtitle style="color: black; text-align: center">
            <b>{{ organisationDetailSGetter.name_of_organisation }}</b>
          </v-card-subtitle>

          <v-simple-table>
            <thead>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Actions.</th>
            </thead>
            <tbody>
              <tr
                :key="index"
                v-for="(userRegistered, index) in usersRegisteredGetter"
              >
                <td :key="index + 'name'">{{ userRegistered.name }}</td>
                <td :key="index + 'email'">{{ userRegistered.email }}</td>
                <td :key="index + 'role'">{{ userRegistered.role[0] }}</td>
                <td :key="index + 'action'">
                  <div class="d-inline ">
                    <v-btn class="d-inline" icon color="blue">
                      <v-icon>mdi-pencil</v-icon>
                    </v-btn>
                  </div>
                  <div class="d-inline ">
                    <v-btn class="d-inline" icon color="red">
                      <v-icon>mdi-delete</v-icon>
                    </v-btn>
                  </div>
                </td>
              </tr>

            </tbody>
          </v-simple-table>
          <h4 style="text-align:center;" class="ma-4"> Logged In User:</h4>
          <v-simple-table>
             <thead>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>              
            </thead>
            <tbody>
              <tr>
                <td>{{userDetailsGetter.name}}</td>
                <td>{{userDetailsGetter.email}}</td>
                <td>{{userRoleGetter['roles'][0]}}</td>
                
              </tr>
            </tbody>
          </v-simple-table>
          <v-row> </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// import Chart from "chart.js";
// import Chart2 from "chartjs-gauge";
// import ChartDataLabels from "chartjs-plugin-datalabels";
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

  created() {},
  name: "HelloWorld",

  data: () => ({}),
};
</script>
