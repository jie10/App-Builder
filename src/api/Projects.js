import axios from "axios";

import { BASE_API_URL } from "../utils/constants/api";
import { DEFAULT_PREVIEW_IMAGE, DEFAULT_GLOBAL_STYLE } from "../utils/constants/dataMart";
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

export const getProjectById = (id) => {
    return new Promise((resolve, reject) => {
        axios({
            method: 'GET',
            url: `${BASE_API_URL}/project/${id}`
        })
        .then((response) => {
            let data = response.data;
            resolve(data ? data : null);
        })
        .catch((error) => {
            reject(error);
            console.log(error);
        });
    });
};

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
        "themePreview": data.buildMode === "default_template" ? "/images/preview/default-template.png" : "/images/preview/no-preview-available.png",
        "createdAt": generateTimestamp(),
        "project": "IT_APPBUILDER",
        "table": "PROJECT"
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

export const updateProjectById = (id, data) => {
    return new Promise((resolve, reject) => {
        getProjectById(id)
            .then(project => {
                let checkData = data && Object.keys(data).length !== 0 && Object.getPrototypeOf(data) === Object.prototype;

                let newData = {
                    "category": checkData ? data.category : project.category,
                    "buildMode": checkData ? data.buildMode : project.buildMode,
                    "appName": checkData ? data.appName : project.appName,
                    "shortDesc": checkData ? data.shortDesc : project.shortDesc,
                    "appURL": checkData ? data.appURL : project.appURL,
                    "isPublished": project.isPublished,
                    "themePreview": checkData ? DEFAULT_PREVIEW_IMAGE[data.buildMode]: project.themePreview,
                    "createdAt": project.createdAt
                };

                if (data && data.defaultTheme === project.buildMode) {
                    newData.globalStyleSettings = {
                        "fontFamily": data && data.fontFamily ? data.fontFamily : DEFAULT_GLOBAL_STYLE[data.defaultTheme].fontFamily,
                        "fontSize": data && data.fontSize ? data.fontSize : DEFAULT_GLOBAL_STYLE[data.defaultTheme].fontSize,
                        "fontColor": data && data.fontColor ? data.fontColor : DEFAULT_GLOBAL_STYLE[data.defaultTheme].fontColor
                    }
                } else {
                    newData.globalStyleSettings = DEFAULT_GLOBAL_STYLE[data.defaultTheme]
                }

                axios({
                    method: 'PUT',
                    url: `${BASE_API_URL}/project/${id}`,
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
            .catch(error => console.log(error));
    });
}

export const updateProjectStatusById = (id, projectStatus) => {
    return new Promise((resolve, reject) => {
        getProjectById(id)
        .then(project => {
            let newData = {
                "category": project.category,
                "buildMode": project.buildMode,
                "appName": project.appName,
                "shortDesc": project.shortDesc,
                "appURL": project.appURL,
                "isPublished": projectStatus ? projectStatus : false,
                "themePreview": project.themePreview,
                "createdAt": project.createdAt
            };

            axios({
                method: 'PUT',
                url: `${BASE_API_URL}/project/${id}`,
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
        .catch(error => console.log(error));
    });

}

export const buildProject = (id, projectType) => {
    return new Promise((resolve, reject) => {
        axios({
            method: 'POST',
            url: `${BASE_API_URL}/build`,
            data: {
                "projectID": id,
                "projectType": projectType
            },
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