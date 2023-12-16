const { Client } = require('../db');


const getAllClients = async (req, res, next) => {
    try {
        const clients = await Client.findAll();
        res.status(200).json(clients);
    } catch (error) {
        next(error);
    }
};

async function createClient(req, res) {
    try {
      const newClient = await Client.create(req.body);
      res.json(newClient);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

const deleteClient = async (req, res, next) => {
  const clientId = req.params.id;
  try {
    await Client.destroy({
      where: { id: clientId },
    });
    res.json({ message: 'Client deleted successfully' });
  } catch (error) {
    next(error);
  }
};

const updateClient = async (req, res, next) => {
  const clientId = req.params.id;
  try {
    await Client.update(req.body, {
      where: { id: clientId },
    });
    res.json({ message: 'Client updated successfully' });
  } catch (error) {
    next(error);
  }
};

module.exports = { getAllClients, createClient, deleteClient, updateClient };