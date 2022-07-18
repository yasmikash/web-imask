import { useRoutes } from "react-router-dom";
import { routes } from "./configs/routes";
import AppContainer from "./containers/AppContainer";

function App() {
  const routeElements = useRoutes(routes);

  return (
    <AppContainer>
      <div>{routeElements}</div>
    </AppContainer>
  );
}

export default App;
