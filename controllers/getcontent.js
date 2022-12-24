const Product = require("../models/productModel");

const getContent = async (req, res) => {
	try {
		const products = await Product.findAll();
		return res.status(200).json({ Products: products });
	} catch (err) {
		console.log(err.message);
		return res.status(500).json({ err: err.message });
	}
};

module.exports = getContent;
