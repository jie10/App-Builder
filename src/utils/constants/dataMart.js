import sampleUserAvatar from "../../assets/images/sample-user-avatar.jpeg";

export const sampleUser = {
    username: "Tim Powell",
    avatarImage: sampleUserAvatar
};

export const appCategories = [
    "Educational",
    "Lifestyle",
    "Productivity",
    "Business",
    "Entertainment",
    "News",
    "Communication",
    "Blog",
    "Community"
];

export const DEFAULT_GLOBAL_STYLE = {
    "scratch": {
        fontFamily: `"Roboto","Helvetica","Arial",sans-serif`,
        fontSize: "0.875rem",
        fontColor: "#1e1e1e"
    },
    "default_template": {
        fontFamily: `'FSAlbert', sans-serif`,
        fontSize: "1rem",
        fontColor: "#212529"
    },
    "enterprise_template": {
        fontFamily: `"Roboto","Helvetica","Arial",sans-serif`,
        fontSize: "0.875rem",
        fontColor: "#1e1e1e"
    }
}

export const DEFAULT_PREVIEW_IMAGE = {
    "scratch": "/images/preview/no-preview-available.png",
    "default_template": "/images/preview/default-template.png",
    "enterprise_template": "/images/preview/no-preview-available.png"
}