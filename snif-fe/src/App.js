import React from "react";
import { Router } from "@reach/router";

import Home from "./pages/Home";
import Overview from "./pages/Overview";
import Login from "./pages/Login";

const App = () => (
    <Router>
        <Home path="/" />
        <Overview path="/overview"/>
        <Login path="/login" />
    </Router>
);

export default App;
