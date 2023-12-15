const service = require("../service/services");

const create = async (req, res) => {
  const userData = await service.createData(req.body);
  res.send(userData);
};

module.exports = {
  create,
};
