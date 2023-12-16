const { Birthday } = require('../db');

const getAllBirthdays = async (req, res, next) => {
  try {
    const birthdays = await Birthday.findAll();
    res.status(200).json(birthdays);
  } catch (error) {
    next(error);
  }
};

async function createBirthday(req, res) {
  try {
    const newBirthday = await Birthday.create(req.body);
    res.json(newBirthday);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

const deleteBirthday = async (req, res, next) => {
  const birthdayId = req.params.id;
  try {
    await Birthday.destroy({
      where: { id: birthdayId },
    });
    res.json({ message: 'Birthday deleted successfully' });
  } catch (error) {
    next(error);
  }
};

const updateBirthday = async (req, res, next) => {
  const birthdayId = req.params.id;
  try {
    await Birthday.update(req.body, {
      where: { id: birthdayId },
    });
    res.json({ message: 'Birthday updated successfully' });
  } catch (error) {
    next(error);
  }
};

module.exports = { getAllBirthdays, createBirthday, deleteBirthday, updateBirthday };