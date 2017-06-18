import 'es6-promise';
import axios from 'axios';

const BASE_URL ="https://gateway.marvel.com/v1/";
function get(url, data = {}, params = {}) {
  return axios
    .get(BASE_URL + url,
      {
        data,

        params: {
          ...params,
          apikey: "f3de5f6f41bf36f00993926267cb73c9",
          limit: 10

        }
      }
    )
}

export default {
  get,
};