const router = require('express').Router()
const articlesServices = require('./articles.services')

router.route('/articles')
    .get(articlesServices.getAllArticles)

module.exports = router
