import React, { useState, useEffect, useContext } from "react";
import { ThemeProvider, createTheme, Grid, Paper } from "@mui/material";
import { indigo, grey } from "@mui/material/colors";
import { useTranslation } from "react-i18next";
import { Switch, Route, Redirect } from "react-router-dom";
import ShowCase from "./components/ShowCase";
import MenuShowCases from "./components/MenuShowCases";
import Page404 from "./pages/404";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Management from "./pages/Management";
import Buy from "./pages/Buy";
import Sell from "./pages/Sell";
import Sale from "./pages/Sale";
import HomepageLayouts from "./layouts/HomePageLayouts";
import ThemeContext from "./context/ThemeContext";
import "./App.css";

const App = (props) => {
  const themeContext = useContext(ThemeContext);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    setTheme(themeContext.theme);
    return () => {
      setTheme("light");
    };
  }, [themeContext.theme]);

  return (
    <div className={theme}>
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <HomepageLayouts>
              <MenuShowCases />
              <ShowCase />
            </HomepageLayouts>
          )}
        />
        <Route
          path="/about"
          render={() => (
            <HomepageLayouts>
              <div>
                <About />
              </div>
            </HomepageLayouts>
          )}
        />
        <Route
          path="/buy"
          render={() => (
            <HomepageLayouts>
              <div>
                <Buy />
              </div>
            </HomepageLayouts>
          )}
        />
        <Route
          path="/contacts"
          render={() => (
            <HomepageLayouts>
              <div>
                <Contact />
              </div>
            </HomepageLayouts>
          )}
        />
        <Route
          path="/management"
          render={() => (
            <HomepageLayouts>
              <div>
                <Management />
              </div>
            </HomepageLayouts>
          )}
        />
        <Route
          path="/sale"
          render={() => (
            <HomepageLayouts>
              <div>
                <Sale />
              </div>
            </HomepageLayouts>
          )}
        />
        <Route
          path="/sell"
          render={() => (
            <HomepageLayouts>
              <div>
                <Sell />
              </div>
            </HomepageLayouts>
          )}
        />
        <Route
          exact
          path="/404"
          render={() => (
            <HomepageLayouts>
              <Page404 />
            </HomepageLayouts>
          )}
        />
        <Redirect to="/404" />
      </Switch>
    </div>
  );
};

export default App;
