import {serviceFactory} from '../api/serviceFactory';
const ServiceGetPositions = serviceFactory.get('positions');

export default {
  actions:{
    async setPositions({commit}){
      await ServiceGetPositions.getPositions()
        .then(response => {
          if(response.data.success){
            commit('updatePositions', response.data.positions);
          } else{
            console.log('Positions response failed');
          }
        })
        .catch(error => console.log(error.response))
    }
  },
  mutations:{
    updatePositions(state, positions){
      state.positions = positions;
    }
  },
  state:{
    positions: []
  },
  getters:{
    getPositions: state => state.positions
  }
}