const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint
// find all categories
// be sure to include its associated Products

router.get('/', (req, res) => {
  try {
    const categoryData = await Category.findAll({
      include: [
        {
          model: Product,
          attributes: ['id', 'product_name', 'price', 'stock', 'category_id'],
        },
      ],
    });
    res.status(200).json(categoryData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
// find one category by its `id` value
// be sure to include its associated Products

router.get('/:id', (req, res) => {
  try {
    const categoryData = await Category.findOne({
      where: {
        id: req.params.id
      },
      include: [
        {
          model: Product,
          attributes: ['id', 'product_name', 'price', 'stock', 'category_id']
        }
      ] 
});

// create a new category
router.post('/', (req, res) => { try{
  const categoryData = await Category.create({
    category_name: req.body.category_name
  })

  res.status(200).json(categoryData)
}catch (err) {
  res.status(500).json(err);
}
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
