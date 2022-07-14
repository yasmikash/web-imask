import { useRoutes } from "react-router-dom";
import { routes } from "./configs/routes";

function App() {
  const routeElements = useRoutes(routes);

  return <div>{routeElements}</div>;
}

export default App;
