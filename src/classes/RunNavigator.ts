import { PublicTransport } from "./strategies/PublicTransport";
import { Navigator } from "./Navigator";
import { Road } from "./strategies/Road";
export class RunNavigator {
  static main1() {
    let publicTransport = new Navigator(new PublicTransport());

    return publicTransport.routeStrategy.buildRoute("paris", "marseille");
  }

  static main2() {
    let publicTransport = new Navigator(new PublicTransport());

    publicTransport.setStrategy(new Road());
    return publicTransport.routeStrategy.buildRoute("paris", "marseille");
  }
}
