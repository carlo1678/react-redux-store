import "./App.css";
import { data } from "./data/data";
import BootNav from "./components/BootNav";
import Footer from "./components/Footer";
import LandingPage from "./components/LandingPage";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import Products from "./components/Products";
import ShoppingCart from "./components/ShoppingCart";
import IndividualProduct from "./components/IndividualProduct";

function App() {
  return (
    <div className="App">
      <Router>
        <BootNav />
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route path="/products">
            <Products data={data} />
          </Route>
          <Route path="/mycart">
            <ShoppingCart data={data} />
          </Route>
          <Route>
            <IndividualProduct data={data} />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
