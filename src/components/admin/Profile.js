import React from 'react';
import Navbar from '../../layouts/admin/Navbar';
import Sidebar from '../../layouts/admin/Sidebar';
import Footer from '../../layouts/admin/Footer';

function Profile() {
  return (
    <div className="sb-nav-fixed">
    <Navbar />
    
    <div id="layoutSidenav">

        <div id="layoutSidenav_nav">
            <Sidebar />

        </div>
        <div id="layoutSidenav_content">
        <h2>Profile</h2>
    </div>
   
    </div>
    <Footer />
    </div>
    
  )
}

export default Profile