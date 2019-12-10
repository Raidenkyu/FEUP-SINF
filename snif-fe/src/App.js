import React from "react";
import { Router } from "@reach/router";
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import AppState from './reducers/AppStateReducer'

import Home from "./pages/Home";
import Login from "./pages/Login";
import Overview from "./pages/Overview";
import Sales from "./pages/Sales";
import Purchases from "./pages/Purchases";
import Stocks from "./pages/Stocks";
import Orders from "./pages/Orders";
import Customers from "./pages/Customers";
import Financial from "./pages/Financial";

const App = () => {
    const store = createStore(AppState)

    return (
        <Provider store={store}>
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
        </Provider>
    )
};

export default App;
