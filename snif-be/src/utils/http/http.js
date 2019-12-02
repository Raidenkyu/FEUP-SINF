const axios = require("axios");
const FormData = require('form-data');

const ACCOUNT = process.env.ACCOUNT;
const SUBSCRIPTION = process.env.SUBSCRIPTION;

const getBodyData = (formObj) => {
    const bodyData = new FormData();
    for (const key in formObj) {
        bodyData.append(key, formObj[key]);
    }
    return bodyData;
};

const http = (method, url, data) => {

    const bodyData = getBodyData(data);

    return axios({
        baseURL: url,
        method: method,
        data: bodyData,
        headers: { ...bodyData.getHeaders() }
    });
};

const jasminAdapter = (method, endpoint) => (

    axios({
        url: endpoint,
        baseURL: `https://my.jasminsoftware.com/api/${ACCOUNT}/${SUBSCRIPTION}/`,
        method: method,
        headers: {
            "Accept": "application/json",
            "Content-Type": "multipart/form-data",
        },
    })
);

const setToken = (token) => {
    axios.defaults.headers.common = { "Authorization": `bearer ${token}` };
};

module.exports = {
  http, jasminAdapter, setToken
};