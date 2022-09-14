export const sortByKey = (arr, keyName) => {
    return arr.sort((a, b) => {
        if(a[keyName] < b[keyName]) { return -1; }
        if(a[keyName] > b[keyName]) { return 1; }
        return 0;
    });
}