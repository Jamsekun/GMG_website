const Product = require('../models/Product');

// GET /api/products
exports.getProducts = async (req, res) => {
  try {
    const { search, category, sortBy, priceRange, page = 1, limit = 6 } = req.query;

    const query = {};
    if (search) query.productName = { $regex: search, $options: 'i' };
    if (category) query.category = category;
    if (priceRange && priceRange.length === 2) {
      query.price = { $gte: priceRange[0], $lte: priceRange[1] };
    }

    const skip = (page - 1) * limit;
    const total = await Product.countDocuments(query);

    let products = Product.find(query).skip(skip).limit(Number(limit));
    if (sortBy) {
      const sortOptions = { price: sortBy === 'asc' ? 1 : -1 };
      products = products.sort(sortOptions);
    }

    const results = await products;

    res.json({
      products: results,
      pageInfo: {
        currentPage: Number(page),
        pages: Math.ceil(total / limit),
        total,
      },
    });
  } catch (err) {
    console.error('Error fetching products:', err);
    res.status(500).json({ message: 'Server error' });
  }
};

// GET /api/products/:id
exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findOne({ uuid: req.params.id });
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.json(product);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

// POST /api/products
exports.createProduct = async (req, res) => {
  try {
    const newProduct = new Product(req.body);
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
