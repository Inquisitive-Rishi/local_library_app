const Author = require('../models/author')
const asyncHandler = require('express-async-handler')

exports.author_list = asyncHandler(async (req, res, next) => {
    const allAuthors = await Author.find({}).sort({family_name:1}).exec()

    res.render("author_list", {
        title: "Author List",
        author_list: allAuthors,
    })
})

exports.author_detail = asyncHandler(async (req, res, next) => {
    res.send('Not implemented: Author_detail')
})

exports.author_create_get = asyncHandler(async (req, res, next) => {
    res.send('Not implemented: Author create_GET')
})

exports.author_create_post = asyncHandler(async (req, res, next) => {
    res.send('Not implemented: Author create_POST')
})

exports.author_delete_get = asyncHandler(async (req, res, next) => {
    res.send('Not implemented: Author delete_GET')
})

exports.author_delete_post = asyncHandler(async (req, res, next) => {
    res.send('Not implemented: Author delete_POST')
})

exports.author_update_get = asyncHandler(async (req, res, next) => {
    res.send('Not implemented: Author update_GET')
})

exports.author_update_post = asyncHandler(async (req, res, next) => {
    res.send('Not implemented: Author update_POST')
})