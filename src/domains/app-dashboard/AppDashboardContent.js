import React, { useState }  from 'react'

import "./AppDashboardContent.css";

import AppSideBar from '../../components/SideBar/AppSideBar';
import { MyHome } from './AppDashboardPages';

const MainContent = (props) => {
    const { menuOnCollapse } = props;

    const currentURL = window.location.pathname.split('/').slice(0, -1).join("/");

    return <div className={`main-content ${menuOnCollapse ? 'main-content-minimize' : ''}`}>
                <MyHome currentURL={currentURL} />
            </div>;
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