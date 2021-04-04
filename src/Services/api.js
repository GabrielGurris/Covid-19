import Axios from 'axios';

export default Api = Axios.create({baseURL: "https://covid-api.mmediagroup.fr/v1"});