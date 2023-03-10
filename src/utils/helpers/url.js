export const encodeToURL = (givenName) => {
    let pattern = new RegExp('[\\!\\@\\#\\$\\%\\^\\&\\*\\)\\(\\+\\=\\<\\>\\{\\}\\[\\]\\:\\;\'\\"\\|\\~\\`\\?]','g');
    let newGivenName = givenName.replace(pattern, '');

    return encodeURI(newGivenName);
}

export const remveHttpFromURL = url => url.replace(/(^\w+:|^)\/\//, '');