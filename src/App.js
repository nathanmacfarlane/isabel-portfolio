import "./App.scss";
import { FontLoader } from "./FontLoader";
import { Header } from "./components/Header";
import { Projects } from "./containers/Projects";
import { Sidebar } from "./components/Sidebar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { About } from "./containers/About";
import { Art } from "./containers/Art";
import { useScreen } from "./hooks/useScreen";
import { Grid } from "@material-ui/core";

const App = () => {
  const { isSmall } = useScreen();
  return (
    <Router>
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
          <Header />
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
      {/* <div
        style={{
          paddingLeft: isSmall ? "10vh" : "25vw",
          paddingTop: isSmall ? "25vh" : "5vw",
        }}
      >
        <div style={{ paddingRight: "5vw" }}>
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
        </div>
      </div> */}
    </Router>
  );
};

export default App;
