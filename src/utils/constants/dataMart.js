import sampleUserAvatar from "../../assets/images/sample-user-avatar.jpeg";

import { BASIC_THEME_STYLE } from "../../themes/BasicTheme";
import { OMNIX_THEME_STYLE } from "../../themes/OMNIXTheme";
import { ENTERPRISE_THEME_STYLE } from "../../themes/EnterpriseTheme";

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

export const appTemplates = [
    {
        "name": "OMNIX",
        "value": "default_template"
    },
    {
        "name": "Enterprise",
        "value": "enterprise_template"
    }
]

export const DEFAULT_GLOBAL_STYLE = {
    "scratch": BASIC_THEME_STYLE,
    "default_template": OMNIX_THEME_STYLE,
    "enterprise_template": ENTERPRISE_THEME_STYLE
}

export const DEFAULT_PREVIEW_IMAGE = {
    "scratch": "/images/preview/no-preview-available.png",
    "default_template": "/images/preview/default-template.png",
    "enterprise_template": "/images/preview/no-preview-available.png"
}