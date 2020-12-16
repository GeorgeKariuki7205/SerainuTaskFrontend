import axios from "axios";
import router from "../../../router"
const state = { 
dataState: null,
dataGettingStatus: false, 
loginStatus: false,
successLogIn: null,
userDetails:null,
organisationDetailS:null,
userRole:null,
usersRegistered: null,
};
const mutations = {
  UPDATING_STATE(state,payload){
      state.dataState = payload;
  },
  UPDATING_DATA_GETTING_STATUS(state,payload){
    state.dataGettingStatus = payload;
  },
  UPDATING_LOGIN_STATUS(state,payload){
    state.loginStatus = payload;
  },
  UPDATING_SUCCESSFUL_LOGIN(state,payload){
    state.successLogIn = payload;
  },
  UPDATING_USER_DETAILS(state,payload){
    state.userDetails = payload;
  },
  UPDATING_ORGANISATION_DETAILS(state,payload){
    state.organisationDetailS = payload;
  },
  UPDATING_USER_ROLES(state,payload){
    state.userRole = payload;
  },  
  UPDATING_USERS_REGSTERED(state,payload){
    
    state.usersRegistered = payload;
  }
};
const actions = {
  postLogInData({commit},obj){
    var newObj = {};
    newObj['email'] = obj['email'];
    newObj['password'] = obj['password'];
    axios
    // .post("http://127.0.0.1:8001/api/login",newObj)
    .post("https://serainutaskbackend.georgekprojects.tk/api/login",newObj)      
    .then((response) => {
      if (response.status === 200) {           
        if (response.data.loginStatus) {

          console.log("This is the data.");
          console.log(response.data);
          commit("UPDATING_STATE",response.data.indicators);
          commit('UPDATING_SUCCESSFUL_LOGIN',1);
          commit('UPDATING_USER_DETAILS',response.data.userDetails);
          commit('UPDATING_ORGANISATION_DETAILS',response.data.oranisationDetails);
          commit('UPDATING_USERS_REGSTERED',response.data.allUsers);
          

          commit('UPDATING_USER_ROLES',response.data.userRoles);
          console.log(state.dataState);
          commit("UPDATING_LOGIN_STATUS",false);
          console.log("Success in LogIn.");
          // FORMATING DATE: 
          
          const options = { year: "numeric", month: "long", day: "numeric" }
          state.organisationDetailS.contract_start_date = new Date(state.organisationDetailS.contract_start_date).toLocaleDateString(undefined, options);
          state.organisationDetailS.contract_end_date = new Date(state.organisationDetailS.contract_end_date).toLocaleDateString(undefined, options);
          // console.log(startDate);    
          router.push({ name: 'Home' })

        } 
        else {

          commit('UPDATING_SUCCESSFUL_LOGIN',2);
          commit("UPDATING_LOGIN_STATUS",false);
        }

        

      }
    })
    .catch((error) => {
      console.log(error);
    });        
  }
};
const getters = {
  dataGetter: (state) => state.dataState,
  dataGettingStatusGetter: (state) => state.dataGettingStatus,
  loginStatusGetter: (state) => state.loginStatus,
  successLogInGetter: (state) => state.successLogIn,
  userDetailsGetter: (state) => state.userDetails,  
  organisationDetailSGetter: (state) => state.organisationDetailS,
  userRoleGetter: (state) => state.userRole,
  usersRegisteredGetter: (state) => state.usersRegistered,
  
  
};

const NavigationModule = {
  state,
  mutations,
  actions,
  getters,
};

export default NavigationModule;
