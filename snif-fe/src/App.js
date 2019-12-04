import React from "react";
import { Router } from "@reach/router";

import Home from "./pages/Home";
import Login from "./pages/Login";

const App = () => (
    <Router>
        <Home path="/" />
        <Login path="/login" />
    </Router>
);

export default App;
