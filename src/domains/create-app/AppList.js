export const findAll = () => {
    let list = JSON.parse(localStorage.getItem("apps_list"));

    return list && list.length > 0 ? list : [];
}

export const findOne = (key) => {
    let list = JSON.parse(localStorage.getItem("apps_list"));

    return list && list.length > 0 ? list.filter(item => item === key)[0] : [];
}

export const createNew = (data) => {
    let list = JSON.parse(localStorage.getItem("apps_list"));

    let newList = list ? list.concat(data) : [ data ];

    localStorage.setItem("apps_list", JSON.stringify(newList));
}

export const removeOne = (key) => {
    let list = JSON.parse(localStorage.getItem("apps_list"));
    let newList = list && list.length > 0 ? list.filter(item => item !== key)[0] : [];

    localStorage.setItem("apps_list", JSON.stringify(newList));
}