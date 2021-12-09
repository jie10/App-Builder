import axios from "axios";

import { BASE_API_URL } from "../utils/constants/api";

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

export const getProjectBuildStatusById = (id) => {
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
                isPublished: data.isPublished
            } : null);
        })
        .catch((error) => {
            reject(error);
            console.log(error);
        });
    });
};