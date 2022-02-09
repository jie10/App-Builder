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

export const getProjectEditorById = (id) => {
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
                appURL: data.appURL,
                buildMode: data.buildMode,
                globalStyleSettings: data.globalStyleSettings
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
        "themePreview": data.buildMode ? DEFAULT_PREVIEW_IMAGE[data.buildMode] : DEFAULT_PREVIEW_IMAGE["scratch"],
        "createdAt": generateTimestamp(),
        "globalStyleSettings": { body: data.buildMode ? DEFAULT_GLOBAL_STYLE[data.buildMode].body : DEFAULT_GLOBAL_STYLE["scratch"].body },
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
                        body: {
                            "fontFamily": data.fontFamily ? data.fontFamily : project.globalStyleSettings.body.fontFamily ? project.globalStyleSettings.body.fontFamily : DEFAULT_GLOBAL_STYLE[data.defaultTheme].body.fontFamily,
                            "fontSize": data.fontSize ? data.fontSize : project.globalStyleSettings.body.fontSize ? project.globalStyleSettings.body.fontSize : DEFAULT_GLOBAL_STYLE[data.defaultTheme].body.fontSize,
                            "color": data.color ? data.color : project.globalStyleSettings.body.color ? project.globalStyleSettings.body.color : DEFAULT_GLOBAL_STYLE[data.defaultTheme].body.color
                        }
                    }
                } else {
                    newData.globalStyleSettings = { body: DEFAULT_GLOBAL_STYLE[data.defaultTheme].body }
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
            url: `https://2f38-2001-4451-a3d-d400-244b-35b8-9b2c-cb83.ngrok.io/`,
            data: {
                "Message": {
                    "Action": "APP_BUILDER",
                    "Parameters": {
                        "projectID": id
                    }
                }
            },
            headers: { "Content-Type": "application/json" }
        })
        .then((response) => {
            let data = response.data;
            resolve(data ? data : false);
        })
        .catch((error) => {
            reject(error);
            console.log(error);
        });
    });
}