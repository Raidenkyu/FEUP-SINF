const axios = require('axios');
const FormData = require('form-data');

const getBodyData = (formObj) => {
    const bodyData = new FormData();
    for (const key in formObj) {
        bodyData.append(key, formObj[key]);
    }
    return bodyData;
}

const http = (method, url,data, headers = {}) => {

    const bodyData = getBodyData(data);

    return axios({
        url: url,
        method: method,
        data: bodyData,
        headers: { ...bodyData.getHeaders(), headers }
    }
    );
};

module.exports = http;