import axios from 'axios';
export default class Connection {
  api = () => {
    return axios.create({
      baseURL: `https://reqres.in/api/`,
      timeout: 0,
      headers: {
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
      },
    });
  };
}
