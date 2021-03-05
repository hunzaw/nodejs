const express = require('express')
const app = express()

const port = process.env.PORT || 3000

app.use(express.json())

const object = {
    name: 'nodejs rest api',
    version: {
        number: "^4.17.1",
        framwork: "express"
    },
    tag_line: "you know for Rest"
}

app.get('/', (req, res) => {
    res.send(object)
})

app.listen(port, () => {
    console.log(`Listening on port ${port}...`)
})