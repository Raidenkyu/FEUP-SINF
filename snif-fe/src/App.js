import React from "react";
import { Router } from "@reach/router";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Overview from "./pages/Overview";
import Sales from "./pages/Sales";
import Purchases from "./pages/Purchases";
import Stocks from "./pages/Stocks";
import Orders from "./pages/Orders";
import Customers from "./pages/Customers";
import Financial from "./pages/Financial";

const App = () => (
    <Router>
        <Home path="/" />
        <Login path="/login" />
        <Overview path="/overview"/>
        <Sales path="/sales"/>
        <Purchases path="/purchases"/>
        <Stocks path="/stocks"/>
        <Orders path="/orders"/>
        <Customers path="/customers"/>
        <Financial path="/financial"/>
    </Router>
);

export default App;
