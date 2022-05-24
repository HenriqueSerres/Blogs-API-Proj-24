const categoryService = require('../services/categoryService');

const addCategory = async (req, res, next) => {
  try {
    const { name } = req.body;
    const newCategory = await categoryService.addCategory(name);
    if (newCategory) {
      return res.status(201).json(newCategory);
    }    
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const getAllCategories = async (req, res, next) => {
  try {
    const allCategories = await categoryService.getAllCategories();
    if (allCategories.length !== 0) {
      return res.status(200).json(allCategories);
    }
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = {
  addCategory,
  getAllCategories,
};