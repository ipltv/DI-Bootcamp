const products = require('../models/productsModel.js');

exports.getAllproducts = (req, res) =>{
    res.json(products);
};