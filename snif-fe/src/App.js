import React from "react";
import { Router } from "@reach/router";

import Home from "./pages/Home";
import Overview from "./pages/Overview";

const App = () => (
    <Router>
        <Home path="/" />
        <Overview path="/overview"/>
    </Router>
);

export default App;
