import axios from "axios";

import { BASE_API_URL } from "../utils/constants/api";
import { generateTimestamp } from "../utils/helpers/generate";

export const getProjects = new Promise((resolve, reject) => {
    axios({
        method: 'GET',
        url: `${BASE_API_URL}/project`
    })
    .then((response) => {
        let list = response.data;
        resolve(list && list.length > 0 ? list : []);
    })
    .catch((error) => {
        reject(error);
        console.log(error);
    });
});

export const getProjectNameById = (id) => {
    return new Promise((resolve, reject) => {
        axios({
            method: 'GET',
            url: `${BASE_API_URL}/project/${id}`
        })
        .then((response) => {
            let data = response.data;
            resolve(data ? {
                _id: data._id,
                appName: data.appName
            } : null);
        })
        .catch((error) => {
            reject(error);
            console.log(error);
        });
    });
};

export const getProjectDashboardById = (id) => {
    return new Promise((resolve, reject) => {
        axios({
            method: 'GET',
            url: `${BASE_API_URL}/project/${id}`
        })
        .then((response) => {
            let data = response.data;
            resolve(data ? {
                _id: data._id,
                appName: data.appName,
                appURL: data.appURL,
                isPublished: data.isPublished,
                shortDesc: data.shortDesc,
                category: data.category,
                createdAt: data.createdAt
            } : null);
        })
        .catch((error) => {
            reject(error);
            console.log(error);
        });
    });
};

export const getProjectPreviewById = (id) => {
    return new Promise((resolve, reject) => {
        axios({
            method: 'GET',
            url: `${BASE_API_URL}/project/${id}`
        })
        .then((response) => {
            let data = response.data;
            resolve(data ? {
                _id: data._id,
                appName: data.appName,
                isPublished: data.isPublished,
                appURL: data.appURL
            } : null);
        })
        .catch((error) => {
            reject(error);
            console.log(error);
        });
    });
};

export const addNewProject = (data) => {
    let newData = {
        "category": data.category,
        "buildMode": data.buildMode,
        "appName": data.appName,
        "shortDesc": data.shortDesc,
        "appURL": data.appURL ? data.appURL : "https://cebupacificair-dev.apigee.net/ceb-poc-appbuilder/preview",
        "isPublished": false,
        "themePreview": data.buildMode === "default_template" ? "default-template.png" : "no-preview-available.png",
        "createdAt": generateTimestamp()
    };

    return new Promise((resolve, reject) => {
        axios({
            method: 'POST',
            url: `${BASE_API_URL}/project`,
            data: newData,
            headers: { "Content-Type": "application/json" }
        })
        .then((response) => {
            let data = response.data;
            resolve({appId: data ? data["0"] : null});
        })
        .catch((error) => {
            reject(error);
            console.log(error);
        });
    });
}