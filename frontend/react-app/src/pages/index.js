import { HomePage } from "./home";
import { RestaurantPage } from "./restaurant";
import { NotFoundPage } from "./not-found";
export const routes = () => [
  {
    path: "/",
    exact: true,
    component: HomePage,
  },
  {
    path: "/restaurant",
    exact: true,
    component: RestaurantPage,
  },
  { component: NotFoundPage },
];
