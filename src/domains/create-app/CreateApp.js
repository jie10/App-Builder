import React from 'react'

import "./CreateApp.css";

import TopNavBar from '../../components/NavBar/TopNavBar';
import CreateAppContent from './CreateAppContent';

const CreateApp = (props) => {
    return(
        <>
            <TopNavBar />
            <CreateAppContent />
        </>
    )
}

export default CreateApp;