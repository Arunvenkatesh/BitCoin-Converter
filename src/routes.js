import React from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import CurrencyComponent from "./components/CurrencyComponent.js";
import CurrencyContainer from "./containers/CurrencyContainer";


const browserHistory = createBrowserHistory();

class App extends React.Component {
    render() {
        return (
            <BrowserRouter history={browserHistory}>
                <Route path="/" component={CurrencyContainer(CurrencyComponent)} >
                    <Redirect to="/currency" />
                    <Route path="/currency" component={CurrencyContainer(CurrencyComponent)} />
                </Route>
            </BrowserRouter>
        );
    }
}

export default App;