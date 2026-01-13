const express = require("express")

const templates = require("../templates.js")

const cors = require("cors")

const api = require("../api.js")

const app = express()


app.use(cors())

app.use(express.json())

app.get("/", (req, res) => {

    res.redirect("/categories/all?page=1")
})

app.get("/categories/:id", (req, res) => {

    res.send(templates.categoryPage(req.params.id, +req.query.page))
})

app.get("/posts/:id", (req, res) => {

    res.send(templates.postPage(req.params.id))
})

app.get("/getlatest/:count", (req, res) => {

    res.json(api.getLastPosts(req.params.count))
})

app.post("/search", (req, res) => {

    const text = req.body.text

    const posts = api.searchPost(text)

    res.json({

        posts
    })
})

module.exports = app

