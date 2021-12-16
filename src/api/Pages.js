import axios from "axios";

import { BASE_API_URL } from "../utils/constants/api";
import { generateTimestamp } from "../utils/helpers/generate";
import { compareDateToNowInMinutes } from "../utils/helpers/compare";

const filterPagesByStatus = (pages, pageStatus) => pages.filter(page => page.pageStatus === pageStatus.toLowerCase());

export const getPagesByProjectId = (projectId) => {
    return new Promise((resolve, reject) => {
        axios({
            method: 'GET',
            url: `${BASE_API_URL}/page/id/${projectId}`
        })
        .then((response) => {
            let data = response.data;
            resolve(data ? {
                projectID: projectId,
                pages: {
                    count: {
                        all: data.length,
                        published: filterPagesByStatus(data, "published").length,
                        draft: filterPagesByStatus(data, "draft").length,
                        scheduled: filterPagesByStatus(data, "scheduled").length,
                        trashed: filterPagesByStatus(data, "trashed").length
                    },
                    list: data.map(page => ({
                        _id: page._id,
                        projectID: page.projectID,
                        pageName: page.pageName,
                        pageTitle: page.pageTitle,
                        pageStatus: page.pageStatus,
                        updatedAt: page.updatedAt
                    }))
                }
            } : []);
        })
        .catch((error) => {
            reject(error);
            console.log(error);
        });
    });
}

export const getPageById = (id) => {
    return new Promise((resolve, reject) => {
        axios({
            method: 'GET',
            url: `${BASE_API_URL}/page/${id}`
        })
        .then((response) => {
            let page = response.data;
            resolve(page ? {
                _id: page._id,
                pageName: page.pageName,
                pageTitle: page.pageTitle,
                pageStatus: page.pageStatus,
                updatedAt: page.updatedAt,
                blocks: page.blocks,
                previousPageStatus: page.previousPageStatus,
                scheduledTimestamp: page.scheduledTimestamp,
                isPublished: page.isPublished,
                project: page.project,
                table: page.table
            } : null);
        })
        .catch((error) => {
            reject(error);
            console.log(error);
        });
    });
}

export const addNewPage = (projectId, pageDetails) => {

    let newData = {
        "projectID": projectId,
        "pageName": pageDetails ? pageDetails.pageName : "index",
        "pageTitle": pageDetails ? pageDetails.pageTitle : "Index Page",
        "previousPageStatus": null,
        "pageStatus": pageDetails ? pageDetails.scheduledTimestamp && compareDateToNowInMinutes(pageDetails.scheduledTimestamp) === true ? "scheduled" : pageDetails.pageStatus : "draft",
        "createdAt": generateTimestamp(),
        "updatedAt": generateTimestamp(),
        "visibility": pageDetails ? pageDetails.visibility : "public",
        "isPublished": pageDetails ? pageDetails.isPublished : false,
        "blocks": pageDetails ? pageDetails.blocks : [],
        "scheduledTimestamp": pageDetails ? pageDetails.scheduledTimestamp && compareDateToNowInMinutes(pageDetails.scheduledTimestamp) === true ? pageDetails.scheduledTimestamp : null : null,
        "project": "IT_APPBUILDER",
        "table": "PAGE"
    };

    return new Promise((resolve, reject) => {
        axios({
            method: 'POST',
            url: `${BASE_API_URL}/page`,
            data: newData,
            headers: { "Content-Type": "application/json" }
        })
        .then((response) => {
            let data = response.data;
            resolve({defaultPageId: data ? data["0"] : null});
        })
        .catch((error) => {
            reject(error);
            console.log(error);
        });
    });
}

export const updatePageById = (id, projectId, pageDetails) => {
    return new Promise((resolve, reject) => {
        getPageById(id)
        .then(page => {
            let newData = {
                "projectID": projectId,
                "pageName": pageDetails.pageName ? pageDetails.pageName : page.pageName,
                "pageTitle": pageDetails.pageTitle ? pageDetails.pageTitle : page.pageTitle,
                "previousPageStatus": pageDetails.previousPageStatus ? pageDetails.previousPageStatus : page.previousPageStatus,
                "pageStatus": pageDetails.pageStatus ? pageDetails.pageStatus : page.pageStatus,
                "createdAt": page.createdAt,
                "updatedAt": generateTimestamp(),
                "visibility": pageDetails.visibility ? pageDetails.visibility : page.visibility,
                "isPublished": pageDetails.isPublished ? pageDetails.isPublished : page.isPublished,
                "blocks": pageDetails.blocks ? pageDetails.blocks : page.blocks,
                "scheduledTimestamp": pageDetails.scheduledTimestamp ? pageDetails.scheduledTimestamp : page.scheduledTimestamp,
                "project": page.project ? page.project : "IT_APPBUILDER",
                "table": page.table ? page.table : "PAGE"
            };

            axios({
                method: 'PUT',
                url: `${BASE_API_URL}/page/${id}`,
                data: newData,
                headers: { "Content-Type": "application/json" }
            })
            .then((response) => {
                let data = response.data;
                resolve({defaultPageId: data ? id : null});
            })
            .catch((error) => {
                reject(error);
                console.log(error);
            });
        })
        .catch(error => console.log(error));
    });
}

export const updatePageStatusById = (id, projectId, pageStatus) => {
    getPageById(id)
        .then(page => {
            let newData = {
                "projectID": projectId,
                "pageName": page.pageName,
                "pageTitle": page.pageTitle,
                "previousPageStatus": page.pageStatus,
                "pageStatus": pageStatus ? pageStatus : "draft",
                "createdAt": page.createdAt,
                "updatedAt": generateTimestamp(),
                "isPublished": page.isPublished ? page.isPublished : false,
                "blocks": page.blocks ? page.blocks : [],
                "scheduledTimestamp": page.scheduledTimestamp ? page.scheduledTimestamp : null,
                "project": page.project,
                "table": page.table
            };

            return  new Promise((resolve, reject) => {
                axios({
                    method: 'PUT',
                    url: `${BASE_API_URL}/page/${id}`,
                    data: newData,
                    headers: { "Content-Type": "application/json" }
                })
                .then((response) => {
                    let data = response.data;
                    resolve(data ? true : false);
                })
                .catch((error) => {
                    reject(error);
                    console.log(error);
                });
            });
        })
        .catch(error => console.log(error));
}

export const restorePageStatusById = (id, projectId) => {
    getPageById(id)
        .then(page => {
            let newData = {
                "projectID": projectId,
                "pageName": page.pageName,
                "pageTitle": page.pageTitle,
                "previousPageStatus": page.previousPageStatus,
                "pageStatus": page.previousPageStatus ? page.previousPageStatus : page.pageStatus,
                "createdAt": page.createdAt,
                "updatedAt": generateTimestamp(),
                "isPublished": page.isPublished ? page.isPublished : false,
                "blocks": page.blocks ? page.blocks : [],
                "scheduledTimestamp": page.scheduledTimestamp ? page.scheduledTimestamp : null
            };

            return  new Promise((resolve, reject) => {
                axios({
                    method: 'PUT',
                    url: `${BASE_API_URL}/page/${id}`,
                    data: newData,
                    headers: { "Content-Type": "application/json" }
                })
                .then((response) => {
                    let data = response.data;
                    resolve(data ? true : false);
                })
                .catch((error) => {
                    reject(error);
                    console.log(error);
                });
            });
        })
}

export const removePageById = (id) => {
    return new Promise((resolve, reject) => {
        axios({
            method: 'DELETE',
            url: `${BASE_API_URL}/page/${id}`,
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then((response) => {
            let data = response.data;
            resolve({defaultPageId: data ? data["0"] : null});
        })
        .catch((error) => {
            reject(error);
            console.log(error);
        });
    });
}