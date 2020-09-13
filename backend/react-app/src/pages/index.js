import { HomePage } from "./HomePage";
import { AddRest } from "./AddRest";
import { ListRest } from "./ListRest";

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
    }
];
