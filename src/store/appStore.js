import appApis from "../apis/app-apis.js";

export default {
  state: {
    appData: null
  },
  getters: {
    getAppData(state) {
      return state.appData;
    }
  },
  mutations: {
    setAppData(state, value) {
      state.appData = value;
    }
  },
  actions: {
    GET_APP_DATA({ commit }, { success, fail }) {
      appApis.fetchAppData(
        response => {
          console.log("RESPONSE_GET_APP_DATA:", response);
          commit("setAppData", response.data);
          success && success(response.data);
        },
        error => {
          console.log("Something went wrong...", error);
          fail && fail(error);
        }
      );
    }
  },
  namespaced: true
};
