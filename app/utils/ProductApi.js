const axiosclient = require('./axiosclient');

// Function to fetch the latest products
const getLatestProducts = () => axiosclient.get('/products?populate=*');

const getProductbyCategory = (category) => axiosclient.get(`/products?filters[category][$eq]=${category}&populate=*`)
module.exports = {
    getLatestProducts,
    getProductbyCategory

};
