const { urlencoded } = require('body-parser')
const express = require('express')
const mogoose = require('mongoose')
const cors = require('cors')
const app = express()

const start = () => {
    mogoose.connect('mongodb+srv://jambo:jambo095@cluster0.6qawl.mongodb.net/smartSuit?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    })
    console.log('success connect mongo');
}
start()

app.use(express.json())
app.use(urlencoded({ extended: true }))
app.use(cors())
app.use(require('./routes/index'))

app.listen(3000, () => {
    console.log('success connect server');
})