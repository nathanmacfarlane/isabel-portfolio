import "./App.scss";
import { FontLoader } from "./FontLoader";
import { Header } from "./components/Header";
import { Projects } from "./containers/Projects";
import { Sidebar } from "./components/Sidebar";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useHistory,
} from "react-router-dom";
import { About } from "./containers/About";
import { Art } from "./containers/Art";
import { useScreen } from "./hooks/useScreen";
import { Grid } from "@material-ui/core";

const App1 = () => {
  return (
    <Router>
      <App />
    </Router>
  );
};

const App = () => {
  const { isSmall } = useScreen();
  const { push } = useHistory();
  return (
    <>
      <FontLoader />
      <Sidebar />
      <Grid
        style={{
          padding: isSmall ? "20px 20px 20px 70px" : "50px 50px 50px 70px",
        }}
        spacing={0}
        container
      >
        <Grid
          xs={isSmall ? 12 : 3}
          container
          justify={!isSmall && "center"}
          item
        >
          <Header onClick={() => push("/")} />
        </Grid>
        <Grid xs={isSmall ? 12 : 9} item>
          <Switch>
            <Route path="/about" exact>
              <About />
            </Route>
            <Route path="/art" exact>
              <Art />
            </Route>
            <Route path="/" exact>
              <Projects />
            </Route>
          </Switch>
        </Grid>
      </Grid>
    </>
  );
};

export default App1;
