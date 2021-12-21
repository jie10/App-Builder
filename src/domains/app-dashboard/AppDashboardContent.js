import React, { useState }  from 'react';

import { useParams } from 'react-router-dom';

import "./AppDashboardContent.css";

import AppSideBar from '../../components/SideBar/AppSideBar';
import { AppPreview, MyHome, Pages } from './AppDashboardPages';
import { AppSettings } from './AppSettings';

const MainContent = (props) => {
    const { menuOnCollapse, currentAppId, pageName, subPageName } = props;

    const loadPage = () => {
        switch(pageName) {
            case "preview":
                return <AppPreview currentAppId={currentAppId} />;
            case "home":
                return <MyHome currentAppId={currentAppId} />;
            case "pages":
                return <Pages currentAppId={currentAppId} />;
            case "settings":
                return <AppSettings subPageName={subPageName} />
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
            <MainContent menuOnCollapse={menuOnCollapse} currentAppId={id} pageName={page} subPageName={sub_page} />
        </div>
    );
}

export default AppDashboardContent;