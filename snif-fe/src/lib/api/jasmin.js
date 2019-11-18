import { http, setToken } from '../http/http';

export const requestAccessToken = () => {

    const client_id = 'SNIFApp';
    const client_secret = '8b14478b-6f0f-437a-86af-187eca1281d7';

    const bodyData = {
        'client_id': client_id,
        'client_secret': client_secret,
        'grant_type': 'client_credentials',
        'scope': 'application'
    };
    
    const url = 'https://identity.primaverabss.com/core/connect/token';

    http('post', url, bodyData).then((res) => {
        if (res.data.access_token) {
            console.log("Access Token:", res.data);
            setToken(res.data.access_token);
        }
        else {
            console.log("Could not obtain acess token.");
        }
    })
    .catch((error) => {
        console.log(error);
    });

};

export const 