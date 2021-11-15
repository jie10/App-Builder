export const delay = (callback, timeInSeconds) => {
    setTimeout(() => {
        callback();
    }, timeInSeconds);
}