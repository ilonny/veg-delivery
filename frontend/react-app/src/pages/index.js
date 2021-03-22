import { HomePage } from "./home";
import { NotFoundPage } from "./not-found";
export const routes = () => [
  {
    path: "/",
    exact: true,
    component: HomePage,
  },
  { component: NotFoundPage },
];
