import Service from './service';

const positions = '/positions';

export default{
  getPositions(){
    return Service.get(`${positions}`);
  }
}