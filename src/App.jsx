import Favicon from "react-favicon";
import { useRoutes } from "react-router-dom";
import { routes } from "./configs/routes";
import AppContainer from "./containers/AppContainer";
import favicon from "./assets/images/favicon.ico";

function App() {
  const routeElements = useRoutes(routes);

  return (
    <AppContainer>
      <Favicon url={favicon} />
      <div>{routeElements}</div>
    </AppContainer>
  );
}

export default App;
