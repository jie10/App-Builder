import React from 'react';

import "./AppDashboard.css";

import TopNavBar from '../../components/NavBar/TopNavBar';
import AppDashboardContent from './AppDashboardContent';

const AppDashboard = () => {
    return (
        <>
            <TopNavBar />
            <AppDashboardContent />
        </>
    );
}

export default AppDashboard;