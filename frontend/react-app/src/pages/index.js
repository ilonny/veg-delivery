import { HomePage } from "./home";
import { RestaurantPage } from "./restaurant";
import { CartPage } from "./cart";
import { OrdersPage } from "./orders";
import { NotFoundPage } from "./not-found";
import { AboutCompany } from "./AboutCompany";
import { ContactsCompany } from "./Contacts";
import { UserAgree } from "./UserAgree";
import { Partners } from "./Partners";
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
  {
    path: "/about",
    exact: true,
    component: AboutCompany,
  },
  {
    path: "/contacts",
    exact: true,
    component: ContactsCompany,
  },
  {
    path: "/terms-of-use",
    exact: true,
    component: UserAgree,
  },
  {
    path: "/partners",
    exact: true,
    component: Partners,
  },
  { component: NotFoundPage },
];
