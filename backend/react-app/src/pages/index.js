import { HomePage } from "./home";
import { AddRest } from "./addRest";
export const routes = () => [
    {
        path: "/",
        exact: true,
        component: HomePage,
    },
    {
      path: "/add-rest",
      component: AddRest,
    }
];
