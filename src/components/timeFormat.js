
function timeFormat(date) {
    const docToDate = new Date(date * 1000);
    const day = docToDate.getDate();
    const month = docToDate.getMonth() + 1;
    const year = docToDate.getFullYear();
    const hour = docToDate.getHours();
    const minute = docToDate.getMinutes();
    return `${day}.${month}.${year} a las ${hour}:${minute}`;
}

export default timeFormat

