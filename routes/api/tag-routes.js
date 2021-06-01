const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// find a single tag by its `id`
// be sure to include its associated Product data
router.get('/:id', (req, res) => {try{
  const productData = await Product.findAll({
    include: [
      {
        model: Category,
        attributes: ['id', 'category_name']
      },
      {
        model: Tag,
        attributes: ['id', 'tag_name']
      }
    ]
  })
  res.status(200).json(productData)
}catch (err) {
  res.status(500).json(err);
}
});

// create a new tag
router.post('/', (req, res) => {
});

// update a tag's name by its `id` value
router.put('/:id', (req, res) => {
});

// delete on tag by its `id` value
router.delete('/:id', (req, res) => {
});

module.exports = router;
