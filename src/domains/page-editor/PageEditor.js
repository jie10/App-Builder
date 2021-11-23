import React from 'react'

import "./PageEditor.css";

import EditNavBar from '../../components/NavBar/EditNavBar';
import PageEditorContent from './PageEditorContent';

const PageEditor = () => {
    return(
        <>
            <EditNavBar />
            <PageEditorContent />
        </>
    )
}

export default PageEditor;