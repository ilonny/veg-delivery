import { HomePage } from "./HomePage";
import { AddRest } from "./AddRest";
import { ListRest } from "./ListRest";
import { RestaurantPage } from "./RestaurantPage";
import { RestaurantMenu } from "./RestaurantMenu";

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
    }
];
