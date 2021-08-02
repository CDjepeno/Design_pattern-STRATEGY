import { IRouteStrategy } from '../interfaces/IRouteStrategy';
import { PublicTransport } from './strategies/PublicTransport';

class Navigatore {
  routeStrategy: IRouteStrategy

  constructor(routeStrategy: IRouteStrategy) {
    this.routeStrategy = routeStrategy;
  }

  setStrategy(routeStrategy: IRouteStrategy) {
    this.routeStrategy = routeStrategy;    
  }
}

// let road = new Navigatore(new Road())

let publicTransport = new Navigatore(new PublicTransport())

console.log(publicTransport.routeStrategy.buildRoute('paris', 'marseille'));

