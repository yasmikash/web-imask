import { Dashboard, AdminMap } from "../components/pages";
import { AdminLayout, LoginLayout, MainLayout } from "../components/templates";
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
    path: "admin",
    element: (
      <ProtectedRoute>
        <AdminLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "map",
        element: <AdminMap />,
      },
    ],
  },
  {
    path: "login",
    element: <LoginLayout />,
  },
  {
    path: "*",
    element: <div>Page could not be found...</div>,
  },
];
