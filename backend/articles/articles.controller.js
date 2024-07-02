const provision = require('../utils/provision')

const findArticles = async()=> {
    const data = await provision.find();
    return data    
} 

module.exports = {
    findArticles
}

