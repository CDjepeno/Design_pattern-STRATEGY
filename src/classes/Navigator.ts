import { IRouteStrategy } from "../interfaces/IRouteStrategy";

export class Navigator {
  routeStrategy: IRouteStrategy;

  constructor(routeStrategy: IRouteStrategy) {
    this.routeStrategy = routeStrategy;
  }

  setStrategy(routeStrategy: IRouteStrategy) {
    this.routeStrategy = routeStrategy;
  }
}
