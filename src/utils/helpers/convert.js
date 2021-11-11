export const convertTimestampToDateTime = (unixTimestamp) => new Date(unixTimestamp);

export const convertTimestampFromNow = (unixTimestamp) => {
    let setDate = convertTimestampToDateTime(unixTimestamp);
    let nowTimeStamp = new Date();

    let years = nowTimeStamp.getFullYear() - setDate.getFullYear();
    let months = nowTimeStamp.getMonth() - setDate.getMonth();
    let days = nowTimeStamp.getDay() - setDate.getDay();
    let hours = nowTimeStamp.getHours() - setDate.getHours();
    let minutes = nowTimeStamp.getMinutes() - setDate.getMinutes();
    let seconds = nowTimeStamp.getSeconds() - setDate.getSeconds();

    if (years > 0) {
        return `${years > 1 ? `${years} years` : "A year"} ago`;
    } else if (months > 0) {
        return `${months > 1 ? `${months} months` : "A month"} ago`;
    } else if (days > 0) {
        return `${days > 1 ? `${days} days` : "A day"} ago`;
    } else if (hours > 0) {
        return `${hours > 1 ? `${hours} hours` : "An hour"} ago`;
    } else if (minutes > 0) {
        return `${minutes > 1 ? `${minutes} minutes` : "A minute"} ago`;
    } else if (seconds > 0) {
        return "A few seconds ago";
    } else {
        return "Now";
    }
}