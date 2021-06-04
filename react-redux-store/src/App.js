import "./App.css";
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
            <Products />
          </Route>
          <Route path="/mycart">
            <ShoppingCart />
          </Route>
          <Route>
            <IndividualProduct />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
