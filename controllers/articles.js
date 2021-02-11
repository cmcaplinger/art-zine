const Article = require('../models/article');
const express = require('express');
const articleRouter = express.Router();

//INDUCES - DON'T NEED NEW, EDIT

//Create
articleRouter.post('/', async (req, res) => {
    try {
        const newArticle = await Article.create(req.body);

        res
            .status(200)
            .json(newArticle)
    } catch(error) {
        res
            .status(400)
            .json(error)
    }
})

//Read

//Index
articleRouter.get('/', async (req, res) => {
    try {
        const foundArticles = await Article.find({})
        

        res
            .status(200)
            .json(foundArticles)
    } catch(error) {
        res
            .status(400)
            .json(error)
    }
})

//Show
articleRouter.get('/:id', async (req, res) => {
    try {
            const foundArticle = await Article.findById(req.params.id)
            // await foundArticle.execPopulate('authors')

            res
                .status(200)
                .json(foundArticle)

    } catch(error) {
        res
            .status(400)
            .json(error)
    }
})

//Destroy

articleRouter.delete('/:id', async (req, res) => {
    try {
            const foundArticle = await Article.findByIdAndDelete(req.params.id)

            res
                .status(200)
                .json(foundArticle)

    } catch(error) {
        res
            .status(400)
            .json(error)
    }
})

//Update

articleRouter.put('/:id', async (req, res) => {
    try {
            const foundArticle = await Article.findByIdAndUpdate(req.params.id, req.body, { new: true } )

            res
                .status(200)
                .json(foundArticle)

    } catch(error) {
        res
            .status(400)
            .json(error)
    }
})

module.exports = articleRouter