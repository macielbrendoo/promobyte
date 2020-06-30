import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Promotions from './pages/Promotions';
import Login from './pages/Login';
import CreatePromotion from './pages/CreatePromotion';
import AdminManagePromotions from './pages/AdminManagePromotions';
import AdminEditPromotions from './pages/AdminEditPromotions';

function Routes() {
    return (
        <BrowserRouter>
            <Route component={Promotions} path="/" exact/>
            <Route component={Login} path="/login"/>
            <Route component={CreatePromotion} path="/createpromotion"/>
            <Route component={AdminManagePromotions} path="/admin/promotions"/>
            <Route component={AdminEditPromotions} path="/admin/editPromotion"/>
        </BrowserRouter>
    );
}

export default Routes;