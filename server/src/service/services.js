const model = require("../models/models");

const createData = async (body) => {
  const data = await model.create(body);
  return data;
};
module.exports = {
  createData,
};
