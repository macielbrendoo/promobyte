import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Promotions from './pages/Promotions';
import Login from './pages/Login';
import CreatePromotion from './pages/CreatePromotion';
import AdminNotApprovedPromotions from './pages/AdminNotApprovedPromotions';

function Routes() {
    return (
        <BrowserRouter>
            <Route component={Promotions} path="/" exact/>
            <Route component={Login} path="/login"/>
            <Route component={CreatePromotion} path="/createpromotion"/>
            <Route component={AdminNotApprovedPromotions} path="/admin/promotions"/>
        </BrowserRouter>
    );
}

export default Routes;