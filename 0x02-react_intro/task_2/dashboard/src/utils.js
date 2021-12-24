
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

module.exports = { getFullYear, getFooterCopy }
