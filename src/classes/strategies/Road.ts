import { IRouteStrategy } from '../../interfaces/IRouteStrategy';

export class Road implements IRouteStrategy {
  buildRoute(a: string , b: string) {
    return `Chemin par la route de ${a} vers ${b}`
  }
}