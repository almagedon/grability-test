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
          apikey: "ee9bd84624c89fd2684c06a98c7573cf",
          limit: 10

        }
      }
    )
}

export default {
  get,
};