const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint
// find all tags
// be sure to include its associated Product data

router.get('/', (req, res) => {
  try{
    const tagData = await Tag.findAll({
      include: [
        {
          model: Product,
          attributes: ['id', 'product_name', 'price', 'stock', 'category_id']
        }
      ]
    })
    res.status(200).json(productData)
  }catch (err) {
    res.status(500).json(err);
  }

});
// find a single tag by its `id`
// be sure to include its associated Product data

router.get('/:id', (req, res) => {
  try{
    const tagData = await Tag.findOne({
      where: {
        id: req.params.id
      },
      includes: [
        {
          model: Product,
          attributes: ['id', 'product_name', 'price', 'stock', 'category_id']
        }
      ]
    })
    if (!tagData) {
      res.status(404).json({ message: 'No tag found'});
    }
    res.status(200).json(tagData)
  }catch (err) {
    res.status(500).json(err);
  }
});

// create a new tag
router.post('/', (req, res) => {
  try{
    const tagData = await Tag.create({
      tag_name: req.body.tag_name
    })

    res.status(200).json(tagData)
  }catch (err) {
    res.status(500).json(err);
  }
});

// update a tag's name by its `id` value
router.put('/:id', (req, res) => {
  try{
    const tagData = await Tag.update(req.body, {
      where: {
        id: req.params.id
      }
    })
    if (!tagData) {
      res.status(404).json({ message: 'No tag found'})
    }
    res.status(200).json(tagData)
  }catch (err) {
    res.status(500).json(err);
  }

});

// delete on tag by its `id` value
router.delete('/:id', (req, res) => {
  try{
    const tagData = await Tag.destroy({
      where: {
        id: req.params.id
      }
    })
      if (!tagData) {
      res.status(404).json({ message: 'No category found'});
    }
    res.status(200).json(tagData)
  }catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
