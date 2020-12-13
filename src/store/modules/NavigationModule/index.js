import axios from "axios";
const state = { dataState: null,
dataGettingStatus: false, };
const mutations = {
  UPDATING_STATE(state,payload){
      state.dataState = payload;
  },
  UPDATING_DATA_GETTING_STATUS(state,payload){
    state.dataGettingStatus = payload;
  }
};
const actions = {
  fetchData({commit}) {
    axios
      .get("http://127.0.0.1:8001/api/fetchData")
      // .get("https://serainutaskbackend.georgekprojects.tk/api/fetchData")      
      .then((response) => {
        if (response.status === 200) {          
          commit("UPDATING_STATE",response.data);
          commit("UPDATING_DATA_GETTING_STATUS",true);  
          console.log("This is the data.");
          console.log(response.data);


        }
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
const getters = {
  dataGetter: (state) => state.dataState,
  dataGettingStatusGetter: (state) => state.dataGettingStatus,
  
};

const NavigationModule = {
  state,
  mutations,
  actions,
  getters,
};

export default NavigationModule;
