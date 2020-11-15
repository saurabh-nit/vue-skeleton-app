import apiPaths from "../apis/api-utils/api-paths";
import apiCall from "../apis/api-utils/make-api-call";

export default {
  fetchAppData(callback, fail) {
    apiCall.makeGetRequest(apiPaths.getAppDataFromServer, callback, fail);
  }
};
