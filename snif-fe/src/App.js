import React from "react";
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import AppState from './reducers/AppStateReducer'
import AppRouter from './AppRouter'

const App = () => {
    const store = createStore(AppState)

    return (
        <Provider store={store}>
            <AppRouter />
        </Provider>
    )
};

export default App;
