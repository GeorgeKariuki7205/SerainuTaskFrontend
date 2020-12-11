import axios from "axios";
const state = { data: null };
const mutations = {};
const actions = {
  fetchData() {
    axios
      .get("http://127.0.0.1:8001/api/fetchData")
      // https://serainutaskbackend.georgekprojects.tk/api/fetchData
      .then((response) => {
        if (response.status === 200) {
          state.data = response.data;

          console.log("This is the data.");
          console.log(state.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
const getters = {
  dataGetter: (state) => state.data,
};

const NavigationModule = {
  state,
  mutations,
  actions,
  getters,
};

export default NavigationModule;
