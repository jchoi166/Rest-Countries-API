import { useContext } from "react";

import { Route, Switch, Redirect } from "react-router-dom";

import Navbar from "./components/UI/Navbar";
import ListCountries from "./pages/ListCountries";
import CardDetails from "./pages/CardDetails";
import { ThemeProvider } from "./context/theme-context";


function App() {


  return (
    <ThemeProvider>
      <Navbar />
      <Switch>
        <Route path='/' exact>
          <Redirect to="countries" />
        </Route>
        <Route path='/countries' exact>
          <ListCountries />
        </Route>
        <Route path='/countries/:countryID'>
          <CardDetails />
        </Route>
      </Switch>
    </ThemeProvider>
  );
}

export default App;
