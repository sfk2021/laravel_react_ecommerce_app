import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Footer from './Footer';
import '../../assets/admin/css/styles.css';
import '../../assets/admin/js/scripts';
import routes from '../../routes/routes';
import {BrowserRouter as Router,Route,Routes,Navigate} from 'react-router-dom';

function MasterLayout() {
    return (
        <div className="sb-nav-fixed">
            <Navbar />
            
            <div id="layoutSidenav">

                <div id="layoutSidenav_nav">
                    <Sidebar />

                </div>
            
            <div id="layoutSidenav_content">
                <main>
                    <Routes>
                        {routes.map((route,Idx)=>{
                            return(
                                // route.component && {
                                    <Route
                                    key={Idx}
                                    path = {route.path}
                                    exact = {route.exact}
                                    name={route.name}
                                    render={(props)=>(

                                        <route.component {...props}/>

                                    )}


                                    />
                                // }
                            )

                        })}

                        {/* <Navigate from ="/admin" to ="/admin/dashboard"/> */}

                    </Routes>
                </main>
                <Footer />
            </div>
        </div>
        </div>
    )
}

export default MasterLayout