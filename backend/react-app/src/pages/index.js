import { HomePage } from "./HomePage";
import { AddRest } from "./AddRest";
import { AddUser } from "./AddUser";
import { ListRest } from "./ListRest";
import { RestaurantPage } from "./RestaurantPage";
import { RestaurantMenu } from "./RestaurantMenu";
import { RestaurantModif } from "./RestaurantModif";
import { RestaurantDelivery } from "./RestaurantDelivery";
import { RestaurantDiscount } from "./RestaurantDiscount";
import { RestaurantOrder } from "./RestaurantOrder";
import { RestaurantUsers } from "./RestaurantUsers";
import { Moderate } from "./Moderate";

export const routes = () => [
  {
    path: "/",
    exact: true,
    component: HomePage,
  },
  {
    path: "/add-rest",
    component: AddRest,
  },
  {
    path: "/add-user",
    component: AddUser,
  },
  {
    path: "/list-rest",
    component: ListRest,
  },
  {
    path: "/restaurant",
    component: RestaurantPage,
  },
  {
    path: "/restaurant-menu",
    component: RestaurantMenu,
  },
  {
    path: "/restaurant-modif",
    component: RestaurantModif,
  },
  {
    path: "/restaurant-delivery",
    component: RestaurantDelivery,
  },
  {
    path: "/restaurant-discount",
    component: RestaurantDiscount,
  },
  {
    path: "/restaurant-order",
    component: RestaurantOrder,
  },
  {
    path: "/restaurant-users",
    component: RestaurantUsers,
  },
  {
    path: "/moderate",
    component: Moderate,
  },
];
