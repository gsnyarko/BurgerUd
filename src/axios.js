import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://humburgerp.firebaseio.com/'
});


export default instance
