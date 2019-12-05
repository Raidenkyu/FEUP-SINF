import React from "react";
import { Router } from "@reach/router";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Overview from "./pages/Overview";
import Sales from "./pages/Sales";

const App = () => (
    <Router>
        <Home path="/" />
        <Login path="/login" />
        <Overview path="/overview"/>
        <Sales path="/sales"/>
    </Router>
);

export default App;
