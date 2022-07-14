import { Dashboard } from "../components/pages";
import { MainLayout } from "../components/templates";

export const routes = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      //   {
      //     path: "contact",
      //     element: <Contact />,
      //   },
      //   {
      //     path: "login",
      //     element: <Login />,
      //   },
    ],
  },
];
