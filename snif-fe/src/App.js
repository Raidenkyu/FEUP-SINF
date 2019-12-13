import React from "react";
import { Provider } from 'react-redux';

import AppContainer from './AppContainer'
import store from './store'

const App = () => (
    <Provider store={store}>
        <AppContainer />
    </Provider>
);

export default App;
