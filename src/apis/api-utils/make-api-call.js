import axios from "axios";
import { serializeQueryParams } from "./api-helpers";

export default {
  makeGetRequest(path, callback, fail, params) {
    path += serializeQueryParams(params);
    axios
      .get(path, { withCredentials: false })
      .then(callback)
      .catch(fail);
  },
  makePostRequest(path, callback, fail, payload, params) {
    path += serializeQueryParams(params);
    axios
      .post(path, payload, { withCredentials: false })
      .then(callback)
      .catch(fail);
  },
  makeDeleteRequest(path, callback, fail, params) {
    path += serializeQueryParams(params);
    axios
      .delete(path, { withCredentials: false })
      .then(callback)
      .catch(fail);
  },
  makePutRequest(path, callback, fail, payload, params) {
    path += serializeQueryParams(params);
    axios
      .put(path, payload, { withCredentials: false })
      .then(callback)
      .catch(fail);
  }
};
