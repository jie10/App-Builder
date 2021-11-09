import React, { useState }  from 'react'

import "./AppDashboardContent.css";

import AppSideBar from '../../components/SideBar/AppSideBar';

const MainContent = (props) => {
    const { menuOnCollapse } = props;

    return <div className={`main-content ${menuOnCollapse ? 'main-content-minimize' : ''}`}></div>;
}

const AppDashboardContent = () => {
    const [menuOnCollapse, setMenuOnCollapse] = useState(false);

    return (
        <div className="app-dashboard-content-container">
            <AppSideBar menuOnCollapse={menuOnCollapse} setMenuOnCollapse={setMenuOnCollapse} />
            <MainContent menuOnCollapse={menuOnCollapse} />
        </div>
    );
}

export default AppDashboardContent;