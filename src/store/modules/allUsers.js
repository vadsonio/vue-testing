import { serviceFactory } from '../api/serviceFactory';

const ServiceUsers = serviceFactory.get('users');

export default{
  actions:{
    async initUsers({commit}, params){

      await ServiceUsers.getUsers(params)
        .then(response => {
          if(response.data.success){
            params.clear === true ? commit('initUsers', response.data) : commit('addUsers', response.data)
          }
        })
        .catch(error => console.log(error.response))
    },
    async postUser({dispatch, rootState}, user){

      let token = rootState.createToken.token;

      if(token){
        const options = {
          method: 'POST',
          headers:{
            'Token': token
          },
          data: user
        }

        await ServiceUsers.postUser(options)
          .then(response => {
            if(response.data.success){
              let params = {
                page: 1,
                count: rootState.allUsers.fetchParams.count,
                clear: true
              };
              dispatch('initUsers', params);
              console.log('Posted with success');
            }
          })
          .catch(error => console.log(error.response))
      } else {
        console.log('Token missed...');
      }
    }
  },
  mutations:{
    addUsers(state, res){
      state.users.push(...res.users);
      state.fetchParams = {
        page: res.page,
        totalPages: res.total_pages,
        nextLink: res.links.next_url,
        count: res.count
      }
    },
    initUsers(state, res){
      state.users = res.users;
      state.fetchParams = {
        page: res.page,
        totalPages: res.total_pages,
        nextLink: res.links.next_url,
        count: res.count
      }
    }
  },
  state:{
    users: [],
    fetchParams:{
      page: '',
      totalPages: '',
      nextLink: '',
      count: 0
    }
  },
  getters:{
    getUsers: state => state.users,
    getNextLink: state => state.fetchParams.nextLink
  }
}