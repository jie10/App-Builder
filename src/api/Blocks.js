import axios from "axios";

import { BASE_API_URL } from "../utils/constants/api";

export const getBlocksByPageId = (pageId) => {
    return new Promise((resolve, reject) => {
        axios({
            method: 'GET',
            url: `${BASE_API_URL}/block/id/${pageId}`
        })
        .then((response) => {
            let data = response.data;
            console.log(data)
            resolve(data ? data : []);
        })
        .catch((error) => {
            reject(error);
            console.log(error);
        });
    });
}

export const addNewBlock = (pageId, block) => {
    return new Promise((resolve, reject) => {
        let newData = {
            "pageID": pageId,
            "settings": block
        };

        axios({
            method: 'POST',
            url: `${BASE_API_URL}/block`,
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
}

export const updateBlockById = (id, pageId, newBlock) => {
    return new Promise((resolve, reject) => {
        let newData = {
            "pageID": pageId,
            "settings": newBlock,
            "project": "IT_APPBUILDER",
            "table": "BLOCK"
        };

        axios({
            method: 'PUT',
            url: `${BASE_API_URL}/block/${id}`,
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
    })
}

export const removeBlockById = (id) => {
    return new Promise((resolve, reject) => {
        axios({
            method: 'DELETE',
            url: `${BASE_API_URL}/block/${id}`,
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
    })
}