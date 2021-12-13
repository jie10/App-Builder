import axios from "axios";

import { BASE_API_URL } from "../utils/constants/api";

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
            console.log(data)
            resolve(data ? true : false);
        })
        .catch((error) => {
            reject(error);
            console.log(error);
        });
    });
}