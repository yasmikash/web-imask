import { Dashboard } from "../components/pages";
import { LoginLayout, MainLayout } from "../components/templates";
import ProtectedRoute from "../routes/ProtectedRoute";

export const routes = [
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <MainLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
    ],
  },
  {
    path: "login",
    element: <LoginLayout />,
  },
];
