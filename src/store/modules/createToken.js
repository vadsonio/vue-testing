import axios from 'axios';

export default{
  actions:{
    async setToken(context){

      await axios
        .get('http://url адрес с api/token')
        .then(response => {
          if(response.data.success){
            context.commit('updateToken', response.data.token);
          }
        })
        .catch(error => console.log(error.response))
    }
  },
  mutations:{
    updateToken(state, token){
      state.token = token;
    }
  },
  state:{
    token: ''
  },
  getters:{
    getToken: state => state.token
  }
}

