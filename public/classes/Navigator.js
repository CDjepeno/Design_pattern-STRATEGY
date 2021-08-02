import { PublicTransport } from './PublicTransport.js';
import { Road } from './Road.js';
class Navigatore {
    constructor(routeStrategy) {
        this.routeStrategy = routeStrategy;
    }
}
let road = new Navigatore(new Road());
let publicTransport = new Navigatore(new PublicTransport());
console.log(publicTransport.routeStrategy.buildRoute('paris', 'marseille'));
