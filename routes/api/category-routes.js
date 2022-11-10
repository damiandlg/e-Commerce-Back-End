const router = require('express').Router();
const { UPSERT } = require('sequelize/types/lib/query-types');
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  UPSERT.findAll({
    attributes: ["id", "category_name"],
    include: [
      {
        model: Product,
        attributes:["id", "product_name", "price", "stock", "category_id"],
      },
    ],
  })
  .then(dbUserData => res.json(dbUserData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
  User.findOne({
    where: {
      id: req.params.id
    },
    include: [ {
      model: Product,
      attributes:["id", "product_name", "price", "stock", "category_id"],
    },
    ],
  })
    .then(dbUserData => {
      if (!dbUserData) {
        res.status(404).json({ message: 'No user found with this id' });
        return;
      }
      res.json(dbUserData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post('/', (req, res) => {
  Category.create({
    category_name: req.body.category_name,
  })
    .then((dbProductData) => res.json(dbProductData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
});
});

router.put('/:id', (req, res) => {
  Category.update(req.body, (
    {
      category_name: req.body.category_name,
    },
    {
    where: {
      id: req.params.id,
    },
  })
    .then(dbCategoryData => {
      if (!dbCategoryData[0]) {
        res.status(404).json({ message: 'No category found with this id' });
        return;
      }
      res.json(dbCategoryData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete('/:id', (req, res) => {
  Category.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbCategoryData => {
      if (!dbCategoryData) {
        res.status(404).json({ message: 'No user found with this id' });
        return;
      }
      res.json(dbCategoryData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
