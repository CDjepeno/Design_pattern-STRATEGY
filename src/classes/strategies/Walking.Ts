import { IRouteStrategy } from "../../interfaces/IRouteStrategy";

export class Walking implements IRouteStrategy {
  buildRoute(a: string, b: string) {
    return `chemin à pied de ${a} vers ${b}`;
  }
}
