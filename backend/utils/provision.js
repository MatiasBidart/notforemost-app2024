const config = require('../config')
const DynamicData = require('../schemes/articles.dynamical.schema')
const Data = require('../schemes/articles.structured.schema')
const provision = config.dataProvision === "secure" 
  ? DynamicData 
  : Data;

module.exports = provision