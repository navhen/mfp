import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";
import { StylesProvider } from "@material-ui/core/styles";

import Landing from './components/Landing';
import Pricing from  './components/Pricing';

export default () => {
    return <dvi>
        <StylesProvider>
            <BrowserRouter>
                <Switch>
                    <Route exac path="/pricing" component={Pricing} />
                    <Route path ="/" component={Landing} />
                </Switch>
            </BrowserRouter>
        </StylesProvider>
    </dvi>
};