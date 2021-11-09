import React, { useState }  from 'react';

import { useParams } from 'react-router-dom';

import "./AppDashboardContent.css";

import AppSideBar from '../../components/SideBar/AppSideBar';
import { MyHome, Pages } from './AppDashboardPages';

const MainContent = (props) => {
    const { menuOnCollapse, pageName } = props;

    const currentURL = window.location.pathname.split('/').slice(0, -1).join("/");

    const loadPage = () => {
        switch(pageName) {
            case "home":
                return <MyHome currentURL={currentURL} />;
            case "pages":
                return <Pages currentURL={currentURL} />;
            default:
            break;
        }
    }

    return <div className={`main-content ${menuOnCollapse ? 'main-content-minimize' : ''}`}>
                { loadPage() }
            </div>;
}

const AppDashboardContent = () => {
    const [menuOnCollapse, setMenuOnCollapse] = useState(false);
    const { page } = useParams();

    return (
        <div className="app-dashboard-content-container">
            <AppSideBar menuOnCollapse={menuOnCollapse} setMenuOnCollapse={setMenuOnCollapse} />
            <MainContent menuOnCollapse={menuOnCollapse} pageName={page} />
        </div>
    );
}

export default AppDashboardContent;