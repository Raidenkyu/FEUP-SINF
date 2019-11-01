const axios = require('axios');
const FormData = require('form-data');

const requestAccessToken = () => {

    const client_id = 'SNIFApp';
    const client_secret = '8b14478b-6f0f-437a-86af-187eca1281d7';

    const bodyData = new FormData();

    bodyData.append('client_id', client_id);
    bodyData.append('client_secret', client_secret);
    bodyData.append('grant_type', 'client_credentials');
    bodyData.append('scope', 'application');

    axios({
        url: 'https://identity.primaverabss.com/core/connect/token',
        method: 'post',
        data: bodyData,
        headers: { ...bodyData.getHeaders() }
    }
    )
        .then((res) => {
            if (res.data.access_token) {
                console.log("Access Token:", res.data.access_token);

            }
            else {
                console.log("Could not obtain acess token.");
            }
        })
        .catch((error) => {
            console.log(error);
        });
}

module.exports = {
    requestAccessToken,
};
