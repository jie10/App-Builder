import { generateUniqId, generateTimestamp } from "../utils/helpers/generate";
import { parseObject, unparseObject } from "../utils/helpers/json";

import noPreviewAvailableImage from '../assets/images/no-preview-available.png';
import defaultTemplateImage from '../assets/images/default-template.png';

/** TODO - TRANSFORM TO API IN FUTURE IMPROVEMENT: DATA TEMPORARILY STORED IN LOCAL STORAGE */

let list = parseObject(localStorage.getItem("apps_list"));

export const findAll = () => list && list.length > 0 ? list : [];

export const findOne = (key) => list && list.length > 0 ? list.filter(item => item._id === key)[0] : null;

export const createNew = (data) => {
    data._id = generateUniqId();

    data.appURL = data._id;

    data.createdTimestamp = generateTimestamp();

    data.isPublished = false;

    data.themePreview = data.buildMode === "default_template" ? defaultTemplateImage : noPreviewAvailableImage ;

    data.pages = [
        {
            _id: generateUniqId(),
            pageName: "index",
            pageTitle: "Untitled",
            pageStatus: "draft",
            createdTimestamp: generateTimestamp(),
            updatedTimestamp: generateTimestamp(),
            components: [],
            sortId: 1
        }
    ];

    let newList = list ? list.concat(data) : [ data ];

    localStorage.setItem("apps_list", unparseObject(newList));

    return { appId: data._id, defaultPageId: data.pages[0]._id };
}

export const removeOne = (key) => {
    let newList = list && list.length > 0 ? list.filter(item => item._id !== key) : [];

    localStorage.setItem("apps_list", unparseObject(newList));
}

export const updatePageByStatus = (newPageStatus, appId, pageId) => {
    let currentApp = findOne(appId);

    if (currentApp && currentApp.pages) {
        let updatedApp = currentApp.pages.map(page => {
            if (page._id === pageId) {
                page.previousPageStatus = page.pageStatus;
                page.pageStatus = newPageStatus;
            }

            return page;
        });

        currentApp.pages = updatedApp;

        let newList = list.map(item => {
            return updatedApp._id === item._id ? currentApp : item;
        });

        localStorage.setItem("apps_list", unparseObject(newList));
    }
}

export const restorePageByStatus = (appId, pageId) => {
    let currentApp = findOne(appId);

    if (currentApp && currentApp.pages) {
        let updatedApp = currentApp.pages.map(page => {
            if (page._id === pageId) {
                page.pageStatus = page.previousPageStatus ? page.previousPageStatus : "draft";
            }

            return page;
        });

        currentApp.pages = updatedApp;

        let newList = list.map(item => {
            return updatedApp._id === item._id ? currentApp : item;
        });

        localStorage.setItem("apps_list", unparseObject(newList));
    }
}

export const removePage = (appId, pageId) => {
    let currentApp = findOne(appId);

    if (currentApp && currentApp.pages) {
        let updatedApp = currentApp.pages.filter(page => page._id !== pageId);

        currentApp.pages = updatedApp;

        let newList = list.map(item => {
            return updatedApp._id === item._id ? currentApp : item;
        });

        localStorage.setItem("apps_list", unparseObject(newList));
    }
}