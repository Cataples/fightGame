import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Layout from "./components/dashboard";
import Login from "./components/login";
import Register from "./components/register";
import PageNotFound from "./components/pageNotFound";

const app = document.getElementById( "app" );

ReactDOM.render(
    <BrowserRouter>
        <div>
            <Switch>
                <Route exact path="/dashboard" component={ Layout } />
                <Route exact path="/login" component={ Login } />
                <Route exact path="/register" component={ Register } />
                <Route component={ PageNotFound } />
            </Switch>
        </div>
    </BrowserRouter>,
    app,
);
