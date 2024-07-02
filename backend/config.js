require('dotenv').config()
const config = {
    port: process.env.PORT || 9000,
    connection: process.env.CONNECTION || 'mongodb://localhost:27017/articles',
    dataProvision : process.env.DATA_PROVISION || "secure"
    }
module.exports = config