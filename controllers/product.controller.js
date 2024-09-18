const Product = require('../models/product.model');

const getProducts = async (req, res) => {
    try {
        const product = await Product.find({});
        res.status(200).send({
            message: "Successfully Data listed",
            status: 200,
            success: true,
            data: product
        })
    } catch (error) {
        res.status(500).send({
            message: error.message,
            status: 500,
            success: false
        });
    }
}

const getProductId = async (req, res) => {
    try {
        const {id} = req.params;
        const product = await Product.findById(id);
        res.status(200).send({
            message: "Successfully Data listed",
            status: 200,
            success: true,
            data: product
        })
    } catch (error) {
        res.status(500).send({
            message: error.message,
            status: 500,
            success: false
        });
    }
}

const addProduct = async (req, res) => {

    try {
        const product = await Product.create(req.body);
        res.status(200).send({
            message: "Successfully Data added",
            status: 200,
            success: true,
            data: product
        })
    } catch (error) {
        res.status(500).send({
            message: error.message,
            status: 500,
            success: false
        });
    }
    res.send(req.body);
}

const deleteProduct = async (req, res) => {
    try {

        const {id} = req.params;
        const product = await Product.findByIdAndDelete(id);

        if(!product) {
            return res.status(404).send({
                message: "Product not found",
                status: 404,
                success: false,
            })
        }
        res.status(200).send({
            message: "Successfully Deleted listed",
            status: 200,
            success: true,
        })
    } catch (error) {
        res.status(500).send({
            message: error.message,
            status: 500,
            success: false
        });
    }
}

const updateProduct = async (req, res) => {
    try {

        const {id} = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body);

        if(!product) {
            return res.status(404).send({
                message: "Product not found",
                status: 404,
                success: false,
            })
        }

        const updatedProduct = await Product.findById(id);
        res.status(200).send({
            message: "Successfully Data listed",
            status: 200,
            success: true,
            data: updatedProduct
        })
    } catch (error) {
        res.status(500).send({
            message: error.message,
            status: 500,
            success: false
        });
    }
}

module.exports = { getProducts, addProduct, deleteProduct, updateProduct, getProductId }