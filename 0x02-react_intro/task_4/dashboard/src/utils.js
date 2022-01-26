
function getFullYear() {
    const currentYear = new Date().getFullYear();
    return currentYear;
}

function getFooterCopy(isIndex) {
    if (isIndex === true){
        return 'Holberton School';
    }
    return 'Holberton School main dashboard';
}

function getLatestNotification() {
    return `<strong>Urgent requirement</strong> - complete by EOD`;
}

module.exports = {
    getFullYear,
    getFooterCopy,
    getLatestNotification 
}
