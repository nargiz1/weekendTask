import axios from 'axios';

const Axios = axios.create({
    baseURL: 'https://northwind.vercel.app',
});

export default Axios