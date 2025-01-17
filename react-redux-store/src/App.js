import "./App.css";
import { data } from "./data/data";
import BootNav from "./components/BootNav";
import Footer from "./components/Footer";
import LandingPage from "./components/LandingPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Products from "./components/Products";
import ShoppingCart from "./components/ShoppingCart";
import IndividualProduct from "./components/IndividualProduct";
import PageNotFound from "./components/PageNotFound";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();

function App() {
  return (
    <div className="App">
      <Router>
        <BootNav />
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route exact path="/products">
            <Products data={data} />
          </Route>
          <Route exact path="/mycart">
            <ShoppingCart />
          </Route>
          <Route exact path="/singleProductPage/:id">
            <IndividualProduct data={data} />
          </Route>
          <Route path="/*" component={PageNotFound}>
            <PageNotFound />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
