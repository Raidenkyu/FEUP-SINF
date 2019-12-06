import React from "react";
import { Router } from "@reach/router";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Overview from "./pages/Overview";
import Sales from "./pages/Sales";
import Purchases from "./pages/Purchases";
import Stocks from "./pages/Stocks";

const App = () => (
    <Router>
        <Home path="/" />
        <Login path="/login" />
        <Overview path="/overview"/>
        <Sales path="/sales"/>
        <Purchases path="/purchases"/>
        <Stocks path="/stocks"/>
    </Router>
);

export default App;
