import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";
import { StylesProvider, createGenerateClassName } from "@material-ui/core/styles";

import Landing from './components/Landing';
import Pricing from  './components/Pricing';

const generateClassName = createGenerateClassName({
    productionPrefix: 'ma',
});

export default () => {
    return <dvi>
        <StylesProvider generateClassName={generateClassName}>
            <BrowserRouter>
                <Switch>
                    <Route exac path="/pricing" component={Pricing} />
                    <Route path ="/" component={Landing} />
                </Switch>
            </BrowserRouter>
        </StylesProvider>
    </dvi>
};