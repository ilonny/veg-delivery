import { HomePage } from "./home";
import { RestaurantPage } from "./restaurant";
import { CartPage } from "./cart";
import { OrdersPage } from "./orders";
import { NotFoundPage } from "./not-found";
export const routes = () => [
  {
    path: "/",
    exact: true,
    component: HomePage,
  },
  {
    path: "/restaurant/:id",
    exact: true,
    component: RestaurantPage,
  },
  {
    path: "/cart",
    exact: true,
    component: CartPage,
  },
  {
    path: "/orders",
    exact: true,
    component: OrdersPage,
  },
  { component: NotFoundPage },
];
