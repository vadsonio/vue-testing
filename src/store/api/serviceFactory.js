import serviceUsers from './serviceUsers';
import servicePositions from './servicePositions';


//обращение к двум разным api (пользователи и позиции в регистрации)
const services = {
  users: serviceUsers,
  positions: servicePositions
}

export const serviceFactory = {
  get: name => services[name]
}