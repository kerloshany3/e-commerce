const { default: axios } = require('axios');

const apiKey = process.env.NEXT_PUBLIC_REST_API_KEY;
const apiUrl = 'http://localhost:1337/api';

const axiosclient = axios.create({
    baseURL: apiUrl,
    headers: {
        Authorization: `Bearer ${apiKey}`,
    },
});

module.exports = axiosclient; // Ensure this is exporting the axios instance
