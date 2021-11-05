import { generateUniqId, generateTimestamp } from "../../utils/helpers/generate";
import { encodeToURL } from "../../utils/helpers/url";
import { parseObject, unparseObject } from "../../utils/helpers/json";


let list = parseObject(localStorage.getItem("apps_list"));

export const findAll = () => list && list.length > 0 ? list : [];

export const findOne = (key) => list && list.length > 0 ? list.filter(item => item === key)[0] : [];

export const createNew = (data) => {
    data._id = generateUniqId();

    data.appURL = `${encodeToURL(data.appName)}-${data._id}`;
    
    data.createdTimestamp = generateTimestamp();

    let newList = list ? list.concat(data) : [ data ];

    localStorage.setItem("apps_list", unparseObject(newList));
}

export const removeOne = (key) => {
    let newList = list && list.length > 0 ? list.filter(item => item !== key)[0] : [];

    localStorage.setItem("apps_list", unparseObject(newList));
}