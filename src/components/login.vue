<template>
  <v-main style="background-color:rgb(247, 237, 237);">
    <div>
      <v-container class="fill-height" style="margin-top:10%;">
        <v-row>
          <v-col md="4" offset-md="4">
            <v-row justify="space-around">
              <v-avatar
                color="primary"
                size="70"
                style="margin-top:-15%;margin-bottom:5%;"
              >
                <v-icon dark size="40">
                  mdi-lock-open
                </v-icon>
              </v-avatar>
            </v-row>
            <v-card
              style="
              padding-left: 10%;
              padding-right: 10%;
              padding-bottom: 10%;
              height: 100%;
            "
            >
              <v-row justify="space-around">
                <h4></h4>
                <span style="margin-top:9%;margin-bottom:5%;"
                  >Sign in to start your session</span
                >
              </v-row>
              <v-form ref="form2" v-model="form2Validation">
                <v-row justify="space-around">
                  <v-text-field
                    :rules="[rules.emailFormat,rules.required]"
                    counter
                    required
                    v-model="personalData['email']"
                    label="Email Address"
                    prepend-icon="mdi-email"
                  ></v-text-field>
                  <p style="color:red;margin-top:-5.5%;margin-bottom:-5.5%;font-size:13px;text-align:center;width:70%;" class="text-center" v-if="successLogInGetter == 2"> <v-icon color="red">mdi-exclamation</v-icon>Username And Pasword Don't Match. Try Again</p>                
                </v-row>
                <v-row justify="space-around">
                  <v-text-field
                    prepend-icon="mdi-key"
                    v-model="personalData['password']"
                    :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                    :rules="[rules.required]"
                    :type="show1 ? 'text' : 'password'"
                    name="input-10-1"
                    label="Password"
                    hint="At least 8 characters"
                    counter
                    @click:append="show1 = !show1"
                  ></v-text-field>
                </v-row>
                <v-row justify="space-around">
                  <v-btn
                    style="margin-top:7%"
                    @click="movingFromStep2ToStep3()"
                    rounded
                    color="green"
                    large
                    dark
                  >
                  <span v-if="loginStatusGetter">
                       <v-progress-circular
                    :width="3"      
                    indeterminate
                  ></v-progress-circular>
                  authenticating .... 
                  </span>
                  <span v-else>
                  <v-icon>mdi-lock-open</v-icon> Log In
                  </span>     
                  </v-btn>
                </v-row>
              </v-form>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </v-main>
</template>

<script>
import { mapGetters } from "vuex";
export default {
    computed: {
    ...mapGetters(["successLogInGetter","loginStatusGetter"]),
  },
  name: "LogIn",
  created(){
    this.$store.commit('UPDATING_SUCCESSFUL_LOGIN',null);
  },
  data() {
    return {
      form2Validation: false,
      show1: false,
      show2: true,
      show3: false,
      show4: false,
      password: "",
      personalData: [],
      rules: {
        required: (value) => !!value || "Required.",        
        emailFormat: (ve) => /.+@.+\..+/.test(ve) || "E-mail must be valid",
        emailMatch: () => `The email and password you entered don't match`,
      },
    //   emailRules: [
    //     (v) => !!v || "E-mail is required",
    //     (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    //   ],
    };
  },
  methods: {
    movingFromStep2ToStep3() {
      if (this.$refs.form2.validate()) {
        // post data
        this.$store.commit('UPDATING_SUCCESSFUL_LOGIN',null);
        this.$store.commit("UPDATING_LOGIN_STATUS",true);
        this.$store.dispatch('postLogInData',this.personalData);

      }
    },
  },
};
</script>

<style></style>
