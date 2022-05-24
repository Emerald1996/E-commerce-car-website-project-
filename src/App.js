import React from "react"
import "./App.css"
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Testimonials from "./Pages/Testimonials";
import BuyCars from "./Pages/BuyCars";
import Form from "./Pages/Form";
import ThankYou from "./Pages/ThankYou";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
    return (
      <>
        <div>
          <Router>
            <Navbar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/services" component={Services} />
              <Route exact path="/testimonials" component={Testimonials} />
              <Route exact path="/BuyCars" component={BuyCars} />
              <Route exact path="/Form" component={Form} />
              <Route exact path="/ThankYou" component={ThankYou} />
            </Switch>
            <Footer />
          </Router>
        </div>
      </>
    );
}
export default App