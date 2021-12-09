import axios from "axios";

import { BASE_API_URL } from "../utils/constants/api";

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
            let data = response.data;
            resolve(data ? {
                _id: data._id,
                pageName: data.pageName,
                pageTitle: data.pageTitle,
                pageStatus: data.pageStatus,
                updatedAt: data.updatedAt,
                blocks: data.blocks
            } : null);
        })
        .catch((error) => {
            reject(error);
            console.log(error);
        });
    });
}