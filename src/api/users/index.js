import Connection from '../Connection';

export default class UserAPI {
  constructor() {
    this.Connection = new Connection();
  }

  get = async (page) => {
    return await this.Connection.api().get(`users?page=${page}`);
  };
}
