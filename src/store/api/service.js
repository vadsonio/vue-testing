import axios from 'axios';

const apiDomain = "http://url адрес с api";
const apiUrl = `${apiDomain}/api/`;

export default axios.create({
  baseURL: apiUrl
});