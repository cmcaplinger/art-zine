const Author = require('../models/author');
const express = require('express');
const authorRouter = express.Router();

//INDUCES - DON'T NEED NEW, EDIT

//Create
authorRouter.post('/', async (req, res) => {
    try {
        const newAuthor = await Author.create(req.body);

        res
            .status(200)
            .json(newAuthor)
    } catch(error) {
        res
            .status(400)
            .json(error)
    }
})

//Read

//Index
authorRouter.get('/', async (req, res) => {
    try {
        const foundAuthors = await Author.find({})
        

        res
            .status(200)
            .json(foundAuthors)
    } catch(error) {
        res
            .status(400)
            .json(error)
    }
})

//Show
authorRouter.get('/:id', async (req, res) => {
    try {
            const foundAuthor = await Author.findById(req.params.id)
            // await foundArticle.execPopulate('authors')

            res
                .status(200)
                .json(foundAuthor)

    } catch(error) {
        res
            .status(400)
            .json(error)
    }
})

//Destroy

authorRouter.delete('/:id', async (req, res) => {
    try {
            const foundAuthor = await Author.findByIdAndDelete(req.params.id)

            res
                .status(200)
                .json(foundAuthor)

    } catch(error) {
        res
            .status(400)
            .json(error)
    }
})

//Update

authorRouter.put('/:id', async (req, res) => {
    try {
            const foundAuthor = await Author.findByIdAndUpdate(req.params.id, req.body, { new: true } )

            res
                .status(200)
                .json(foundAuthor)

    } catch(error) {
        res
            .status(400)
            .json(error)
    }
})

module.exports = authorRouter