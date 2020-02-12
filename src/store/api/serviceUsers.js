import Service from './service';

const users = '/users';

export default{
  getUsers(params){
    return Service.get(`${users}?page=${params.page}&count=${params.count}`);
  },
  postUser(params){
    return Service(`${users}`, params);
  }
}