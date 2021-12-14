import axios from "axios";

import { BASE_API_URL } from "../utils/constants/api";

export const getComponents = new Promise((resolve, reject) => {
    axios({
        method: 'GET',
        url: `${BASE_API_URL}/component`
    })
    .then((response) => {
        let list = response.data;
        resolve(list ? list : null);
    })
    .catch((error) => {
        reject(error);
        console.log(error);
    });
});