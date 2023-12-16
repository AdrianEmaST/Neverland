const { Balance } = require('../db');

const getAllBalances = async (req, res, next) => {
  try {
    const balances = await Balance.findAll();
    res.status(200).json(balances);
  } catch (error) {
    next(error);
  }
};

async function createBalance(req, res) {
  try {
    const newBalance = await Balance.create(req.body);
    res.json(newBalance);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

const deleteBalance = async (req, res, next) => {
  const balanceId = req.params.id;
  try {
    await Balance.destroy({
      where: { id: balanceId },
    });
    res.json({ message: 'Balance deleted successfully' });
  } catch (error) {
    next(error);
  }
};

const updateBalance = async (req, res, next) => {
  const balanceId = req.params.id;
  try {
    await Balance.update(req.body, {
      where: { id: balanceId },
    });
    res.json({ message: 'Balance updated successfully' });
  } catch (error) {
    next(error);
  }
};

module.exports = { getAllBalances, createBalance, deleteBalance, updateBalance };