import axios from 'axios';
import moment from 'moment';

const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/'
});

instance.interceptors.request.use((rc) => {
    console.log(`Request : [${moment().format('YYYY.MM.DD HH:mm:ss:SS')}][${rc.url}][${rc.method}]`);
    return rc;
}, (error) => {
    console.error(error);
    return new Promise(error);
});

instance.interceptors.response.use((rc) => {
    console.log(`Response: [${moment().format('YYYY.MM.DD HH:mm:ss:SS')}][${gerRequestUri(rc)}][${rc.status}][${rc.statusText}]`);
    return rc
}, (error) => {
    console.error(error);
    return new Promise(error);
});

const gerRequestUri = (responseConfig) => {
    return responseConfig.request.responseURL.substr(36)
}

export default instance;
