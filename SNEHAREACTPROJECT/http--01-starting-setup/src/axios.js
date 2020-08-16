import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/'
})
/* This overides the baseURL added in index.js */

export default instance