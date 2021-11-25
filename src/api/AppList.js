import { v4 as uuidv4 } from 'uuid'

import { generateUniqId, generateTimestamp } from "../utils/helpers/generate";
import { parseObject, unparseObject } from "../utils/helpers/json";

import noPreviewAvailableImage from '../assets/images/no-preview-available.png';
import defaultTemplateImage from '../assets/images/default-template.png';

/** TODO - TRANSFORM TO API IN FUTURE IMPROVEMENT: DATA TEMPORARILY STORED IN LOCAL STORAGE */

let list = parseObject(localStorage.getItem("apps_list"));

const filterPagesByStatus = (pages, pageStatus) => pages.filter(page => page.pageStatus === pageStatus.toLowerCase());

const findHeaderTitle = (components) => {
    let result = components.length > 0 ? components.filter(component => component.settings.type === "HEADER")[0] : null;
    return result ? result.settings.parameters.title : "Untitled";
}

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
            components: [
                {
                    _id: uuidv4(),
                    settings: {
                        type: "HEADER",
                        parameters: {
                            backgroundColor:"#fbe700",
                            height:"160px",
                            title:"Untitled"
                        }
                   },
                   sortId: 1
                }
            ],
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

export const countAllPages = (appId) => {
    let currentApp = findOne(appId);

    if (currentApp && currentApp.pages) {
        return {
            count: {
                published: filterPagesByStatus(currentApp.pages, "published").length,
                draft: filterPagesByStatus(currentApp.pages, "draft").length,
                scheduled: filterPagesByStatus(currentApp.pages, "scheduled").length,
                trashed: filterPagesByStatus(currentApp.pages, "trashed").length
            }
        }
    }
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

export const createNewPage = (appId, components, pageStatusUpdate) => {
    let currentApp = findOne(appId);

    if (currentApp && currentApp.pages) {
        let updatedApp = [...currentApp.pages, {
            _id: generateUniqId(),
            pageName: "index",
            pageTitle: findHeaderTitle(components),
            pageStatus: pageStatusUpdate,
            createdTimestamp: generateTimestamp(),
            updatedTimestamp: generateTimestamp(),
            components: components,
            isPublished: pageStatusUpdate === "published" ? true : false,
            sortId: currentApp.pages.length + 1
        }];

        currentApp.pages = updatedApp;

        let newList = list.map(item => {
            return updatedApp._id === item._id ? currentApp : item;
        });

        localStorage.setItem("apps_list", unparseObject(newList));

        return updatedApp.slice(-1)[0]._id;
    } else {
        return '';
    }
}

export const findCurrentPage = (appId, pageId) => {
    let currentApp = findOne(appId);
    return currentApp && currentApp.pages ? currentApp.pages.filter(page => page._id === pageId)[0] : null;
}

export const updatePageByComponents = (components, pageStatusUpdate, appId, pageId) => {
    let currentApp = findOne(appId);

    if (currentApp && currentApp.pages) {
        let updatedApp = currentApp.pages.map(page => {
            if (page._id === pageId) {
                page.pageTitle = findHeaderTitle(components);
                page.previousPageStatus = page.pageStatus;
                page.pageStatus = pageStatusUpdate;
                page.updatedTimestamp = generateTimestamp();
                page.isPublished = pageStatusUpdate === "published" ? true : false;
                page.components = components;
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