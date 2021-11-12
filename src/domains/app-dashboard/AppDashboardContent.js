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
                return <Pages currentAppId={currentURL.split('/').slice(-1)[0]} />;
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
    const { id, page, sub_page } = useParams();

    return (
        <div className="app-dashboard-content-container">
            <AppSideBar menuOnCollapse={menuOnCollapse} setMenuOnCollapse={setMenuOnCollapse} pageName={page} subPageName={sub_page} currentAppId={id} />
            <MainContent menuOnCollapse={menuOnCollapse} pageName={page} subPageName={sub_page} />
        </div>
    );
}

export default AppDashboardContent;