import React from 'react';
import {Route, Switch} from "react-router-dom";
import Rek from "../pages/rek/Rek";
import New from "../pages/new/New";
import infoCinema from "../component/InfoCinema/InfoCinema";

const Router = () => {
    return (
        <div>
            <Switch>
                <Route exact path='/' component={Rek}/>
                <Route exact path='/new' component={New}/>
                <Route exact path='/infoCinema' component={infoCinema}/>
            </Switch>
        </div>
    );
};

export default Router;