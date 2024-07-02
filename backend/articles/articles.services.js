const articlesController = require('./articles.controller')
const getAllArticles = (req, res) => {
    articlesController.findArticles()
    .then((data)=> {res.status(200).json(data)})
    .catch((err)=> {res.status(400).json({message: err.message})})
}

module.exports = {
    getAllArticles
}