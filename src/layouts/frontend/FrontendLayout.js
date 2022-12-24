import React from 'react';
import {Switch, Route,Routes} from 'react-router-dom';
import Navbar from '../../layouts/frontend/Navbar';

import publicRoutesList from '../../routes/PublicRouteList';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';

const FrontendLayout = () => {

    return (
        <div>
            <Navbar />
            
                <div>
                        
                    <Routes>
                        {publicRoutesList.map((routedata, idx) => {
                            return (
                                routedata.element && (
                                    <Route 
                                        key={idx}
                                        path={routedata.path}
                                        exact={routedata.exact}
                                        name={routedata.name}
                                        render={(props) => (
                                            <routedata.element {...props} />
                                        )}
                                    />
                                )
                            )
                        })}
                    </Routes>

                </div>

        </div>
    );

}

export default FrontendLayout;