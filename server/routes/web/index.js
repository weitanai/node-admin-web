module.exports = app => {
  const router = require('express').Router()
  const mongoose = require('mongoose')
  const Faq = require('../../models/Faq')
  const Home = require('../../models/Home')
  const Article = require('../../models/Article')

  router.get('/faq', async (req, res) => {
    const faq = await Faq.find();
    res.send(faq);

  })
  router.get('/home', async (req, res) => {
    const faq = await Home.find();
    res.send(faq);

  })

  router.get('/blog', async (req, res) => {
    const article = await Article.find();
    res.send(article);
  })

  router.get('/blogposts/:id', async (req, res) => {
    if(req.params.id === null)  res.send('req.params.id is failed' )
    const data = await Article.findById(req.params.id)
    res.send(data)
  })

  app.use('/web/api', router)
}