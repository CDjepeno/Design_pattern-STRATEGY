import { IRouteStrategy } from "../../interfaces/IRouteStrategy";

export class PublicTransport implements IRouteStrategy {
  buildRoute(a: string, b: string) {
    return `chemin en transport en commun de ${a} vers ${b}`;
  }
}
