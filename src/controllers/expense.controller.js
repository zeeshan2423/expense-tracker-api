// expenseController.js
const asyncHandler = require('express-async-handler');
const Expense = require('../models/Expense');

const getExpenses = asyncHandler(async (req, res) => {
  const { filter } = req.query;
  const dateFilter = {};

  switch (filter) {
    case 'week':
      dateFilter.$gte = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
      break;
    case 'month':
      dateFilter.$gte = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000);
      break;
    case '3months':
      dateFilter.$gte = new Date(Date.now() - 90 * 24 * 60 * 60 * 1000);
      break;
    case 'custom':
      dateFilter.$gte = new Date(req.query.start);
      dateFilter.$lte = new Date(req.query.end);
      break;
  }

  const expenses = await Expense.find({
    user: req.user._id,
    ...(Object.keys(dateFilter).length && { date: dateFilter })
  });

  res.json(expenses);
});

const createExpense = asyncHandler(async (req, res) => {
  const { amount, description, category } = req.body;
  
  const expense = await Expense.create({
    amount,
    description,
    category,
    user: req.user._id
  });

  res.status(201).json(expense);
});

const updateExpense = asyncHandler(async (req, res) => {
  const expense = await Expense.findById(req.params.id);
  
  if (expense.user.toString() !== req.user._id.toString()) {
    res.status(401);
    throw new Error('Not authorized');
  }

  const updatedExpense = await Expense.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.json(updatedExpense);
});

const deleteExpense = asyncHandler(async (req, res) => {
  const expense = await Expense.findById(req.params.id);
  
  if (!expense) {
    res.status(404);
    throw new Error('Expense not found');
  }

  if (expense.user.toString() !== req.user._id.toString()) {
    res.status(401);
    throw new Error('Not authorized');
  }

  await expense.deleteOne();
  res.json({ message: 'Expense removed' });
});

module.exports = {
  getExpenses,
  createExpense,
  updateExpense,
  deleteExpense
};